import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  published_at: string;
  view_count: number;
  author: string;
}

export function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, published, published_at, view_count, author')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  }

  async function deletePost(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Error deleting post: ' + error.message);
    } else {
      setPosts(posts.filter(p => p.id !== id));
    }
  }

  async function togglePublished(id: string, currentStatus: boolean) {
    const { error } = await supabase
      .from('blog_posts')
      .update({ published: !currentStatus })
      .eq('id', id);

    if (error) {
      alert('Error updating post: ' + error.message);
    } else {
      setPosts(posts.map(p =>
        p.id === id ? { ...p, published: !currentStatus } : p
      ));
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <nav className="bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-black tracking-tight text-white">
            SMASH<span className="text-accent text-3xl leading-none align-baseline">.</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/blog"
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              View Blog
            </Link>
            <Link
              to="/admin/blog/new"
              className="px-6 py-2.5 rounded-full bg-accent text-accentText font-black text-sm uppercase tracking-wide hover:brightness-95 transition-all flex items-center gap-2"
            >
              <Plus size={16} />
              New Post
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <h1 className="text-4xl font-black text-white mb-8">Blog Admin</h1>

        {loading ? (
          <div className="text-white/60 text-center py-20">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/60 text-xl mb-6">No blog posts yet.</p>
            <Link
              to="/admin/blog/new"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accentText font-black text-sm uppercase tracking-wide hover:brightness-95 transition-all"
            >
              <Plus size={16} />
              Create Your First Post
            </Link>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">
                      Published
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-black text-white uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-white font-semibold">{post.title}</div>
                        <div className="text-white/50 text-sm">/blog/{post.slug}</div>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => togglePublished(post.id, post.published)}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                            post.published
                              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                              : 'bg-white/10 text-white/60 hover:bg-white/20'
                          }`}
                        >
                          {post.published ? (
                            <>
                              <Eye size={12} />
                              Published
                            </>
                          ) : (
                            <>
                              <EyeOff size={12} />
                              Draft
                            </>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-white/70">{post.author}</td>
                      <td className="px-6 py-4 text-white/70">{post.view_count || 0}</td>
                      <td className="px-6 py-4 text-white/70">
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/admin/blog/${post.id}`}
                            className="p-2 text-accent hover:bg-accent/20 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </Link>
                          <button
                            onClick={() => deletePost(post.id, post.title)}
                            className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
