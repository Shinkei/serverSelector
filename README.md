# Server Selector

This project shows a server selector based in regions, if the user allows the browser loaction, the app will guide teh user to the closest location and the list of servers to select in this location.
It provides a visual map to guide better the user to select a server closes to his actual location, or change between regions and servers as will.

### Technologies
This is a project that uses: 
- 📦 Parcel
- 🗼 Babel
- ⚛️React
- 🍃 react-leaflet
- 👨‍🎨 react-jss

### Commands
- install dependencies `npm i`
- run the app in dev mode `npm run dev`
- format the code `npm run format`

### Architecture Idea
The architecture idea of this project is to have a dashboard component that will contain the other components and also will ahve the whole logic and context of the app, in a deeper view there are sections with titles that will group a set of buttons, these buttons are just a button with text for the regions, and a button with the company logo and the name for the servers.

In the other hand there is the Map component, that uses react-leaflet and will provide a visual interaction with the user to navigate and understand better the location of the servers.

To check the Backend part, please check [ServerSelectorAPI](https://github.com/Shinkei/serverSelectoAPI)

### Deploy
The app is deployed at netlify, please check this url [https://server-selector.netlify.app](https://server-selector.netlify.app)
steps to deploy:
- `npm run build`
- `netlify deploy`

### Author 🤓
Jorge Ramirez