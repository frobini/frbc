import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const applications = [
    {
    id: "acme-1",
    title: "Acme 1"
  },
  {
    id: "acme-2",
    title: "Acme 2"
  },
  {
    id: "acme-3",
    title: "Acme 3"
  }

];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (application) => {
  return replaceAll(application.title, ' ', '-');
};

class ApplicationApi {
  static getAllApplications() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], applications));
      }, delay);
    });
  }

  static saveApplication(application) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minApplicationTitleLength = 1;
        if (application.title.length < minApplicationTitleLength) {
          reject(`Title must be at least ${minApplicationTitleLength} characters.`);
        }

        if (application.id) {
          const existingApplicationIndex = applications.findIndex(a => a.id == application.id);
          applications.splice(existingApplicationIndex, 1, application);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new applications in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          application.id = generateId(application);
          applications.push(application);
        }

        resolve(Object.assign({}, application));
      }, delay);
    });
  }

  static deleteApplication(applicationId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfApplicationToDelete = applications.findIndex(application => {
          application.applicationId == applicationId;
        });
        applications.splice(indexOfApplicationToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ApplicationApi;
