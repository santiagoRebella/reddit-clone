# reddit-clone
Reddit clone using its API in a React-Redux approach

# installation and usage
this app uses webpack so there are currently 2 available scripts

`npm start` > will run production mode

`npm run dev` > will run dev mode with hot reloading using webpack-dev-server

# app notes

The refresh functionality is a meta tag just to save time, tried to call reddit with the before param query but duplicates the records.

The show more was implemented with an 'infinite scroll' approach. scroll to the end of the results and you will see a spinner that indicates the ajax request.

# app details

I decided to use the following technologies alongside react and redux

- webpack with wepack-dev-server to fast develop and powerfull control of the build
- bootstrap from sources to fast layout and css reset out of the box style (style can be matched adjusting bootstrap variables in `style/variables.scss`)
- react-router to have a front end router
- express to serve the app on production mode
- superagent as request ajax library
- react-thunk for asynchronous calls
- immutable for the store, having an easier debugging process due to immutable state
- lodash just for the debounce function
- moment to format easy the dates
