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

5.  Next, add start-sw to the scripts section of package.json:
    ```
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "start-sw": "http-server ./build"
    },
    ```

6.  Build your project. Run this script on your terminal
    ```
    npm run build
    ```

7.  Run your project
    ```
    npm run start-sw
    ```

8.  Inspect your web page on the browser and open tab application, click service worker and see the status. The status must be **activated and is running**

9.  You also can test when the network offline or low signal network, the page still access able by accessing network tab.
