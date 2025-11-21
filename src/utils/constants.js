// API endpoints - update these when connecting to backend
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  VERIFY_TOKEN: '/auth/verify',
  
  // Products
  PRODUCTS: '/products',
  PRODUCT_BY_ID: (id) => `/products/${id}`,
  PRODUCTS_BY_CATEGORY: (category) => `/products/category/${category}`,
  
  // Orders
  ORDERS: '/orders',
  ORDER_BY_ID: (id) => `/orders/${id}`,
  USER_ORDERS: '/orders/user',
  
  // Cart (if using backend cart)
  CART: '/cart',
  ADD_TO_CART: '/cart/add',
  UPDATE_CART: '/cart/update',
  REMOVE_FROM_CART: '/cart/remove',
  CLEAR_CART: '/cart/clear',
  
  // Admin
  ADMIN_PRODUCTS: '/admin/products',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_STATS: '/admin/stats',
};

// Categories
export const PRODUCT_CATEGORIES = ['All', 'Coffee', 'Drinks', 'Pastries', 'Snacks'];

// Order statuses
export const ORDER_STATUSES = {
  PENDING: 'Pending',
  PROCESSING: 'Processing',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

// Delivery methods
export const DELIVERY_METHODS = {
  DELIVERY: 'delivery',
  PICKUP: 'pickup',
};

// Payment methods
export const PAYMENT_METHODS = {
  CARD: 'card',
  WALLET: 'wallet',
  CASH: 'cash',
};