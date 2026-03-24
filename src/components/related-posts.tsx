import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowRight, Clock } from 'lucide-react';

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  featured_image_alt: string;
  reading_time: number;
  primary_keyword: string;
  secondary_keywords: string[];
}

interface RelatedPostsProps {
  currentPostId: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  limit?: number;
}

export function RelatedPosts({ currentPostId, primaryKeyword, secondaryKeywords, limit = 3 }: RelatedPostsProps) {
  const [posts, setPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image, featured_image_alt, reading_time, primary_keyword, secondary_keywords')
        .eq('published', true)
        .neq('id', currentPostId)
        .order('published_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error fetching related posts:', error);
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        setLoading(false);
        return;
      }

      const scoredPosts = data.map(post => {
        let score = 0;

        if (post.primary_keyword.toLowerCase() === primaryKeyword.toLowerCase()) {
          score += 10;
        }

        const currentKeywords = [primaryKeyword, ...secondaryKeywords].map(k => k.toLowerCase());
        const postKeywords = [post.primary_keyword, ...(post.secondary_keywords || [])].map(k => k.toLowerCase());

        const commonKeywords = currentKeywords.filter(k => postKeywords.includes(k));
        score += commonKeywords.length * 3;

        const currentWords = currentKeywords.join(' ').split(' ');
        const postWords = postKeywords.join(' ').split(' ');
        const commonWords = currentWords.filter(w => w.length > 3 && postWords.includes(w));
        score += commonWords.length;

        return { ...post, score };
      });

      scoredPosts.sort((a, b) => b.score - a.score);

      setPosts(scoredPosts.slice(0, limit));
      setLoading(false);
    }

    fetchRelatedPosts();
  }, [currentPostId, primaryKeyword, secondaryKeywords, limit]);

  if (loading || posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-white/10">
      <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">
        Related Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-accent/50"
          >
            {post.featured_image && (
              <div className="aspect-video overflow-hidden bg-white/5">
                <img
                  src={post.featured_image}
                  alt={post.featured_image_alt || post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="p-5">
              <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
                <Clock size={14} />
                <span>{post.reading_time} min read</span>
              </div>

              <h3 className="text-lg font-black text-white mb-2 leading-[0.88] group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>

              {post.excerpt && (
                <p className="text-white/70 text-sm leading-[1.15] mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
              )}

              <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                Read More
                <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
