
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, Search, Newspaper, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Blog: React.FC = () => {
  const MotionDiv = motion.div as any;
  const featuredPost = BLOG_POSTS[0];
  const recentPosts = BLOG_POSTS.slice(1);

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-20 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-slate-50 to-slate-50 dark:from-blue-900/10 dark:via-[#020617] dark:to-[#020617]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
              <MotionDiv
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/20"
              >
                 <Newspaper size={12} className="mr-2" /> Insights & News
              </MotionDiv>
              <MotionDiv
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.1 }}
              >
                 <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-900 dark:text-white mb-6">
                    TechSafi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Journal</span>
                 </h1>
              </MotionDiv>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                 Expert perspectives on technology, innovation, and digital transformation.
              </p>
           </div>

           {/* Featured Post */}
           <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 group cursor-pointer shadow-xl dark:shadow-none"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
              <img 
                 src={featuredPost.image} 
                 alt={featuredPost.title} 
                 className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                       {featuredPost.category}
                    </span>
                    <span className="text-slate-200 text-xs flex items-center">
                       <Clock size={12} className="mr-1" /> {featuredPost.readTime}
                    </span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl leading-tight group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                 </h2>
                 <p className="text-slate-200 text-sm md:text-base max-w-2xl mb-6 line-clamp-2">
                    {featuredPost.excerpt}
                 </p>
                 <div className="flex items-center">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full border-2 border-white/10 mr-3" />
                    <div>
                       <div className="text-white text-sm font-bold">{featuredPost.author.name}</div>
                       <div className="text-slate-300 text-xs">{featuredPost.date}</div>
                    </div>
                 </div>
              </div>
           </MotionDiv>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Column */}
            <div className="lg:col-span-2">
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-l-4 border-blue-500 pl-4">Latest Articles</h3>
               <div className="space-y-10">
                  {recentPosts.map((post, idx) => (
                     <MotionDiv
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col md:flex-row gap-6 group cursor-pointer bg-white dark:bg-transparent p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                     >
                        <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                           <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                           />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                           <div className="flex items-center gap-3 mb-2">
                              <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">{post.category}</span>
                              <span className="text-slate-400 dark:text-slate-500 text-xs">•</span>
                              <span className="text-slate-500 dark:text-slate-500 text-xs">{post.date}</span>
                           </div>
                           <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {post.title}
                           </h4>
                           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                              {post.excerpt}
                           </p>
                           <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center text-xs text-slate-500">
                                 <img src={post.author.avatar} className="w-6 h-6 rounded-full mr-2" alt="Author" />
                                 {post.author.name}
                              </div>
                              <span className="text-blue-600 dark:text-blue-500 text-xs font-bold flex items-center group-hover:translate-x-1 transition-transform">
                                 Read More <ArrowRight size={12} className="ml-1" />
                              </span>
                           </div>
                        </div>
                     </MotionDiv>
                  ))}
               </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
               <div className="sticky top-24 space-y-8">
                  {/* Search */}
                  <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-xl p-6 shadow-lg dark:shadow-none">
                     <h4 className="text-slate-900 dark:text-white font-bold mb-4">Search</h4>
                     <div className="relative">
                        <input 
                           type="text" 
                           placeholder="Search articles..." 
                           className="w-full bg-slate-100 dark:bg-[#0f172a] border border-slate-300 dark:border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <Search size={16} className="absolute right-3 top-3.5 text-slate-400" />
                     </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-xl p-6 shadow-lg dark:shadow-none">
                     <h4 className="text-slate-900 dark:text-white font-bold mb-4">Categories</h4>
                     <div className="space-y-2">
                        {['Artificial Intelligence', 'Web Development', 'Mobile Apps', 'Cloud Computing', 'Digital Strategy', 'Security'].map((cat, i) => (
                           <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg cursor-pointer group transition-colors">
                              <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-blue-600 dark:group-hover:text-white transition-colors">{cat}</span>
                              <span className="text-xs bg-slate-100 dark:bg-[#0f172a] text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 dark:border-white/10">{Math.floor(Math.random() * 10) + 1}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/40 dark:to-purple-900/40 border border-blue-200 dark:border-blue-500/20 rounded-xl p-6 relative overflow-hidden shadow-lg">
                     <div className="relative z-10">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                           <Mail size={20} />
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-2">Weekly Tech Insights</h4>
                        <p className="text-slate-600 dark:text-blue-100 text-xs mb-4">Get the latest trends and updates delivered straight to your inbox.</p>
                        <input 
                           type="email" 
                           placeholder="Your email address" 
                           className="w-full bg-white dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-white mb-3 focus:outline-none focus:border-blue-400"
                        />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 h-9 text-sm text-white">Subscribe</Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
