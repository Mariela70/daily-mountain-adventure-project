# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# About

Single Page App for for sharing your favorite mountain adventure. The application allows visitors to browse through different publications. Users may register email and password, which allows them to create their own publications. Creators can also edit and delete their own publications at any time.

# Technical Details
The application have following resources:

A package.json file, containing list of common dependencies.
To start the application, execute the command “npm start” via the command-line terminal.
Local REST Service: softUni-practice server.

# Application Components
Navigation bar – Guests can see the links to the home, catalog, sign in and sign up pages. The logged in user navbar will contain the links to the home page, catalog, create page, profile page and logout.

Login page – By providing a email and password, the app will login user. Login functionalty will send POST request to the correct endpoint with email and password. Upon success, the REST service will return information about the existing user. After successful login the user will be redirected to the home page.

Register page – the page contains a form for new user registration. By providing a user information and password, the app will register a new user in the system. Register functionalty will send POST request . Upon success, the REST service will return information about the existing user. After successful registration the user will be redirected to the home page.

Logout page – The logout action is available for the logged in users. Logout functionalty will send GET request to the correct endpoint, with access token sent in the X-Authorization header. Any session information will be cleared.

Home page – All users will be welcomed by the Home page, where they can naviagate to the other pages. It contains a list with the last 3 adventures.

Catalog page – The page displays a list of all adventures in the system.

Create adventure page – The create page is available for logged in users. It contains a form for creating new adventure publication. Creating fuctionalty sends POST request to the correct endpoint. The service will return the newly created record. Upon success, the user will be redirected to the catalog page.

Details page – The logged in users are able to view details about every adventure. Clicking the Details button in the view will display the page. If the currently logged in user is the creator of the publication, he can clickt the Edit and Delete buttons.


Edit page – The edit page is available for the owner to edit their own publication. The service will return the modified record. Upon success the user will be redirected to the details page.

Delete page – The delete action is available for the owner. When the owner clicks on the Delete button, the publication will be deleted from the system.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


