import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import AddressForm from '../components/checkout/AddressForm';
import DeliveryMethod from '../components/checkout/DeliveryMethod';
import PaymentMethod from '../components/checkout/PaymentMethod';
import OrderConfirmation from '../components/checkout/OrderConfirmation';
import Button from '../components/common/Button';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    address: null,
    deliveryMethod: null,
    paymentMethod: null,
  });

  const steps = [
    { number: 1, title: 'Address' },
    { number: 2, title: 'Delivery' },
    { number: 3, title: 'Payment' },
    { number: 4, title: 'Confirm' },
  ];

  const handleAddressSubmit = (addressData) => {
    setFormData({ ...formData, address: addressData });
    setCurrentStep(2);
  };

  const handleDeliverySelect = (method) => {
    setFormData({ ...formData, deliveryMethod: method });
  };

  const handlePaymentSelect = (method) => {
    setFormData({ ...formData, paymentMethod: method });
  };

  const handlePlaceOrder = async () => {
    // TODO: Replace with actual API call to backend
    // Example:
    // const orderData = {
    //   items: cartItems,
    //   address: formData.address,
    //   deliveryMethod: formData.deliveryMethod,
    //   paymentMethod: formData.paymentMethod,
    //   total: calculateTotal()
    // };
    // 
    // const response = await fetch('/api/orders', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //   },
    //   body: JSON.stringify(orderData)
    // });
    // 
    // const data = await response.json();
    // if (data.success) {
    //   setCurrentStep(4);
    // }

    console.log('Placing order:', formData);
    setCurrentStep(4);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 gradient-warm">
      <div className="container-custom">
        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2
                      ${currentStep >= step.number
                        ? 'bg-matchaGreen text-white'
                        : 'bg-white text-charcoal/40'
                      }
                    `}
                  >
                    {step.number}
                  </motion.div>
                  <span className={`text-sm font-medium ${currentStep >= step.number ? 'text-coffeeBrown' : 'text-charcoal/40'}`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-charcoal/20 -mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl shadow-soft p-8"
              >
                <AddressForm
                  onSubmit={handleAddressSubmit}
                  initialData={formData.address}
                />
                <div className="flex justify-end mt-6">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      // Trigger form submission
                      document.querySelector('form').requestSubmit();
                    }}
                  >
                    Continue to Delivery
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl shadow-soft p-8"
              >
                <DeliveryMethod
                  selected={formData.deliveryMethod}
                  onSelect={handleDeliverySelect}
                />
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setCurrentStep(3)}
                    disabled={!formData.deliveryMethod}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl shadow-soft p-8"
              >
                <PaymentMethod
                  selected={formData.paymentMethod}
                  onSelect={handlePaymentSelect}
                />
                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={() => setCurrentStep(2)}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handlePlaceOrder}
                    disabled={!formData.paymentMethod}
                  >
                    Place Order
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-soft p-8"
              >
                <OrderConfirmation
                  orderNumber="BB-2024-00123"
                  estimatedTime="30-45 minutes"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Checkout;