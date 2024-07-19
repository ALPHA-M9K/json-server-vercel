
# Project Name
Wk3 Code Challenge

## Overview
Flatdango is a web application for purchasing movie tickets. It allows users to view a list of movies, see detailed information about each movie, and purchase tickets if available.

## Project Structure
- `index.html` - The main HTML file that provides the structure of the application.
- `style.css` - The stylesheet that defines the appearance of the application.
- `index.js` - The JavaScript file containing the functionality for fetching movie data, displaying movie details, and handling ticket purchases.
- `db.json` - Contains sample movie data for the application.

## Features
- Movie Menu: Displays a list of movies available for viewing.
- Movie Details: Shows detailed information about a selected movie, including the poster, runtime, showtime, available tickets, and a description.
-Ticket Purchase: Allows users to purchase tickets for a movie, with the button becoming disabled and labeled "Sold Out" when tickets are no longer available.

## JSON Data
The `db.json` file includes the following movie details:

- **ID**: Unique identifier for each movie.
- **Title**: The title of the movie.
- **Runtime**: Duration of the movie in minutes.
- **Capacity**: Total number of tickets available.
- **Showtime**: The showtime of the movie.
- **Tickets Sold**: Number of tickets that have already been sold.
- **Description**: A brief description of the movie.
- **Poster**: URL to the movie's poster image.

## Installation
Clone the Repository
Ensure you have a local server running at http://localhost:3000 with endpoints for /films and /films/{id}.


## Usage
Open index.html in your browser. The application should load and display the movie menu and details as described.

