import React, { useState, FormEvent } from 'react';
import { Button } from '@heroui/button';
import { Input, Textarea } from '@heroui/input';
import { motion } from 'framer-motion';
import { addToast } from '@heroui/toast';

export function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validation state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear the error for this field when the user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle blur on input fields
  const handleBlur = (name: keyof typeof errors) => {
    // Validate field on blur
    let errorMessage = '';
    
    if (name === 'name' && !formData.name.trim()) {
      errorMessage = 'Name is required';
    } else if (name === 'email') {
      if (!formData.email.trim()) {
        errorMessage = 'Email is required';
      } else if (!isValidEmail(formData.email)) {
        errorMessage = 'Please enter a valid email address';
      }
    } else if (name === 'message' && !formData.message.trim()) {
      errorMessage = 'Message is required';
    }

    if (errorMessage) {
      setErrors(prev => ({
        ...prev,
        [name]: errorMessage
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      name: '',
      email: '',
      message: ''
    });
    
    // Validate fields
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Check for empty required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    // If validation fails, update errors state
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, simulate form submission
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success toast
      addToast({
        title: 'Success!',
        description: "Your message has been sent successfully! We'll get back to you soon.",
        color: 'success',
        timeout: 5000, // Optional: Set toast duration
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 500);
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-16 md:py-24 bg-neutral-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Get in <span className="text-primary-600">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Have a question or want to work together? Reach out and we&apos;ll get back to you soon.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-8"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-6 md:space-y-8">
            <motion.div 
              className="mb-10"
              variants={itemVariants}
            >
              <Input
                type="text"
                id="name"
                name="name"
                label="Name"
                autoComplete="name"
                labelPlacement="outside"
                placeholder="Your name"
                variant="bordered"
                radius="md"
                color={errors.name ? "danger" : "primary"}
                size="lg"
                isRequired
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                className="w-full"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
            >
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                autoComplete="email"
                labelPlacement="outside"
                placeholder="your.email@example.com"
                variant="bordered"
                radius="md"
                color={errors.email ? "danger" : "primary"}
                size="lg"
                isRequired
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                isInvalid={!!errors.email}
                errorMessage={errors.email}
                className="w-full"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
            >
              <Textarea
                id="message"
                name="message"
                label="Message"
                labelPlacement="outside"
                placeholder="How can we help you?"
                variant="bordered"
                radius="md"
                color={errors.message ? "danger" : "primary"}
                size="lg"
                minRows={5}
                isRequired
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                isInvalid={!!errors.message}
                errorMessage={errors.message}
                className="w-full"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <Button
                type="submit"
                color="primary"
                size="lg"
                radius="md"
                className="w-full md:w-auto px-8"
                isLoading={isSubmitting}
                disableRipple
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default ContactForm; 