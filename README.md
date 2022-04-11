
# Individual Project - Infinite Video Games App 🎮


<div>
    <img height="270" src="https://res.cloudinary.com/djbiam1gm/image/upload/v1649704622/VG%20PI/slide01_mini.png" />
    <img height="270" src="https://res.cloudinary.com/djbiam1gm/image/upload/v1649704623/VG%20PI/slide02_mini.png" />
</div>

<div>
    <img height="270" src="https://res.cloudinary.com/djbiam1gm/image/upload/v1649704623/VG%20PI/slide03_mini.png" />
    <img height="270" src="https://res.cloudinary.com/djbiam1gm/image/upload/v1649704622/VG%20PI/slide04_mini.png" />
</div>

## Project Goals

- Create an App using the following technologies:
    - [ ] React
    - [ ] Redux
    - [ ] Express
    - [ ] Sequelize - Postgres


- Learn and practicw GIT Workflow
- Practice testing


## Features

The main objetive was to create an application in which videogame cards can be seen together with relevant information about them using the external API [rawg](https://rawg.io/apidocs) and from it, do the following:

  - Find video games
  - Filter / sort video games
  - Create a new video game
 
 __IMPORTANT__: To be able to use this external API it was necessary to create an account to obtain an API Key that was then be included in all the requests which were made to rawg simply by adding `?key={API_KEY}` at the end of each endpoint.


### Endpoints/Flags used

  - GET https://api.rawg.io/api/games
  - GET https://api.rawg.io/api/games?search={game}
  - GET https://api.rawg.io/api/genres
  - GET https://api.rawg.io/api/games/{id}
  - GET https://api.rawg.io/api/platforms


### Frontend

A React/Redux app was developed containing the following screens/routes:


- [ ] Landing Page: with the following content:
    - A background image representative of the project
    - Button to access homa page (`Main route`)


- [ ] Home Page : with the following content:
    - Input for searching video games by name
    - Area where video game cards  are displayed, with the following data :
      🔹 Image
      🔹 Name
      🔹 Genre
    - Feature to sort games by rating or alphabetically.
    - Feauture to filter games by genre and by origin (stored in DB or from API )
    - Pagination to search and display 15 games per page


- [ ] Video Game Detail: with the following information:
    - Name
    - Image
    - Genre
    - Description
    - Release date
    - Rating
    - Plataforms

- [ ] Create New Video Game: with the following information:
    - Controlled Form __with JavaScript__ with the following fields:
      🔹 Name
      🔹 Description
      🔹 Release date
      🔹 Rating
    - Feature to select and add many genres
    - Feature to select and add many platforms
    - Button to create new video game


### Database

The database model was created with the following entities 

- [ ] Video game with the following properties:
  - ID
  - Name
  - Description
  - Release date
  - Rating
- [ ] Genre with the following properties:
  - ID
  - Name
- [ ] Platform with the following properties:
  - ID
  - Name



### Backend

A server was developed in Node/Express with the following routes:

- [ ] __GET /videogames__:
  - Get a list of video games
  - Returns only the data needed to be rendered on the home page.
- [ ] __GET /videogames?name="..."__:
  - Obtains a list of the first 15 video games that matches the words entered as a query parameter
  - If there is no video game match, an error message is returned.
- [ ] __GET /videogame/{idVideogame}__:
  - Gets the detailed data of a particular video game
  - Brings only the data required in the video game detail route
- [ ] __GET /genres__:
  - Gets all types of video game genres
  - At first, it brings all the genres from rawg API and saves them in the database, and then uses the data from there
- [ ] __GET /platforms__:
  - Gets all types of video game platforms
  - At first, it brings all the platforms from rawg API and saves them in the database, and then uses the data from there
- [ ] __POST /videogame__:
  - Receives the data through req.body collected from the controlled form of the video game creation route
  - Creates a video games and saves it on the database


### Testing
- [ ] 8 unit tests were created for the database models with "Chai"
- [ ] 15 unit tests were created for routes with "Chai"
- [ ] 5 unit test were created for the Landing Page component with "enzyme"
