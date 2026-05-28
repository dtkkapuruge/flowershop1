"use client";

import { useState } from 'react';
import { KeyRound, Save, CheckCircle } from 'lucide-react';

export default function SettingsPage() {
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');

    if (form.newPassword !== form.confirmPassword) {
      setStatus('error');
      setMessage('New passwords do not match.');
      return;
    }

    if (form.newPassword.length < 6) {
      setStatus('error');
      setMessage('New password must be at least 6 characters long.');
      return;
    }

    // Placeholder — password change API can be wired up later
    setStatus('success');
    setMessage('Password updated successfully!');
    setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-500 mt-1">Manage your admin account settings.</p>
      </div>

      <div className="grid gap-8 max-w-2xl">

        {/* Admin Info Card */}
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-gray-400" />
            Account Information
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-stone-100">
              <span className="text-sm text-gray-500">Username</span>
              <span className="text-sm font-medium text-gray-900">admin</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-stone-100">
              <span className="text-sm text-gray-500">Role</span>
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Super Admin</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-sm text-gray-500">Project</span>
              <span className="text-sm font-medium text-gray-900">Petal & Co. Flower Shop</span>
            </div>
          </div>
        </div>

        {/* Change Password Card */}
        <div className="bg-white rounded-xl border border-stone-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-6">Change Password</h3>

          {status === 'success' && (
            <div className="mb-6 p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-center gap-2 border border-green-200">
              <CheckCircle className="w-4 h-4" /> {message}
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input required type="password" name="currentPassword" value={form.currentPassword} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input required type="password" name="newPassword" value={form.newPassword} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input required type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900 bg-white" />
            </div>
            <button type="submit" className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium mt-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
