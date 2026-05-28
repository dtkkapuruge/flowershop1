"use client";

import { useEffect, useState } from 'react';
import { Mail, Phone, ShoppingBag } from 'lucide-react';

interface Order {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  flowerType: string;
  quantity: number;
  createdAt: string;
}

interface Customer {
  name: string;
  email: string;
  phoneNumber: string;
  totalOrders: number;
  lastOrder: string;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/orders');
        const data = await res.json();
        const orders: Order[] = data.orders || [];

        // Group orders by email to create unique customers
        const customerMap: Record<string, Customer> = {};
        orders.forEach((order) => {
          if (!customerMap[order.email]) {
            customerMap[order.email] = {
              name: order.fullName,
              email: order.email,
              phoneNumber: order.phoneNumber,
              totalOrders: 1,
              lastOrder: order.createdAt,
            };
          } else {
            customerMap[order.email].totalOrders += 1;
            if (new Date(order.createdAt) > new Date(customerMap[order.email].lastOrder)) {
              customerMap[order.email].lastOrder = order.createdAt;
            }
          }
        });

        setCustomers(Object.values(customerMap));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div className="text-gray-500">Loading customers...</div>;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
        <p className="text-gray-500 mt-1">All unique customers who have placed orders.</p>
      </div>

      {customers.length === 0 ? (
        <div className="bg-white rounded-xl border border-stone-200 p-12 text-center text-gray-500">
          No customers yet. Orders submitted from the website will appear here.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {customers.map((customer, i) => (
            <div key={i} className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-lg">
                  {customer.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{customer.name}</h3>
                  <p className="text-xs text-gray-400">Customer since {new Date(customer.lastOrder).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>{customer.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-gray-400" />
                  <span>{customer.totalOrders} {customer.totalOrders === 1 ? 'order' : 'orders'} placed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
