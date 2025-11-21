import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Package, DollarSign, Users, TrendingUp } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');

  // Mock data - will be replaced with API calls
  const stats = [
    { icon: DollarSign, label: 'Total Revenue', value: '$12,450', change: '+12%' },
    { icon: Package, label: 'Total Orders', value: '342', change: '+8%' },
    { icon: Users, label: 'Customers', value: '1,234', change: '+23%' },
    { icon: TrendingUp, label: 'Growth', value: '18%', change: '+5%' },
  ];

  const products = [
    { id: 1, name: 'Signature Espresso', category: 'Coffee', price: 4.50, stock: 150 },
    { id: 2, name: 'Butter Croissant', category: 'Pastries', price: 3.50, stock: 45 },
    { id: 3, name: 'Matcha Latte', category: 'Drinks', price: 5.50, stock: 80 },
  ];

  const orders = [
    { id: 1, orderNo: 'BB-001', customer: 'John Doe', total: 15.50, status: 'Pending' },
    { id: 2, orderNo: 'BB-002', customer: 'Jane Smith', total: 22.00, status: 'Completed' },
    { id: 3, orderNo: 'BB-003', customer: 'Bob Johnson', total: 8.50, status: 'Processing' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-warmBeige/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-coffeeBrown mb-2">
            Admin Dashboard
          </h1>
          <p className="text-charcoal/70">
            Manage your café from one place
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-matchaGreen/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-matchaGreen" />
                  </div>
                  <span className="text-sm text-green-600 font-semibold">
                    {stat.change}
                  </span>
                </div>
                <p className="text-sm text-charcoal/60 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-coffeeBrown">{stat.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['products', 'orders'].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'primary' : 'outline'}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-coffeeBrown">Products</h2>
              <Button variant="primary" icon={Plus}>
                Add Product
              </Button>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-warmBeige/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Stock</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warmBeige">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-warmBeige/20">
                        <td className="px-6 py-4 font-medium text-coffeeBrown">{product.name}</td>
                        <td className="px-6 py-4 text-charcoal/70">{product.category}</td>
                        <td className="px-6 py-4 text-charcoal/70">${product.price}</td>
                        <td className="px-6 py-4 text-charcoal/70">{product.stock}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 hover:bg-warmBeige rounded-lg"
                            >
                              <Edit className="w-4 h-4 text-matchaGreen" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 hover:bg-warmBeige rounded-lg"
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </motion.button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-coffeeBrown mb-6">Recent Orders</h2>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-warmBeige/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Order #</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Customer</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Total</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-coffeeBrown">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warmBeige">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-warmBeige/20">
                        <td className="px-6 py-4 font-medium text-coffeeBrown">{order.orderNo}</td>
                        <td className="px-6 py-4 text-charcoal/70">{order.customer}</td>
                        <td className="px-6 py-4 text-charcoal/70">${order.total}</td>
                        <td className="px-6 py-4">
                          <span className={`
                            px-3 py-1 rounded-full text-xs font-semibold
                            ${order.status === 'Completed' ? 'bg-green-100 text-green-700' : ''}
                            ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : ''}
                            ${order.status === 'Processing' ? 'bg-blue-100 text-blue-700' : ''}
                          `}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;