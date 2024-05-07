# Contact List React App

This project is a simple Contact List application built using React. It allows users to fetch and display contacts from an API, add new contacts, update existing contacts, and delete contacts.

## Features

- **Fetch and Display Contacts**: Contacts are fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) and displayed on the app.
  
- **Add Contact**: Users can add new contacts by entering contact details and submitting the form. Although this is a dummy request, the form simulates making a POST call to the API to add a new contact.

- **Update Contact**: Existing contacts can be updated by clicking the "Update" button on each contact card. This simulates making a PUT call to the API to update the contact details.

- **Delete Contact**: Users can delete a contact by clicking the "Delete" button on each contact card. This simulates making a DELETE call to the API to remove the contact.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Hooks: Functional components and state management.
- React Fetch Hook: Custom hook for fetching data from APIs.
- Tailwind CSS: Utility-first CSS framework for styling.


## Video Demo

Please watch the project demonstration video [here](<https://drive.google.com/file/d/1JwDXBT0trOQzlYMScufdL9AhJtR1l4KD/view?usp=sharing>).

## Github Repository

Explore the code on [GitHub](<https://github.com/Ananthuak16/React-Contactlist>).

## Hosted Application

Explore the Web app  on [GitHub](<https://6639edc5669e3dc71c315fd0--bright-pudding-7c37b0.netlify.app/>).


## Folder Structure

```
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── AddContact.jsx
│   │   ├── ContactCards.jsx
│   │   └── UpdateContact.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
└── README.md
```

## How to Run

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd contact-list-react-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and go to `http://localhost:3000` to view the app.

## Notes

- This project uses a dummy API from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demonstration purposes. No actual CRUD operations are performed on a real server.
- The `AddContact`, `ContactCards`, and `UpdateContact` components are responsible for adding, displaying, and updating contacts, respectively.
- The project utilizes Tailwind CSS for styling. The `styles.css` file contains additional custom styles if needed.

## Future Improvements

- Implementing client-side validation for adding and updating contacts.
- Enhancing the user interface with animations and transitions.
- Adding user authentication and user-specific contact lists.

## Author

[Your Name]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.