import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { ArrowLeft, Save, Eye } from 'lucide-react';

interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  featured_image_alt: string;
  primary_keyword: string;
  secondary_keywords: string;
  meta_description: string;
  author: string;
  published: boolean;
  reading_time: number;
}

export function BlogEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = id === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featured_image: '',
    featured_image_alt: '',
    primary_keyword: '',
    secondary_keywords: '',
    meta_description: '',
    author: 'SMASH Team',
    published: false,
    reading_time: 5,
  });

  useEffect(() => {
    if (!isNew && id) {
      fetchPost(id);
    }
  }, [id, isNew]);

  async function fetchPost(postId: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', postId)
      .maybeSingle();

    if (error) {
      alert('Error loading post: ' + error.message);
      navigate('/admin/blog');
    } else if (data) {
      setFormData({
        ...data,
        secondary_keywords: (data.secondary_keywords || []).join(', '),
      });
    }
    setLoading(false);
  }

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function handleTitleChange(title: string) {
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  }

  function estimateReadingTime(content: string) {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
  }

  function handleContentChange(content: string) {
    setFormData(prev => ({
      ...prev,
      content,
      reading_time: estimateReadingTime(content),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const secondaryKeywordsArray = formData.secondary_keywords
      .split(',')
      .map(k => k.trim())
      .filter(k => k);

    const postData = {
      ...formData,
      secondary_keywords: secondaryKeywordsArray,
      updated_at: new Date().toISOString(),
    };

    let error;

    if (isNew) {
      const { error: insertError } = await supabase
        .from('blog_posts')
        .insert([postData]);
      error = insertError;
    } else {
      const { error: updateError } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id);
      error = updateError;
    }

    setSaving(false);

    if (error) {
      alert('Error saving post: ' + error.message);
    } else {
      navigate('/admin/blog');
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-white/60">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <nav className="bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-black tracking-tight text-white">
            SMASH<span className="text-accent text-3xl leading-none align-baseline">.</span>
          </Link>
          <Link
            to="/admin/blog"
            className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Admin
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-black text-white mb-8">
          {isNew ? 'Create New Post' : 'Edit Post'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Basic Information</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Why Every Invoicing App Feels Like..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors font-mono text-sm"
                  placeholder="why-invoicing-apps-fail-mobile-test"
                  required
                />
                <p className="text-white/50 text-sm mt-2">
                  URL: /blog/{formData.slug || 'your-slug-here'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  rows={3}
                  placeholder="Brief summary for the blog list page..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="SMASH Team"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Reading Time (minutes)
                </label>
                <input
                  type="number"
                  value={formData.reading_time}
                  onChange={(e) => setFormData({ ...formData, reading_time: parseInt(e.target.value) || 5 })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  min="1"
                />
                <p className="text-white/50 text-sm mt-2">
                  Auto-calculated based on content: ~{estimateReadingTime(formData.content)} min
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">SEO Optimization</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Primary Keyword
                </label>
                <input
                  type="text"
                  value={formData.primary_keyword}
                  onChange={(e) => setFormData({ ...formData, primary_keyword: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Mobile Invoicing Apps"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Secondary Keywords
                </label>
                <input
                  type="text"
                  value={formData.secondary_keywords}
                  onChange={(e) => setFormData({ ...formData, secondary_keywords: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="invoicing for contractors, billing on the go, small business productivity"
                />
                <p className="text-white/50 text-sm mt-2">
                  Separate keywords with commas
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Meta Description
                </label>
                <textarea
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  rows={3}
                  maxLength={160}
                  placeholder="Are invoicing apps slowing you down? Discover why most billing tools..."
                />
                <p className="text-white/50 text-sm mt-2">
                  {formData.meta_description.length}/160 characters
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Featured Image</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                  Alt Text (for SEO)
                </label>
                <input
                  type="text"
                  value={formData.featured_image_alt}
                  onChange={(e) => setFormData({ ...formData, featured_image_alt: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Professional struggling with complex mobile invoicing app"
                />
              </div>

              {formData.featured_image && (
                <div className="rounded-lg overflow-hidden bg-white/5">
                  <img
                    src={formData.featured_image}
                    alt={formData.featured_image_alt || 'Preview'}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.currentTarget.src = '';
                      e.currentTarget.alt = 'Invalid image URL';
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Content</h2>

            <div>
              <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                Post Content (Markdown) *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => handleContentChange(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none font-mono text-sm"
                rows={20}
                placeholder="Write your post content in Markdown format...

## Heading 2
### Heading 3

Paragraph text here.

**Bold text** and *italic text*

- List item 1
- List item 2

[Link text](https://example.com)"
                required
              />
              <p className="text-white/50 text-sm mt-2">
                Supports Markdown formatting. Word count: {formData.content.trim().split(/\s+/).filter(w => w).length}
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-6">Publishing</h2>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-5 h-5 bg-white/10 border-2 border-white/20 rounded checked:bg-accent checked:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <span className="text-white font-semibold">
                  Publish this post (make it visible to the public)
                </span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accentText font-black text-base uppercase tracking-wide hover:brightness-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={18} />
              {saving ? 'Saving...' : isNew ? 'Create Post' : 'Update Post'}
            </button>

            {!isNew && formData.published && (
              <Link
                to={`/blog/${formData.slug}`}
                target="_blank"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-bold text-base uppercase tracking-wide hover:bg-white/20 transition-all"
              >
                <Eye size={18} />
                Preview
              </Link>
            )}

            <Link
              to="/admin/blog"
              className="px-8 py-4 rounded-full bg-white/10 text-white font-bold text-base uppercase tracking-wide hover:bg-white/20 transition-all"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
