"use client";

import Link from 'next/link';
import { LayoutDashboard, Users, Settings, LogOut, Flower } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    document.cookie = 'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.push('/login');
    router.refresh();
  };

  return (
    <div className="flex h-screen bg-stone-50">
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-stone-200">
          <Flower className="h-6 w-6 text-rose-500 mr-2" />
          <span className="text-lg font-bold text-gray-900">Petal Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/dashboard" className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            pathname === '/dashboard' ? 'bg-stone-100 text-gray-900' : 'text-gray-600 hover:bg-stone-50 hover:text-gray-900'
          }`}>
            <LayoutDashboard className="w-5 h-5 mr-3 text-gray-500" />
            Orders
          </Link>
          <Link href="/dashboard/customers" className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            pathname === '/dashboard/customers' ? 'bg-stone-100 text-gray-900' : 'text-gray-600 hover:bg-stone-50 hover:text-gray-900'
          }`}>
            <Users className="w-5 h-5 mr-3 text-gray-400" />
            Customers
          </Link>
          <Link href="/dashboard/settings" className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
            pathname === '/dashboard/settings' ? 'bg-stone-100 text-gray-900' : 'text-gray-600 hover:bg-stone-50 hover:text-gray-900'
          }`}>
            <Settings className="w-5 h-5 mr-3 text-gray-400" />
            Settings
          </Link>
        </nav>
        <div className="p-4 border-t border-stone-200">
          <button onClick={handleLogout} className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 w-full text-left">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-stone-200 flex items-center px-8">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard Overview</h1>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
