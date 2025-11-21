import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Coffee } from 'lucide-react';
import { Link } from 'react-router';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call to backend
    // Example:
    // await fetch('/api/auth/forgot-password', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });

    console.log('Password reset request for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 gradient-warm flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-medium p-8 text-center">
            <div className="w-20 h-20 bg-matchaGreen/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-matchaGreen" />
            </div>
            <h2 className="text-2xl font-bold text-coffeeBrown mb-4">
              Check Your Email
            </h2>
            <p className="text-charcoal/70 mb-8">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <Link to="/login">
              <Button variant="primary" size="lg" className="w-full">
                Back to Login
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 gradient-warm flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl shadow-medium p-8">
          <Link to="/login" className="inline-flex items-center gap-2 text-coffeeBrown hover:text-matchaGreen transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </Link>

          <div className="text-center mb-8">
            <Coffee className="w-16 h-16 text-coffeeBrown mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-coffeeBrown mb-2">
              Forgot Password?
            </h1>
            <p className="text-charcoal/70">
              No worries! Enter your email and we'll send you reset instructions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={Mail}
              required
            />

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;