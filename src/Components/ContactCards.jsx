import React from 'react';

const ContactCards = ({ contactList, deleteContact, updateContact }) => {
  // Function to handle contact deletion
  const handleDelete = (id) => {
    deleteContact(id);
  };

  // Function to handle contact update
  const handleUpdate = (contact) => {
    updateContact(contact);
  };

  return (
    <>
      {/* Map through the contactList and render contact cards */}
      {contactList?.map((contact, index) => (
        contact && (
          <figure key={index} className='bg-white h-80 w-60 rounded-lg shadow-md flex flex-col'>
            {/* Contact information section */}
            <div className='flex-grow'>
              <figcaption className='text-center mt-5'>
                {/* Display contact details */}
                {contact.name && (
                  <p className='text-green-700 font-semibold text-xl mb-2'>{contact.name}</p>
                )}
                {contact.username && (
                  <p className='text-blue-700 font-semibold text-xm mb-2'>{contact.username}</p>
                )}
                {contact.email && (
                  <p className='text-gray-g500'><span className='font-medium'>email:</span>{contact.email}</p>
                )}
                {contact.phone && (
                  <p className='text-gray-g500'><span className='font-medium'>phone:</span>{contact.phone}</p>
                )}
                {contact.website && (
                  <p className='text-gray-g500'><span className='font-medium'>website:</span>{contact.website}</p>
                )}
              </figcaption>
            </div>
            {/* Delete and Update buttons */}
            <div className="flex justify-center space-x-4 mt-auto mb-4">
              {/* Delete button */}
              <button onClick={() => handleDelete(contact.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Delete</button>
              {/* Update button */}
              <button onClick={() => handleUpdate(contact)} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Update</button>
            </div>
          </figure>
        )
      ))}
    </>
  );
};

export default ContactCards;
