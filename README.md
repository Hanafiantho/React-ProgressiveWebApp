## Simple Progressive Web App with React

In this project i would like to implement a simple Progressive Web App on React App. Basically there are several points that i have to do to make the web fully a Progreesive Web App. In this project, point that i want to raise is how can make the web page can be accessed when the network signal is low even offline.

There are several things that i do in this project :
1.  Create react App
      ```
      npx create-react-app (name of your project)
      ```

2.  Open your react folder on your code editor, and go to index.js
3.  Look at into the bottom of index.js and change **serviceWorkder.unregister()** into **serviceWorkder.register()**
      - We use service worker as a bridge or proxy between client side and server.
      - When user first time access web page, user will make a request through Service Worker.
	- Service Worker will check cache storage first, is the file exist or not.
	- If the file isn’t exist, Service Worker will do a request into server and save downloaded file into cache storage.
	- Now shell and assets are exist on cache storage.
	- When user request the web page for the second time and so on, Service Worker will do the same thing as first time user                  access web page.
	- Because assets and shell exist in cache storage, Service Worker will automatically send file from cache storage for displaying to user.

4.  We only can test progressive web app after we build the project, and we have to install another npm package so we can test the app on production.
```
npm i http-server -D
```
 
 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
