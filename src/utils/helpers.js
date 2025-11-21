// Format price
export const formatPrice = (price) => {
  return `$${parseFloat(price).toFixed(2)}`;
};

// Calculate cart totals
export const calculateCartTotals = (items) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 20 ? 0 : 3.99;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    deliveryFee: parseFloat(deliveryFee.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
  };
};

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate order number
export const generateOrderNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `BB-${timestamp}-${random}`;
};

// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Estimate delivery time
export const estimateDeliveryTime = (deliveryMethod) => {
  if (deliveryMethod === 'pickup') {
    return '15-20 minutes';
  }
  return '30-45 minutes';
};