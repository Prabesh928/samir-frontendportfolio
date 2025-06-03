import React, { useState, useEffect } from 'react';

const WorkManager = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);

  const [works, setWorks] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_URL || '';

  const fetchWorks = async () => {
    try {
      const res = await fetch(`${BASE_URL}/work`);
      const data = await res.json();
      setWorks(data.data);
    } catch (error) {
      console.error('Failed to fetch works:', error);
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  const handleDelete = async (workid) => {
    try {
      const res = await fetch(`${BASE_URL}/work/${workid}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (res.ok) {
        console.log('data deleted');
        setWorks((prev) => prev.filter((work) => work._id !== workid));
      } else {
        console.log('failed to delete data');
      }
    } catch (error) {
      console.log('error occurred', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('details', details);
    formData.append('date', date);
    if (image) {
      formData.append('image', image);
    }

    try {
      const res = await fetch(`${BASE_URL}/work`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if (!res.ok) throw new Error('Failed to add work');

      // Clear form
      setName('');
      setLocation('');
      setDetails('');
      setDate('');
      setImage(null);

      fetchWorks();
    } catch (error) {
      console.error('Error submitting work:', error);
    }
  };

  return (
    <div className="work-manager p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Work</h2>
      <form onSubmit={handleSubmit} className="mb-6" encType="multipart/form-data">
        <input
          type="text"
          placeholder="Work Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Details"
          value={details}
          onChange={e => setDetails(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Work</button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Work List</h3>
      <ul>
        {works.map(work => (
          <div
            key={work._id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition"
          >
            <div className="flex-1 space-y-1">
              <h2 className="text-xl font-bold text-gray-800">{work.workName}</h2>
              <p className="text-gray-600">{work.workLocation}</p>
              <p className="text-gray-600 line-clamp-2">{work.workDetails}</p>
              <p className="text-sm text-gray-500">{work.workDate}</p>
            </div>

            <div className="w-full md:w-[120px] mt-4 md:mt-0 md:ml-4">
              <img
                src={work.imageUrl}
                alt={work.workName}
                className="w-full h-24 object-cover rounded-md"
              />
            </div>

            <div className="flex gap-2 mt-4 md:mt-0 md:ml-4">
              <button
                onClick={() => handleEdit(work._id)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(work._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WorkManager;
