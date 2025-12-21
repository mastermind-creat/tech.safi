
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, Search, Grid, List, Trash2, Copy, 
  ExternalLink, FileText, Image as ImageIcon,
  CheckCircle2, X, Download, Filter, MoreVertical,
  RefreshCw, Info, Maximize2
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { fetchMedia, saveMedia, MediaItem } from '../services/api';

export const MediaLibrary: React.FC = () => {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchMedia();
      setItems(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this asset?')) {
      const updated = items.filter(item => item.id !== id);
      setItems(updated);
      await saveMedia(updated);
      if (selectedItem?.id === id) setSelectedItem(null);
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('Asset URL copied to clipboard');
  };

  const simulateUpload = async () => {
    setIsUploading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const newItem: MediaItem = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'New Asset',
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400',
      size: '1.2MB',
      type: 'image/jpeg',
      dimensions: '1024x1024',
      createdAt: new Date().toISOString().split('T')[0]
    };
    const updated = [newItem, ...items];
    setItems(updated);
    await saveMedia(updated);
    setIsUploading(false);
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const MotionDiv = motion.div as any;

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <RefreshCw className="text-primary animate-spin" size={48} />
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Indexing Media Assets...</p>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold dark:text-white tracking-tight">Media Library</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage global assets, images, and brand materials.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={simulateUpload} disabled={isUploading} className="rounded-xl flex items-center gap-2">
            {isUploading ? <RefreshCw size={18} className="animate-spin" /> : <Plus size={18} />}
            Upload Asset
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
         <div className="flex-1 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  type="text" 
                  placeholder="Filter assets..." 
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/5 rounded-xl text-sm dark:text-white outline-none"
                />
              </div>
              <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-xl">
                 <button className="px-4 py-2 rounded-lg bg-white dark:bg-[#1e293b] text-primary shadow-sm"><Grid size={18}/></button>
                 <button className="px-4 py-2 rounded-lg text-slate-500"><List size={18}/></button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {filteredItems.map(item => (
                 <div 
                   key={item.id} 
                   onClick={() => setSelectedItem(item)}
                   className={`group relative aspect-square bg-white dark:bg-[#0f172a] rounded-2xl border transition-all cursor-pointer overflow-hidden ${selectedItem?.id === item.id ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 dark:border-white/5'}`}
                 >
                    <img src={item.url} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={item.name} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                       <button onClick={(e) => { e.stopPropagation(); handleCopyUrl(item.url); }} className="p-2 bg-white rounded-lg text-slate-900 shadow-lg"><Copy size={16}/></button>
                       <button onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }} className="p-2 bg-red-500 rounded-lg text-white shadow-lg"><Trash2 size={16}/></button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                       <div className="text-[10px] font-bold text-white truncate">{item.name}</div>
                    </div>
                 </div>
               ))}
               <button onClick={simulateUpload} className="aspect-square border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all group">
                  <Plus size={32} className="group-hover:scale-110 transition-transform mb-2" />
                  <span className="text-xs font-bold">Add Asset</span>
               </button>
            </div>
         </div>

         {/* Selection Sidebar */}
         <div className="lg:w-80 shrink-0">
            <AnimatePresence mode="wait">
               {selectedItem ? (
                 <MotionDiv 
                    key={selectedItem.id} 
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 space-y-6 sticky top-24 shadow-sm"
                 >
                    <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 dark:border-white/10">
                       <img src={selectedItem.url} className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <h3 className="font-bold dark:text-white truncate">{selectedItem.name}</h3>
                       <p className="text-[10px] font-bold uppercase text-slate-400 mt-1">{selectedItem.type} • {selectedItem.size}</p>
                    </div>
                    <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                       <div className="space-y-1">
                          <label className="text-[10px] font-bold text-slate-400 uppercase">Public URL</label>
                          <div className="flex gap-2">
                             <input readOnly value={selectedItem.url} className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-[10px] font-mono outline-none" />
                             <button onClick={() => handleCopyUrl(selectedItem.url)} className="p-2 bg-primary/10 text-primary rounded-lg"><Copy size={14}/></button>
                          </div>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <span className="text-[9px] text-slate-400 uppercase font-bold block">Created</span>
                             <span className="text-xs font-medium dark:text-slate-300">{selectedItem.createdAt}</span>
                          </div>
                          <div>
                             <span className="text-[9px] text-slate-400 uppercase font-bold block">Dimensions</span>
                             <span className="text-xs font-medium dark:text-slate-300">{selectedItem.dimensions}</span>
                          </div>
                       </div>
                    </div>
                    <div className="pt-4 flex flex-col gap-2">
                       <Button variant="outline" className="w-full justify-start text-xs font-bold gap-2"><ExternalLink size={14}/> Open Full Size</Button>
                       <Button variant="outline" className="w-full justify-start text-xs font-bold gap-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 border-red-200 dark:border-red-500/20" onClick={() => handleDelete(selectedItem.id)}><Trash2 size={14}/> Delete Permanent</Button>
                    </div>
                 </MotionDiv>
               ) : (
                 <div className="bg-slate-50 dark:bg-[#0f172a]/20 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-2xl p-12 text-center sticky top-24">
                    <Info size={32} className="text-slate-300 mx-auto mb-4" />
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Select an asset to view metadata</p>
                 </div>
               )}
            </AnimatePresence>
         </div>
      </div>
    </div>
  );
};
