// Base URL for the API
const BASE_URL = "http://localhost:3000";

// Function to fetch data from the server
function fetchData(endpoint) {
  return fetch(BASE_URL + endpoint)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Function to display movie details
function displayMovieDetails(movie) {
  const availableTickets = movie.capacity - movie.tickets_sold;
  const isSoldOut = availableTickets === 0;
  const detailsHTML = `
        <div class="movie-container">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title} poster">
            </div> 
            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p>Runtime: ${movie.runtime} minutes</p>
                <p>Showtime: ${movie.showtime}</p>
                <p>Available tickets: <span id="available-tickets">${availableTickets}</span></p>
                <button id="buy-ticket" ${isSoldOut ? "disabled" : ""}>
                    ${isSoldOut ? "Sold Out" : "Buy Ticket"}
                </button>
                <p class="movie-description">${movie.description}</p>
            </div>
        </div>
    `;
  document.getElementById("movie-details").innerHTML = detailsHTML;
  if (!isSoldOut) {
    document
      .getElementById("buy-ticket")
      .addEventListener("click", () => buyTicket(movie));
  }
}

// Function to display movie menu
function displayMovieMenu(movies) {
  const movieList = document.getElementById("films");
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.textContent = movie.title;
    li.classList.add("film", "item");
    if (movie.capacity - movie.tickets_sold === 0) {
      li.classList.add("sold-out");
    }
    li.addEventListener("click", () => {
      fetchData(`/films/${movie.id}`).then(displayMovieDetails);
    });
    movieList.appendChild(li);
  });
}

// Function to handle ticket purchase
function buyTicket(movie) {
  if (movie.capacity - movie.tickets_sold > 0) {
    movie.tickets_sold++;
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById("available-tickets").textContent = availableTickets;
    if (availableTickets === 0) {
      const buyButton = document.getElementById("buy-ticket");
      buyButton.textContent = "Sold Out";
      buyButton.disabled = true;

      // Update the movie in the list
      const movieListItem = document.querySelector(
        `#films li:nth-child(${movie.id})`
      );
      if (movieListItem) {
        movieListItem.classList.add("sold-out");
      }
    }
  }
}

// Function to initialize the page
function init() {
  fetchData("/films/1")
    .then((firstMovie) => {
      displayMovieDetails(firstMovie);

      return fetchData("/films");
    })
    .then((allMovies) => {
      displayMovieMenu(allMovies);
    })
    .catch((error) => {
      console.error("Error initializing app:", error);
    });
}

// Run the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
