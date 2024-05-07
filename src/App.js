import React, { useEffect, useState } from 'react';
import useFetch from 'react-fetch-hook';
import ContactCards from './Components/ContactCards';
import AddContact from './Components/AddContact';
import UpdateContact from './Components/UpdateContact';

function App() {
  const url = "https://jsonplaceholder.typicode.com/users?_limit=20";

  const { isLoading, data, error } = useFetch(url);

  // useState declarations
  const [contactList, setContactList] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);
  const [showAddContact, setShowAddContact] = useState(false);
  const [showUpdateContact, setShowUpdateContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    if (data) {
      if (filterQuery) {
        // Filter the data based on the filterQuery
        const filteredContacts = data.filter(contact =>
          contact.name.toLowerCase().includes(filterQuery.toLowerCase())
        );
        setContactList(filteredContacts);
      } else {
        // If no filterQuery, use all data
        setContactList(data);
      }
    }
  }, [data, filterQuery]);

  const addContact = (newContact) => {
    // Dummy API call to add contact
    // Assuming the response contains the newly added contact with an id
    setContactList(prevContacts => [...prevContacts, { ...newContact, id: Math.random() }]);
    setShowAddContact(false);
  };

  const deleteContact = (id) => {
    // Dummy API call to delete contact
    setContactList(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    // Dummy API call to update contact
    setContactList(prevContacts => prevContacts.map(contact => (contact.id === updatedContact.id ? updatedContact : contact)));
    setShowUpdateContact(false);
  };

  const handleUpdate = (contact) => {
    setSelectedContact(contact);
    setShowUpdateContact(true);
  };

  return (
    <div className="bg-gray-100 flex flex-col h-screen">
        <section>
        <form>
          <input
            type="text"
            className="ml-20 mt-6 rounded-md p-2"
            placeholder="Type here to filter...."
            onChange={e => setFilterQuery(e.target.value)}
          />
        </form>
      </section>
      <section className="flex justify-end p-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => setShowAddContact(true)}
        >
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-9h2v2H9v-2zm4 0h2v2h-2v-2z" />
          </svg>
          Add Contact
        </button>
      </section>

      <section className='p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6 flex-grow overflow-auto'>
        {showAddContact && <AddContact addContact={addContact} />}
        {showUpdateContact && <UpdateContact contact={selectedContact} updateContact={updateContact} />}
        {/* Pass filtered contacts instead of all data */}
        <ContactCards contactList={contactList} deleteContact={deleteContact} updateContact={handleUpdate} />
      </section>
    </div>
  );
}

export default App;
