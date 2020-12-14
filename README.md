# Front End Coding Interview
* Demonstrate the ability to create front-end web experiences that reproduce design prototypes
* Demonstrate the ability to create dynamic experiences that integrate with a back-end API 
* Demonstrate the ability to create responsive web applications
* Demonstrate the ability to create accessible web applications

### Specifications
* You may choose to use a Web Framework (such as Angular, React, or Vue) or start from scratch.
* The api key for OMDBAPI is: a4d98298. Here is a sample query to search for movies with the word “coach” in the title http://www.omdbapi.com/?s=coach&apikey=a4d98298
* Use these prototypes for the layout of the desktop and mobile experience as a general design guidance.
https://promontech.invisionapp.com/console/share/PC1M3UX78D/483352808
https://promontech.invisionapp.com/console/share/BR1M3VKKWX/483352971
* It’s not necessary to match the font style and color palette exactly. Simply showing an approximate color palette is fine
* You should have an appropriate level of test covarage (any tool to the related framework/lib);
* You can use Bootstrap, Foundation, Angular Material or any framework/lib template;
* You can use SASS or LESS for styling;
* Publish your project in PUBLIC Github repository.

### Acceptance Criteria
#### Desktop
* Display gallery styled main page with a left sidebar.
* The left side bar is visible with static menu items Menu 1 thru Menu 7
* Display one card for each movie in the `omdbapi` search results for movies with the word “coach” in the title.
* Each movie card contains: Title, Year, Image
* Clicking on a card opens a popup with additional information about the movie. Display any of the following if available: 
Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Poster.
* Pop up should have a close button in the top right corner and be dismissed if clicked outside of it.

#### Page Width <600
* Display movie cards in a single column.
* The left side bar is no longer visible.
* There is a hamburger icon in the top left corner.
* When clicking on the hamburger icon, slide the static menu bar over the movie gallery , and change the hamburger icon to `X`.
* Clicking on the `X` icon closes the static menu bar and displays the movie gallery again

----------------------------------------------------------------------------------------------------------------------------
##### Tech Stack Used
* React
* Bootstrap
* SASS
* Testing - Enzyme and Jest

##### How to Start App Locally
1. Run `npm install`
2. Run `npm start`
3. See app in browser by at [http://localhost:3000](http://localhost:3000)

##### Considerations after looking at wireframe and working on the assignment
1. The mock up shows the image fitting in the gray boxes so in order to avoid distorting the 
images, I hid the overflow that way you only see parts of the image if it doesn't fit in the entire container (not ideal but preferred over distorted image)
2. The poster image is suppose to fit in entire top section of the modal according to mock up, it was
difficult to find a good contrast color for the X button when all the images have different background colors so I chose to add an hover color but would probably change the design for mobile since hover does not work on devices
3. No examples were provided for the mobile modal pop-up so in order to keep the container a uniform height, the movie details container
is scrollable to fit all the information coming back from IMDB
4. Only had access to the preview section of the wireframe so containers, spacings, fonts, and colors are not exact matches

---------------------------------------------------------------------------------------------
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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
