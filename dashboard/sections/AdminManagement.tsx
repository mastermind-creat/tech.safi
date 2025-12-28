
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldAlert, UserPlus, Trash2, Mail, Lock,
    User, CheckCircle2, AlertCircle, Loader2, Edit2, Ban, CheckCircle
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

// Interface for Admin User
interface AdminUser {
    id: number;
    name: string;
    email: string;
    is_active: boolean;
    created_at: string;
}

export const AdminManagement: React.FC = () => {
    const [admins, setAdmins] = useState<AdminUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);

    // Fetch admins on mount
    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:8000/api/admins', {
                headers: {
                    'Accept': 'application/json',
                }
            });
            if (!response.ok) throw new Error('Failed to fetch admins');

            const data = await response.json();
            setAdmins(data);
        } catch (err) {
            console.error("Failed to fetch admins:", err);
            // Fallback or empty state if fails
            setAdmins([]);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setSuccess(null);

        const url = editingId
            ? `http://localhost:8000/api/admins/${editingId}`
            : 'http://localhost:8000/api/admins';

        const method = editingId ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Operation failed');
            }

            setSuccess(editingId ? 'Admin updated successfully!' : 'Admin added successfully!');
            setFormData({ name: '', email: '', password: '' });
            setEditingId(null);
            fetchAdmins();

        } catch (err: any) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleEdit = (admin: AdminUser) => {
        setEditingId(admin.id);
        setFormData({
            name: admin.name,
            email: admin.email,
            password: '' // Don't populate password
        });
        setSuccess(null);
        setError(null);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({ name: '', email: '', password: '' });
        setSuccess(null);
        setError(null);
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you sure you want to delete this admin?')) return;

        try {
            const response = await fetch(`http://localhost:8000/api/admins/${id}`, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) throw new Error('Failed to delete');

            setSuccess('Admin deleted successfully');
            fetchAdmins();
        } catch (err) {
            console.error(err);
            setError('Failed to delete admin');
        }
    };

    const handleToggleStatus = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/admins/${id}/toggle-status`, {
                method: 'PATCH',
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) throw new Error('Failed to update status');

            fetchAdmins();
        } catch (err) {
            console.error(err);
            setError('Failed to update status');
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold dark:text-white tracking-tight">Admin User Management</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Manage administrative access and permissions for the TechSafi dashboard.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Add New Admin Form */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                        <h3 className="text-lg font-bold dark:text-white flex items-center gap-2 mb-6">
                            {editingId ? <Edit2 size={18} className="text-primary" /> : <UserPlus size={18} className="text-primary" />}
                            {editingId ? 'Edit Administrator' : 'Add New Admin'}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-lg text-xs font-medium flex gap-2">
                                    <AlertCircle size={16} /> {error}
                                </div>
                            )}
                            {success && (
                                <div className="p-3 bg-green-50 text-green-600 border border-green-100 rounded-lg text-xs font-medium flex gap-2">
                                    <CheckCircle2 size={16} /> {success}
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                                <div className="relative">
                                    <User size={16} className="absolute left-3 top-3 text-slate-400" />
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full pl-10 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                                <div className="relative">
                                    <Mail size={16} className="absolute left-3 top-3 text-slate-400" />
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        required
                                        placeholder="admin@techsafi.com"
                                        className="w-full pl-10 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Password</label>
                                <div className="relative">
                                    <Lock size={16} className="absolute left-3 top-3 text-slate-400" />
                                    <input
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        type="password"
                                        required={!editingId}
                                        placeholder={editingId ? "(Leave blank to keep current)" : "••••••••"}
                                        className="w-full pl-10 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-bold dark:text-white outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button type="submit" disabled={submitting} className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl py-3 mt-2 shadow-lg hover:shadow-primary/25 transition-all">
                                    {submitting ? <Loader2 size={18} className="animate-spin" /> : (editingId ? 'Update Admin' : 'Create Administrator')}
                                </Button>
                                {editingId && (
                                    <Button type="button" onClick={handleCancelEdit} variant="outline" className="w-24 mt-2 rounded-xl border-slate-200 dark:border-white/10">
                                        Cancel
                                    </Button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-6">
                        <div className="flex gap-3">
                            <ShieldAlert className="text-amber-600 dark:text-amber-500 shrink-0" size={24} />
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-amber-800 dark:text-amber-500">Security Warning</h4>
                                <p className="text-xs text-amber-700 dark:text-amber-400/80 leading-relaxed">
                                    Granting administrative access allows full control over the system, including user management and system settings. Only add trusted personnel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Current Admins List */}
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-200 dark:border-white/5 flex justify-between items-center">
                            <h3 className="text-lg font-bold dark:text-white">Authorized Administrators</h3>
                            <span className="text-xs font-bold bg-slate-100 dark:bg-white/10 px-2.5 py-1 rounded-full text-slate-500 dark:text-slate-400">
                                {admins.length} Users
                            </span>
                        </div>

                        {loading ? (
                            <div className="p-12 flex justify-center">
                                <Loader2 className="animate-spin text-primary" size={32} />
                            </div>
                        ) : (
                            <div className="divide-y divide-slate-100 dark:divide-white/5">
                                {admins.length === 0 ? (
                                    <div className="p-12 text-center text-slate-500 text-sm">No administrators found.</div>
                                ) : (
                                    admins.map((admin) => (
                                        <div key={admin.id} className="p-4 sm:p-6 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-sm">
                                                    {admin.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                        {admin.name}
                                                        {!admin.is_active && <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">Suspended</span>}
                                                    </div>
                                                    <div className="text-xs text-slate-500 font-medium">{admin.email}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleToggleStatus(admin.id)}
                                                    title={admin.is_active ? "Suspend User" : "Activate User"}
                                                    className={`p-2 rounded-lg transition-colors ${admin.is_active ? 'text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10' : 'text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10'}`}
                                                >
                                                    {admin.is_active ? <Ban size={16} /> : <CheckCircle size={16} />}
                                                </button>
                                                <button
                                                    onClick={() => handleEdit(admin)}
                                                    title="Edit User"
                                                    className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors"
                                                >
                                                    <Edit2 size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(admin.id)}
                                                    title="Delete User"
                                                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
