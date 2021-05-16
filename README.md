# Whatsapp clone with react

The technologies used in this project are material ui, firebase and react

## hiereachy view of the app

The project is created with mainly 3 components.

the first one is sidebar component where all the channel list and other material ui icons are rendered.

the second one is chat component where the ui of the chat and logic for it is stored

the third one is login component where the ui of login screen and logic for firebase google authentication is stored

the sidebar component also renders a child component sidebarchannel where it shows the list of channels

###firebase

the firebase will be used a lot in the app. There is a firebase.js file in our application where all the firebase config is stored. Apart from that there are 4 more constants. The first one is firebaseApp which is your firebase app itself. the second one is provider which is the google auth provider and it will be used for login functionality. Then there is firebase auth which provides backend services for authentication. The last one is db which is the firebase firestore

#react context api

the react context api is used for our state management. It is created in stateprovider.js file. Statecontext constant is our context created by createContext method. the stateprovider const just acts like a datalayer which ahd three props reducer(which sees for changes) initialState(our currentState) and children. It is called in index.js file and app component is passed in as a child. The initialState, reducer are imported from reducer.js file. In reducer.js file the initialState is set to user which is null.

### `authentication  logic`

the logic for authentication is in the login.js file. It has a sign in function in which we calls auth from firebase.js file and puts the .signInWithPopup(provider) (provider is from firebase) function which signs in the user with the help of firebase and then sets the action type to set user and user state to the current user provided from firebase(the action state and user state are from redux).

### `messaging functionality`

when we are logged in a list of groups are rendered in our sidebar file. These lists comes from our firebase store. A useeffect hook is called which takes all the room documents from firebase and store them in our own peice of state called rooms. Then we map through the state and render each of them. In chat.js all our complex messaging functionality is stored


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
