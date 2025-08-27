import { useState } from 'react';

/**
 * Custom hook that encapsulates the contact form logic. It maintains form
 * state and handles submission to the serverless API. Abstracting this
 * logic into a hook aligns with the MVVM pattern by separating view
 * presentation from data management.
 */
export default function useContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  /**
   * Updates form state when the user changes any input field.
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Submits the form to the API endpoint. The API route is defined under
   * pages/api/contact.js and returns a success message. If any error
   * occurs the user is notified via the status state.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('Thanks for reaching out! I will get back to you soon.');
        // Reset form fields after successful submission
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (error) {
      setStatus('There was an error submitting the form. Please try again later.');
    }
  };

  return {
    form,
    status,
    handleChange,
    handleSubmit,
  };
}