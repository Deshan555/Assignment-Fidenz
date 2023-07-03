# React Weather Application

The Weather Dashboard is a web application that allows users to get the current weather information for different cities using the OpenWeatherMap API. It provides real-time weather data such as temperature, weather conditions, and more.

![improved-screenshot](https://github.com/Deshan555/Assignment-Fidenz/blob/main/application-1.png)

![improved-screenshot](https://github.com/Deshan555/Assignment-Fidenz/blob/main/application-2.png)

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- ReactJS

## Setup and Usage

1. Clone the repository or download the source code.

```bash
git clone https://github.com/Deshan555/React_Weather-App.git
```

2. Open the project folder.

```bash
cd react_weather_application
```

3. To Run the project, use `npm start`

4. All weather details Update every 5 minutes.

## Configuration

To use the Weather App, you need an API key from OpenWeatherMap. Follow the steps below to obtain an API key:

1. Go to the [OpenWeatherMap website](https://openweathermap.org/) and sign up for a free account.

2. After signing up and logging in, go to your account dashboard and navigate to the "API Keys" section.

3. Generate a new API key.

4. Copy the API key and replace `.env` file with your own API key:

```javascript
const apiKey = 'YOUR_API_KEY';
```

## Completed Tasks

- [x] Extract City codes from cities.json file and load it into an array.
- [x] Referencing the City Codes, you now have to call openweathermap.org RESTful APIs
to get the latest weather information from the servers. First, you may need to register with
the openweathermap.org to access the APIs
- [x]  create a UI as of the provided
design file (PSD). This UI should be implemented with a responsive layout that adjusts into both
desktop and mobile resolutions
- [x]  Implement a data caching mechanism in your application by storing data coming from
openweathermap.org and serving it when the user requests the same data in subsequent
requests. Caching of a particular data should expire in 5 minutes
- [ ] create a docker file to deploy your application with
all required services

## Requested Changes 

- [x] Consider the folder grouping for better understanding.

- [x] Need to use .env file or appSetting.json file for store API keys and environment variables.

- [x] Need to move Constant variable to separate Constant file. 

- [x] Need to define an API url separate module like APIHelper.

- [x] Remove inline styles.

- [x] Implement UI as we provide.

- [x] Remove duplicate API requests.

- [x] Need to implement UI responsiveness.

## Credits

- [OpenWeatherMap API](https://openweathermap.org/) - Used for retrieving weather data.
- [Bootstrap](https://getbootstrap.com/) - Used for styling the user interface.
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
