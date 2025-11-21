import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Coffee } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Replace with actual API call to backend
    // Example:
    // try {
    //   const response = await fetch('/api/auth/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name: formData.name,
    //       email: formData.email,
    //       password: formData.password
    //     })
    //   });
    //   const data = await response.json();
    //   if (data.token) {
    //     localStorage.setItem('token', data.token);
    //     navigate('/');
    //   }
    // } catch (error) {
    //   setErrors({ general: 'Registration failed. Please try again.' });
    // }

    console.log('Register attempt:', formData);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 gradient-warm flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl shadow-medium p-8">
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <Coffee className="w-16 h-16 text-coffeeBrown mx-auto mb-4" />
            </motion.div>
            <h1 className="text-3xl font-bold text-coffeeBrown mb-2">
              Join Brew & Bite
            </h1>
            <p className="text-charcoal/70">
              Create your account and start ordering
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              icon={User}
              required
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              icon={Lock}
              error={errors.password}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              icon={Lock}
              error={errors.confirmPassword}
              required
            />

            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-1 rounded border-warmBeige" required />
              <span className="text-sm text-charcoal/70">
                I agree to the{' '}
                <Link to="/terms" className="text-matchaGreen hover:underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-matchaGreen hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {errors.general && (
              <p className="text-red-500 text-sm text-center">{errors.general}</p>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create Account
            </Button>
          </form>

          <p className="text-center mt-6 text-charcoal/70">
            Already have an account?{' '}
            <Link to="/login" className="text-matchaGreen font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;