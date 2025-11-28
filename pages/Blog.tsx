
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { 
  Calendar, Clock, ArrowRight, Tag, Search, Newspaper, Mail, 
  Share2, Facebook, Twitter, Linkedin, Flame, ChevronRight, Hash,
  TrendingUp, Sparkles, Filter
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Blog: React.FC = () => {
  const MotionDiv = motion.div as any;
  const MotionImg = motion.img as any;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const categories = ['All', 'AI & Tech', 'Web Development', 'Cloud Computing', 'Security', 'Digital Strategy'];

  // Filter Logic
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];
  const gridPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-20 transition-colors duration-300 font-sans">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden flex items-end pb-20">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
           <MotionImg 
             initial={{ scale: 1.1 }}
             animate={{ scale: 1 }}
             transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
             src={featuredPost.image} 
             alt="Featured" 
             className="w-full h-full object-cover"
           />
           {/* Cinematic Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent z-10"></div>
           <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
           <MotionDiv 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-4xl"
           >
              <div className="flex items-center gap-3 mb-6">
                 <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide shadow-lg shadow-blue-600/30 flex items-center">
                    <Flame size={12} className="mr-1 fill-white" /> Featured Story
                 </span>
                 <span className="text-slate-300 text-sm flex items-center font-medium backdrop-blur-md px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Clock size={14} className="mr-2" /> {featuredPost.readTime}
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
                 {featuredPost.title}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed font-light drop-shadow-md">
                 {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-6">
                 <div className="flex items-center group cursor-pointer">
                    <div className="relative">
                       <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-12 h-12 rounded-full border-2 border-white shadow-lg" />
                       <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border border-white"></div>
                    </div>
                    <div className="ml-3">
                       <div className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">{featuredPost.author.name}</div>
                       <div className="text-slate-400 text-xs">{featuredPost.date}</div>
                    </div>
                 </div>

                 <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="rounded-full px-8 py-3 bg-white text-slate-900 hover:bg-blue-50 font-bold flex items-center gap-2">
                       Read Article <ArrowRight size={18} />
                    </Button>
                 </Link>
              </div>
           </MotionDiv>
        </div>
      </div>

      {/* --- FLOATING FILTER BAR --- */}
      <div className="sticky top-20 z-40 px-4 mb-12 -mt-8">
         <div className="max-w-7xl mx-auto">
            <div className="bg-white/80 dark:bg-[#1e293b]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
               
               {/* Categories */}
               <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                  <Filter size={16} className="text-slate-400 mr-2 flex-shrink-0" />
                  {categories.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                           activeCategory === cat 
                              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md transform scale-105' 
                              : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                        }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>

               {/* Search */}
               <div className="relative w-full md:w-72">
                  <input 
                     type="text" 
                     placeholder="Search articles..." 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-slate-400"
                  />
                  <Search size={16} className="absolute left-3 top-3 text-slate-400" />
               </div>
            </div>
         </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
         
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
               <Sparkles className="text-purple-500" size={20} /> Latest Insights
            </h2>
            <span className="text-sm text-slate-500 dark:text-slate-400">
               Showing {filteredPosts.length} articles
            </span>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
               {gridPosts.length > 0 ? (
                  gridPosts.map((post, idx) => (
                     <MotionDiv
                        key={post.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        onMouseEnter={() => setHoveredPost(post.id)}
                        onMouseLeave={() => setHoveredPost(null)}
                        className={`group relative bg-white dark:bg-[#1e293b]/40 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-purple-900/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full`}
                     >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                           <div className="absolute top-4 left-4 z-20 flex gap-2">
                              <span className="bg-white/90 dark:bg-black/80 backdrop-blur text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                 {post.category}
                              </span>
                           </div>
                           <MotionImg 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           {/* Overlay Gradient */}
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow relative">
                           {/* Decorative Line */}
                           <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent group-hover:via-blue-500 transition-colors duration-500"></div>

                           <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
                              <span className="flex items-center"><Calendar size={12} className="mr-1"/> {post.date}</span>
                              <span>•</span>
                              <span className="flex items-center text-blue-500"><TrendingUp size={12} className="mr-1"/> {Math.floor(Math.random() * 2000) + 500} views</span>
                           </div>

                           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {post.title}
                           </h3>
                           
                           <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                              {post.excerpt}
                           </p>

                           {/* Bottom Row */}
                           <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-6">
                              <div className="flex items-center gap-3">
                                 <img src={post.author.avatar} alt="Author" className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10" />
                                 <div className="text-xs">
                                    <p className="text-slate-900 dark:text-white font-bold">{post.author.name}</p>
                                    <p className="text-slate-500 dark:text-slate-500">{post.readTime}</p>
                                 </div>
                              </div>
                              
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredPost === post.id ? 'bg-blue-600 text-white rotate-0' : 'bg-slate-100 dark:bg-white/10 text-slate-400 -rotate-45'}`}>
                                 <ArrowRight size={14} />
                              </div>
                           </div>
                        </div>
                     </MotionDiv>
                  ))
               ) : (
                  <div className="col-span-full py-20 text-center">
                     <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search size={32} className="text-slate-400" />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No articles found</h3>
                     <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or category filter.</p>
                     <button 
                        onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                        className="mt-4 text-blue-500 font-bold text-sm hover:underline"
                     >
                        Clear Filters
                     </button>
                  </div>
               )}
            </AnimatePresence>
         </div>
      </div>

      {/* --- NEWSLETTER SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
         <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 p-12 md:p-20 text-center shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
                  <Mail size={12} className="mr-2" /> Stay Ahead of the Curve
               </div>
               
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display leading-tight">
                  Tech Insights Delivered <br/> Straight to Your Inbox
               </h2>
               
               <p className="text-slate-300 text-lg mb-10 font-light">
                  Join 5,000+ developers and founders getting our weekly breakdown of AI trends, coding tips, and industry news.
               </p>

               <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                     type="email" 
                     placeholder="Enter your email address" 
                     className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all backdrop-blur-sm text-sm"
                  />
                  <Button className="bg-white text-slate-900 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg shadow-white/10 transition-transform hover:-translate-y-1">
                     Subscribe Now
                  </Button>
               </div>
               
               <p className="mt-6 text-xs text-slate-400">
                  No spam, ever. Unsubscribe anytime. Read our <Link to="/privacy-policy" className="text-white underline underline-offset-2 hover:text-blue-300">Privacy Policy</Link>.
               </p>
            </div>
         </div>
      </div>

    </div>
  );
};
