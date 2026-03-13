"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Calendar, 
  Clock, 
  ChevronRight,
  BookOpen,
  TrendingUp,
  Filter,
  Tag,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { blogPosts , categories, popularTags} from '../../content/blogData';
export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter posts based on selections
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => post.tags.includes(tag));
    
    return matchesCategory && matchesSearch && matchesTags;
  });

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedTags([]);
  };

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        
        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg mb-6">
              <BookOpen size={16} />
              <span className="text-sm font-semibold">Digital Marketing Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              SearchMetric <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400">Blog</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Actionable insights, proven strategies, and latest trends in SEO, social media, and digital marketing for Indian businesses.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search blog posts, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="container-pad">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
                  <TrendingUp size={16} /> Featured
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">Trending Articles</h2>
              </div>
              <div className="text-sm text-slate-500">
                Showing {filteredPosts.length} of {blogPosts.length} posts
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group relative">
                  <div className="card card-hover overflow-hidden border-l-4 border-brand-600">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-50 text-brand-700">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Author */}
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 grid place-items-center text-white font-bold text-sm">
                          {post.author.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-ink-900">{post.author.name}</div>
                          <div className="text-xs text-slate-400">{post.author.role} · Searchmetric</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 grid place-items-center text-white font-bold text-xs flex-shrink-0">
                            {post.author.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-semibold">{post.author.name}</div>
                            <div className="text-xs text-slate-500">{post.author.role}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-sm text-slate-500">
                            <Clock size={14} />
                            {post.readTime}
                          </div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center gap-1"
                          >
                            Read <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-8">
                {/* Categories */}
                <div className="card card-pad">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter size={18} className="text-brand-600" />
                    <h3 className="font-bold text-lg">Categories</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.slug}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex items-center justify-between w-full p-3 rounded-xl transition-all ${
                          selectedCategory === category.name 
                            ? 'bg-brand-50 text-brand-700 font-semibold' 
                            : 'hover:bg-slate-100'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          selectedCategory === category.name 
                            ? 'bg-brand-100 text-brand-700' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="card card-pad">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={18} className="text-brand-600" />
                    <h3 className="font-bold text-lg">Popular Tags</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedTags.includes(tag)
                            ? 'bg-brand-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {selectedTags.includes(tag) && <CheckCircle size={14} />}
                        {tag}
                      </button>
                    ))}
                  </div>
                  
                  {selectedTags.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="w-full mt-4 text-sm text-slate-500 hover:text-slate-700 underline"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>

                {/* Newsletter Signup */}
                <div className="card card-pad bg-gradient-to-r from-brand-50 to-fuchsia-50 border border-brand-100">
                  <h3 className="font-bold text-lg mb-3">Get Updates</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Weekly digital marketing tips straight to your inbox.
                  </p>
                  
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-300"
                    />
                    <button
                      type="submit"
                      className="btn-primary w-full !py-2 text-sm"
                    >
                      Subscribe <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="card card-hover card-pad h-full flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-700">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock size={12} />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-ink-900 mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag} 
                              className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Author */}
                      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 grid place-items-center text-white font-bold text-sm flex-shrink-0">
                          {post.author.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-ink-900">{post.author.name}</div>
                          <div className="text-xs text-slate-400">{post.author.role} · Searchmetric</div>
                        </div>
                      </div>
                      
                      <div className="border-t border-slate-100 pt-4 mt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 grid place-items-center text-white font-bold text-xs flex-shrink-0">
                              {post.author.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-sm font-semibold">{post.author.name}</div>
                              <div className="text-xs text-slate-400">{post.author.role} · Searchmetric</div>
                            </div>
                          </div>
                          
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-brand-600 hover:text-brand-700 font-semibold text-sm inline-flex items-center gap-1"
                          >
                            Read more <ChevronRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="h-16 w-16 rounded-full bg-slate-100 grid place-items-center mx-auto mb-4">
                    <Search size={24} className="text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">No posts found</h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Try adjusting your filters or search terms to find what you&#39;re looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="btn-secondary"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                <button className="px-4 py-2 rounded-xl bg-brand-600 text-white">
                  1
                </button>
                <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
                  2
                </button>
                <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
                  3
                </button>
                <button className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-pad">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    Want to contribute to our blog?
                  </div>
                  <p className="text-slate-300 mb-6">
                    We welcome guest posts from industry experts and successful business owners.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100">
                      Become a Guest Author <ArrowRight size={18} />
                    </Link>
                    <Link href="/contact" className="btn-ghost !text-white hover:!bg-white/10">
                      Request a Topic
                    </Link>
                  </div>
                </div>
                
                <div className="rounded-2xl bg-white/10 p-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold">100+</div>
                    <div className="text-sm opacity-80">Articles Published</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold">50K+</div>
                      <div className="text-xs opacity-80">Monthly Readers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">95%</div>
                      <div className="text-xs opacity-80">Positive Feedback</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
