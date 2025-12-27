
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Plus, Edit3, Trash2, Save, X, Newspaper, Calendar,
   Clock, Tag, User, Search, Eye, ArrowRight,
   PlusCircle, MinusCircle, LayoutGrid, List,
   Image as ImageIcon, Type, MessageSquare,
   ChevronRight, Hash, Sparkles, Filter,
   Share2, Globe, FileText, Bot, Code2,
   ShieldCheck, Zap, History, BarChart3
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchBlogPosts, saveBlogPosts } from '../services/api';
import { BlogPost } from '../../types';
import { BLOG_POSTS } from '../../constants';

export const BlogAdmin: React.FC = () => {
   const [posts, setPosts] = useState<BlogPost[]>([]);
   const [loading, setLoading] = useState(true);
   const [isEditing, setIsEditing] = useState<string | null>(null);
   const [currentPost, setCurrentPost] = useState<Partial<BlogPost> | null>(null);
   const [searchQuery, setSearchQuery] = useState('');
   const [activeTab, setActiveTab] = useState<'all' | 'drafts' | 'published'>('all');

   useEffect(() => {
      const load = async () => {
         setLoading(true);
         const data = await fetchBlogPosts();
         // If storage empty, load defaults from constants
         if (data.length === 0) {
            setPosts(BLOG_POSTS);
         } else {
            setPosts(data);
         }
         setLoading(false);
      };
      load();
   }, []);

   const handleSaveAll = async () => {
      setLoading(true);
      await saveBlogPosts(posts);
      setLoading(false);
      setIsEditing(null);
      alert("Knowledge Matrix Synchronized.");
   };

   const startNewPost = () => {
      const newPost: BlogPost = {
         id: Math.random().toString(36).substr(2, 9),
         title: 'Untilted Article',
         excerpt: 'Short summary for social sharing...',
         content: '<p>Start writing your insight...</p>',
         category: 'AI & Tech',
         author: {
            name: 'Wambia Kennedy',
            role: 'CEO',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100'
         },
         date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
         readTime: '5 min read',
         image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
         tags: ['Innovation']
      };
      setPosts([newPost, ...posts]);
      setCurrentPost(newPost);
      setIsEditing(newPost.id);
   };

   const removePost = (id: string) => {
      if (window.confirm("Archive this insight permanently?")) {
         setPosts(posts.filter(p => p.id !== id));
      }
   };

   const applyChanges = () => {
      if (currentPost && currentPost.id) {
         setPosts(posts.map(p => p.id === currentPost.id ? { ...p, ...currentPost } as BlogPost : p));
         setIsEditing(null);
      }
   };

   const filteredPosts = posts.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
   );

   if (loading) return (
      <div className="flex flex-col items-center justify-center py-32 gap-6">
         <Newspaper className="text-primary animate-pulse" size={48} />
         <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Accessing Content Repository...</p>
      </div>
   );

   const MotionDiv = motion.div as any;

   return (
      <div className="space-y-8 animate-in fade-in duration-500 pb-20">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
               <h1 className="text-3xl font-bold dark:text-white tracking-tight flex items-center gap-3">
                  Insight Engine
                  <span className="px-2 py-0.5 rounded bg-pink-500/10 text-pink-500 text-[10px] font-black uppercase tracking-tighter">Blog Engine</span>
               </h1>
               <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage corporate narratives, technical insights, and thought leadership.</p>
            </div>
            <div className="flex items-center gap-3">
               <Button onClick={startNewPost} className="bg-primary text-white font-bold rounded-xl shadow-lg">
                  <Plus size={18} className="mr-2" /> Draft New Insight
               </Button>
               <Button onClick={handleSaveAll} className="bg-white dark:bg-white/5 dark:text-white border border-slate-200 dark:border-white/10 rounded-xl font-bold">
                  <Save size={18} className="mr-2" /> Sync Repository
               </Button>
            </div>
         </div>

         <AnimatePresence mode="wait">
            {isEditing ? (
               <MotionDiv key="editor" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, y: 20 }} className="space-y-8">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
                     <div className="flex items-center gap-4">
                        <button onClick={() => setIsEditing(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-400"><X size={20} /></button>
                        <h2 className="text-xl font-bold dark:text-white">Editor: {currentPost?.title}</h2>
                     </div>
                     <div className="flex gap-3">
                        <Button variant="ghost" onClick={() => setIsEditing(null)} className="rounded-xl">Discard</Button>
                        <Button onClick={applyChanges} className="rounded-xl flex items-center gap-2"><Sparkles size={18} /> Deploy Updates</Button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                     {/* Main Content Area */}
                     <div className="lg:col-span-3 space-y-6">
                        <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-8 space-y-6 shadow-sm">
                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Article Title</label>
                              <input value={currentPost?.title} onChange={e => setCurrentPost({ ...currentPost, title: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-2xl font-bold dark:text-white outline-none focus:border-primary" placeholder="A compelling headline..." />
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Brief Excerpt (Meta Description)</label>
                              <textarea rows={2} value={currentPost?.excerpt} onChange={e => setCurrentPost({ ...currentPost, excerpt: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary resize-none" placeholder="Summary for preview cards..." />
                           </div>

                           <div className="space-y-4 pt-4">
                              <div className="flex items-center justify-between">
                                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Markdown / HTML Body</label>
                                 <div className="flex gap-2">
                                    <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 transition-all"><Code2 size={14} /></button>
                                    <button className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 transition-all"><FileText size={14} /></button>
                                 </div>
                              </div>
                              <textarea rows={15} value={currentPost?.content} onChange={e => setCurrentPost({ ...currentPost, content: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-6 font-mono text-sm dark:text-slate-300 outline-none focus:border-primary resize-y min-h-[400px]" placeholder="<p>Insight flows here...</p>" />
                           </div>
                        </div>
                     </div>

                     {/* Sidebar Configuration */}
                     <div className="space-y-6">
                        <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-6 shadow-sm">
                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Primary Category</label>
                              <select value={currentPost?.category} onChange={e => setCurrentPost({ ...currentPost, category: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs font-bold dark:text-white outline-none">
                                 <option>AI & Tech</option>
                                 <option>Web Development</option>
                                 <option>Cloud Computing</option>
                                 <option>Security</option>
                                 <option>Digital Strategy</option>
                              </select>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Featured Image URL</label>
                              <input value={currentPost?.image} onChange={e => setCurrentPost({ ...currentPost, image: e.target.value })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2 text-[10px] font-mono text-primary outline-none focus:border-primary" />
                              <div className="aspect-video rounded-lg bg-slate-100 dark:bg-black/40 overflow-hidden border border-slate-200 dark:border-white/10 mt-2">
                                 <img src={currentPost?.image} className="w-full h-full object-cover" />
                              </div>
                           </div>

                           <div className="space-y-2">
                              <div className="flex items-center justify-between mb-1">
                                 <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Taxonomy Tags</label>
                                 <button onClick={() => setCurrentPost({ ...currentPost, tags: [...(currentPost?.tags || []), 'NewTag'] })} className="text-[9px] font-black text-primary hover:underline">+ ADD</button>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                 {currentPost?.tags?.map((tag, i) => (
                                    <div key={i} className="flex items-center gap-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded group">
                                       <input value={tag} onChange={e => {
                                          const updated = [...(currentPost.tags || [])];
                                          updated[i] = e.target.value;
                                          setCurrentPost({ ...currentPost, tags: updated });
                                       }} className="bg-transparent text-[10px] font-bold dark:text-slate-300 outline-none w-14" />
                                       <button onClick={() => setCurrentPost({ ...currentPost, tags: currentPost.tags?.filter((_, idx) => idx !== i) })} className="text-slate-400 hover:text-red-500"><X size={10} /></button>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>

                        <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-6 shadow-sm">
                           <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2"><User size={14} /> Author Attributes</h3>
                           <div className="space-y-4">
                              <div className="space-y-1">
                                 <label className="text-[9px] font-bold text-slate-500 uppercase">Author Name</label>
                                 <input value={currentPost?.author?.name} onChange={e => setCurrentPost({ ...currentPost, author: { ...currentPost.author!, name: e.target.value } })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs font-bold dark:text-white outline-none" />
                              </div>
                              <div className="space-y-1">
                                 <label className="text-[9px] font-bold text-slate-500 uppercase">Author Role</label>
                                 <input value={currentPost?.author?.role} onChange={e => setCurrentPost({ ...currentPost, author: { ...currentPost.author!, role: e.target.value } })} className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs dark:text-white outline-none" />
                              </div>
                              <div className="flex items-center justify-between">
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-bold text-slate-500 uppercase">Read Time</label>
                                    <input value={currentPost?.readTime} onChange={e => setCurrentPost({ ...currentPost, readTime: e.target.value })} className="w-24 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs dark:text-white outline-none" />
                                 </div>
                                 <div className="space-y-1">
                                    <label className="text-[9px] font-bold text-slate-500 uppercase">Date</label>
                                    <input value={currentPost?.date} onChange={e => setCurrentPost({ ...currentPost, date: e.target.value })} className="w-32 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs dark:text-white outline-none" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </MotionDiv>
            ) : (
               <MotionDiv key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                     <div className="flex-1 relative">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="Search archive by title or category..." className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-sm dark:text-white" />
                     </div>
                     <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl">
                        {['all', 'drafts', 'published'].map(t => (
                           <button key={t} onClick={() => setActiveTab(t as any)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === t ? 'bg-white dark:bg-[#1e293b] text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>{t}</button>
                        ))}
                     </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                     {filteredPosts.map((post, idx) => (
                        <MotionDiv
                           key={post.id}
                           initial={{ opacity: 0, x: -10 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: idx * 0.05 }}
                           className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 group hover:border-primary/30 transition-all"
                        >
                           <div className="w-full md:w-40 h-24 rounded-xl overflow-hidden flex-shrink-0">
                              <img src={post.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                           </div>
                           <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                 <span className="text-[10px] font-black text-primary uppercase tracking-widest">{post.category}</span>
                                 <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                 <span className="text-[10px] font-bold text-slate-400">{post.date}</span>
                              </div>
                              <h3 className="text-lg font-bold dark:text-white truncate group-hover:text-primary transition-colors">{post.title}</h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">{post.excerpt}</p>
                           </div>
                           <div className="flex items-center gap-3">
                              <div className="text-right hidden sm:block">
                                 <div className="text-xs font-bold dark:text-slate-300">{post.author.name}</div>
                                 <div className="text-[10px] text-slate-500 uppercase">{post.readTime}</div>
                              </div>
                              <div className="flex gap-2 pl-4 border-l border-slate-100 dark:border-white/5">
                                 <button onClick={() => { setCurrentPost(post); setIsEditing(post.id); }} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"><Edit3 size={18} /></button>
                                 <button onClick={() => removePost(post.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"><Trash2 size={18} /></button>
                              </div>
                           </div>
                        </MotionDiv>
                     ))}
                     {filteredPosts.length === 0 && (
                        <div className="text-center py-20 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/5">
                           <div className="w-16 h-16 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Search size={32} className="text-slate-300" />
                           </div>
                           <h3 className="text-lg font-bold dark:text-white">No articles found</h3>
                           <p className="text-slate-500 text-sm">Refine your search or categories.</p>
                        </div>
                     )}
                  </div>
               </MotionDiv>
            )}
         </AnimatePresence>
      </div>
   );
};
