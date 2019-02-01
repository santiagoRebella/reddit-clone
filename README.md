# reddit-clone
Reddit clone using its API in a React-Redux approach

# installation and usage
this app uses webpack so there are currently 3 available scripts

`npm start` > will run production mode, will be served in `localhost:3000`

`npm run dev` > will run dev mode with hot reloading using webpack-dev-server

`npm run test` > will run the tests

# app functionalities

The app gives you a list of subreddits that you can click on the button to navigate to the particular list of posts of that subreddit, from there you can click on the button of each one to navigate to the comments section of that post in reddit.

Next to the logo there is a breadcrumb from where you can navigate back and forward from posts and subreddits.

Scrolling to the bottom will trigger subsequent requests to fetch more posts or subreddits, this bottom request is protected by a debounce and once the request is sent a loading spinner will appear. This functionality is implemented then as an infinite scroll.

At the bottom right corner there is a `go up` link that scrolls you to top.

After 60 seconds the page will refresh and take you to the top in the location you are (subreddits or posts).

The app was built using bootstrap grid system and should be cross platform, cross browser and cross device and be responsive.

# code overview

The code src is organized in 4 folders
  - `components` the react components, each file is a ES6 class extending React component.
  - `core` is where the redux logic lives.
  - `style` the styles, the entry point is `main.scss`, this imports bootstrap sources and a local `variables.scss` file where the app can be themed modifying bootstrap variables.
  - `assets` where logo and favicons live

I am using react router in components/app.js and bootstrap the application in index.js wrapping it with a Provider and using the #root div leaved empty in index.html

when the app mounts initially fetches the subreddit list of default subreddits and puts it in the subreddits key in the store.

At the time of going to a subreddit view, the `props.params` is used to fetch the respective list of posts related to a subreddit once mounted, so you can refresh from that location and will work.

The show more was implemented with an 'infinite scroll' approach. scroll to the bottom of the results and a spinner will appear that indicates the ajax request.

# app details

I decided to use the following technologies alongside react and redux

- **webpack** with `wepack-dev-server` to fast develop and powerfull control of the build
- **bootstrap** from sources to fast layout and css reset out of the box style (style can be matched adjusting bootstrap variables in `style/variables.scss`)
- **react-router-dom** to have a front end router
- **express** to serve the app on production mode
- **superagent** as request ajax library
- **react-thunk** for asynchronous calls
- **immutable** for the store, having an easier debugging process due to immutable state
- **lodash** just for the `debounce` function
- **moment** to format easy the dates
- **jest** for a test-runner
- **express** In production mode will serve the build in a simple way and also the statics.

# app TODOs

These are the app TODOs that in my opinion are still missing to give a better shape to the overall experience, and where not implemented due to time restrictions and workload balance:

- there is a filter.js component that now shows just `all` but is in place to have there 4 button where to choose the get subreddits param of `default`, `new`, `gold`, `popular`, and similar to the posts view. I didnt implement it due to time restrictions.

- the 60 seconds refresh reload is implemented in a simple way, It should be implemented using the `before` query param and comparing with first item id on store and response to figure out if new data is available, didnt had time to implement it accordingly.

- fix styles and improve how the `cards` are displayed, this aspect was done very fast and taken as a technical debt, there is a lot to improve and fix.

- test more
