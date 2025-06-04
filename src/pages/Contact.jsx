import React, { useState } from 'react';
import PageWrapper from '../Common/PageWrapper';

const Contact = () => {
   const BASE_URL = import.meta.env.VITE_API_URL || '';
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    alert(result.message);
     setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <PageWrapper>
    <section className="w-full px-6 py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Feel Free to Reach Out</h2>
        <p className="text-gray-600 mt-2">I’ll get back to you as soon as I can.</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={form.name}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />

        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={form.email}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />

        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} value={form.phone}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />

        <textarea name="message" placeholder="Your Message" rows="5" onChange={handleChange} value={form.message}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none"></textarea>

        <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">
          Send Message
        </button>
      </form>
    </section>
    </PageWrapper>
  );
};

export default Contact;
