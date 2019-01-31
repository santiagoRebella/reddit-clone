# reddit-clone
Reddit clone using its API in a React-Redux approach

# installation and usage
this app uses webpack so there are currently 2 available scripts

npm start > will run production mode

npm run dev > will run dev mode with hot reloading using webpack-dev-server

# missing features

Still missing 
- the minute refresh functionality that will be a timeout with an api call and maybesome tune to not make it scroll
- the pagination, the before and after are in the store for subreddits and for posts, didnt had time yet to approach it but everything is already in place to use it
- the go top button in the footer should implement a behaviour that is hidden if the scroll is at the top and if not to be shown and scrollTo top on click didnt had time
- use moment.js to show the date of creation of the posts in a nice format

# app details

I decided to use besides react and redux

-webpack with wepack-dev-server to fast develop and powerfull control of the build
-bootstrap from sources to fast layout and css reset out of the box style (style can be matched adjusting bootstrap variables in style/variables.scss)
-react-router to ahve a front end router
-express to serve the app on production mode
-superagent as request ajax library
-react-thunk for asynchronous calls
-immutable for the store, having an easier debugging process due to immutable state
