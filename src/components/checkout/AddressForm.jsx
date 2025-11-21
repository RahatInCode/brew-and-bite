import { useState } from 'react';
import { MapPin, Phone, User } from 'lucide-react';
import Input from '../common/Input';
import { motion } from 'framer-motion';

const AddressForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    fullName: initialData.fullName || '',
    phone: initialData.phone || '',
    street: initialData.street || '',
    city: initialData.city || '',
    zipCode: initialData.zipCode || '',
    notes: initialData.notes || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate form data
    onSubmit(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-coffeeBrown mb-6">Delivery Address</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          icon={User}
          required
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          icon={Phone}
          required
        />
      </div>

      <Input
        label="Street Address"
        name="street"
        value={formData.street}
        onChange={handleChange}
        icon={MapPin}
        required
      />

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <Input
          label="ZIP Code"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-coffeeBrown mb-2">
          Delivery Notes (Optional)
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
          placeholder="e.g., Ring the doorbell twice, Leave at door..."
          className="w-full px-4 py-3 bg-white border-2 border-warmBeige focus:border-matchaGreen rounded-xl focus:outline-none focus:shadow-soft transition-all duration-300"
        />
      </div>
    </motion.form>
  );
};

export default AddressForm;