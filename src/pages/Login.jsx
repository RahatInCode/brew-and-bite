import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Coffee } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call to backend
    // Example:
    // try {
    //   const response = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const data = await response.json();
    //   if (data.token) {
    //     localStorage.setItem('token', data.token);
    //     navigate('/');
    //   }
    // } catch (error) {
    //   setErrors({ general: 'Login failed. Please try again.' });
    // }

    console.log('Login attempt:', formData);
    // Mock successful login
    setTimeout(() => {
      navigate('/');
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
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <Coffee className="w-16 h-16 text-coffeeBrown mx-auto mb-4" />
            </motion.div>
            <h1 className="text-3xl font-bold text-coffeeBrown mb-2">
              Welcome Back
            </h1>
            <p className="text-charcoal/70">
              Login to your Brew & Bite account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
              error={errors.email}
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-warmBeige" />
                <span className="text-charcoal/70">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-matchaGreen hover:underline">
                Forgot password?
              </Link>
            </div>

            {errors.general && (
              <p className="text-red-500 text-sm text-center">{errors.general}</p>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-warmBeige" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-charcoal/60">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" size="md">
              Google
            </Button>
            <Button variant="outline" size="md">
              Facebook
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-charcoal/70">
            Don't have an account?{' '}
            <Link to="/register" className="text-matchaGreen font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;