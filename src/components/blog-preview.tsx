import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  featured_image_alt: string;
  reading_time: number;
  published_at: string;
}

export function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image, featured_image_alt, reading_time, published_at')
        .eq('published', true)
        .order('published_at', { ascending: true })
        .limit(3);

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-slate-200 border-t-brand rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-brand uppercase leading-tight">
            From the Blog
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 font-bold max-w-3xl mx-auto leading-snug mb-4">
            Behind-the-scenes insights, invoicing tips, and workflow strategies for tradies who want to work smarter.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand font-bold text-lg hover:text-accent transition-colors"
          >
            View all articles
            <ArrowRight size={20} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={post.featured_image}
                  alt={post.featured_image_alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-semibold mb-3">
                  <Clock size={16} strokeWidth={2.5} />
                  <span>{post.reading_time} min read</span>
                </div>
                <h3 className="text-xl font-black text-brand mb-3 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand font-bold group-hover:text-accent transition-colors">
                  Read more
                  <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
