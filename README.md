# Master Plan: Workfl.ow

## Back-end development
### Server Folder-Structure
- server/
    - index.js
    - controller/
        - genreController.js
        

### Dependencies
- Express.js
    - Install (npm i express)

### Routes

**genreController.js**

- get: './api/genres'
- post: './api/custom'
- put: './api/custom/:id'
- delete: './api/custom/:id'

### data

```js
const genre = {
lofi, classical, jazz, electronic, custom;
}
```

## Front-end development

### front-end folder structure
- src/
    - App.js => class
    - Index.js
    - Components/
        - Genres.js
        - Display.js
        

## Checklist:
- clear default css/jsx on App.js & App.css 
- reset.css => add to index.js
- package.json
    - add main: server => so we can type nodemon without giving file
- setupProxy.js
    - set to port number (4000)

### dependencies
- axios
    - must install
- http-proxy-middleware
    - must install

## Additional notes/explations:
### Back-end
#### Index.js:
- require express API, genreController.js, and destructure genreController
- app.use(express.json()) to allow us to receive and parse body requests
#### Index.js: End-points
- Full CRUD/REST Method
    ```js
    app.get('./api/genres', getAllGenres)
    app.post('./api/custom', newCustom)
    app.put('./api/custom/:vidId', updateCustom)
    app.get('./api/custom/:vidId', deleteCustom)
    ```
#### Port
- self-explantory



### Components
- App.js:
    - State will be genre selected
- Genre.js
    - Components within Genre.js will represent the "selector" nav bar where the genres and checkbox will allow the Display component to display the selected video links. Each genre will be a functional component. (Change navbar to horizontal instead of vertical as planned)
- Display.js
    - stateless component that will render the video links based on the state of App.js

### CRUD
- Create/Get: function to create will be able to new custom playlist that will act like a "genre". 
- Read/Post: function to add new playlist & add new links
- Update/Put: function to update link within a custom playlist
- Delete: function to delete link or custom playlist all together

####
found this regex code to help find videoID of youtube link
http://stackoverflow.com/questions/3452546/javascript-regex-how-to-get-youtube-video-id-from-url/27728417#27728417





