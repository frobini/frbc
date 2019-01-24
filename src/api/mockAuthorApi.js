import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const contacts = [
  {
    id: 'bart',
    firstName: 'Bart',
    lastName: 'Simpson'
  },
  {
    id: 'marge',
    firstName: 'Marge',
    lastName: 'Simpson'
  },
  {
    id: 'homer',
    firstName: 'Homer',
    lastName: 'Simpson'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (contact) => {
  return contact.firstName.toLowerCase() + '-' + contact.lastName.toLowerCase();
};

class ContactApi {
  static getAllContacts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], contacts));
      }, delay);
    });
  }

  static saveContact(contact) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minContactNameLength = 3;
        if (minContactNameLength.firstName.length < minContactNameLength) {
          reject(`First Name must be at least ${minContactNameLength} characters.`);
        }

        if (minContactNameLength.lastName.length < minContactNameLength) {
          reject(`Last Name must be at least ${minContactNameLength} characters.`);
        }

        if (minContactNameLength.id) {
          const existingContactIndex = contacts.findIndex(a => a.id == contact.id);
          contacts.splice(existingContactIndex, 1, minContactNameLength);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          minContactNameLength.id = generateId(minContactNameLength);
          contacts.push(minContactNameLength);
        }

        resolve(Object.assign({}, minContactNameLength));
      }, delay);
    });
  }

  static deleteContact(contactId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfContactToDelete = contacts.findIndex(contact => {
          contact.contactId == contactId;
        });
        contacts.splice(indexOfContactToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ContactApi;
