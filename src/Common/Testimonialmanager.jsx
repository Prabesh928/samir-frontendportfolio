import React, { useState, useEffect } from 'react';

const Testimonialmanager = () => {
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(null);

  const [testimonials, setTestimonials] = useState([]);

 const BASE_URL = import.meta.env.VITE_API_URL || '';
 

const fetchTestimonials = async () => {
    try {
      const res = await fetch(`${BASE_URL}/testinomial`);
      const data = await res.json();
      setTestimonials(data.data);
    } catch (error) {
      console.error('Failed to fetch works:', error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('post', post);
    formData.append('text', text);
    if (photo) {
      formData.append('image', photo);
    }

    try {
      const res = await fetch(`${BASE_URL}/testinomial`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to add testinomial');

      setName('');
      setPost('');
      setText('');
      setPhoto(null);

      fetchTestimonials();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/testinomial/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (res.ok) {
        setTestimonials((prev) => prev.filter((item) => item._id !== id));
      } else {
        console.log('Failed to delete testimonial');
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="testimonial-manager p-4">
      <h2 className="text-2xl font-bold mb-4">Add Testimonial</h2>
      <form onSubmit={handleSubmit} className="mb-6" encType="multipart/form-data">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Post"
          value={post}
          onChange={e => setPost(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Testimonial Text"
          value={text}
          onChange={e => setText(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setPhoto(e.target.files[0])}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Testimonial
        </button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
      <ul>
  {testimonials.map((item) => (
    <li key={item._id}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition">
        <div className="flex-1 space-y-1">
          <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
          <p className="text-sm text-gray-600 italic">{item.post}</p>
          <p className="text-gray-700">{item.text}</p>
        </div>

        <div className="w-full md:w-[100px] mt-4 md:mt-0 md:ml-4">
          <img
            src={item.photoUrl}
            alt={item.name}
            className="w-full h-24 object-cover rounded-full"
          />
        </div>

        <div className="flex gap-2 mt-4 md:mt-0 md:ml-4">
          <button
            onClick={() => handleDelete(item._id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Testimonialmanager;
