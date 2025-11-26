import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { JOBS } from '../constants';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Hero } from '../components/ui/Hero';
import { MapPin, Briefcase, Filter } from 'lucide-react';

export const Careers: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const departments = ['All', ...Array.from(new Set(JOBS.map(j => j.department)))];

  const filteredJobs = filter === 'All' ? JOBS : JOBS.filter(j => j.department === filter);
  const MotionDiv = motion.div as any;

  return (
    <div className="pb-20">
      <Hero
        bgImage="https://i.gifer.com/1jL.gif" // People/Hologram connection
        overlayOpacity={0.8}
        title="Join Our Team"
        subtitle="Work on the cutting edge of AI and software engineering. We are looking for dreamers, doers, and innovators who want to shape the future."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="p-6">
                <div className="flex items-center mb-4 text-white font-bold">
                  <Filter size={20} className="mr-2" /> Filters
                </div>
                <div className="space-y-2">
                  {departments.map(dept => (
                    <button
                      key={dept}
                      onClick={() => setFilter(dept)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        filter === dept ? 'bg-primary/20 text-primary font-medium' : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <MotionDiv
                  key={job.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 hover:border-primary/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                        <span className="flex items-center"><Briefcase size={16} className="mr-1" /> {job.type}</span>
                        <span className="flex items-center"><MapPin size={16} className="mr-1" /> {job.location}</span>
                        <span className="px-2 py-0.5 bg-white/5 rounded text-xs">{job.department}</span>
                      </div>
                      <p className="text-slate-500 text-sm max-w-xl">{job.description}</p>
                    </div>
                    <Button variant="outline" size="sm" className="whitespace-nowrap">Apply Now</Button>
                  </Card>
                </MotionDiv>
              ))
            ) : (
              <div className="text-center py-12 text-slate-500">
                No open positions in this department currently.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};