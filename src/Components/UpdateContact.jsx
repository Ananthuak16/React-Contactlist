import React, { useState } from 'react';

const UpdateContact = ({ contact, updateContact }) => {
  // State to manage updated contact details
  const [updatedContact, setUpdatedContact] = useState(contact || {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call updateContact function passed from parent component
    updateContact(updatedContact);
  };

  // If contact is not available, render null or a loading indicator
  if (!contact) {
    return null; // Or render a loading indicator or error message
  }

  return (
    <div className="p-4 border border-gray-300 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Update Contact</h2>
      {/* Contact update form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          {/* Input field for name */}
          <input type="text" name="name" id="name" value={updatedContact.name} placeholder="Name" onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          {/* Input field for username */}
          <input type="text" name="username" id="username" value={updatedContact.username} placeholder="Username" onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          {/* Input field for email */}
          <input type="email" name="email" id="email" value={updatedContact.email} placeholder="Email" onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          {/* Input field for phone */}
          <input type="text" name="phone" id="phone" value={updatedContact.phone} placeholder="Phone" onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
          {/* Input field for website */}
          <input type="text" name="website" id="website" value={updatedContact.website} placeholder="Website" onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border border-gray-300" />
        </div>
        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Update Contact</button>
      </form>
    </div>
  );
};

export default UpdateContact;
