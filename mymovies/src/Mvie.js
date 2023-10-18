// Sample data for initial movies
const movies = [
    { title: "Movie 1", description: "Description 1", posterURL: "poster1.jpg", rating: 4.5 },
    { title: "Movie 2", description: "Description 2", posterURL: "poster2.jpg", rating: 3.8 },
    // Add more movies as needed
  ];
  
  // Function to render movies
  function renderMovies() {
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = '';
  
    movies.forEach((movie, index) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img class="poster" src="${movie.posterURL}" alt="Movie Poster">
        <div class="movie-details">
          <h2 class="title">${movie.title}</h2>
          <p class="description">${movie.description}</p>
          <p class="rating">Rating: ${movie.rating}</p>
        </div>
      `;
      movieList.appendChild(movieCard);
    });
  }
  
  // Function to add a new movie
  function addMovie(title, description, posterURL, rating) {
    movies.push({ title, description, posterURL, rating });
    renderMovies();
  }
  
  // Event listener for adding a new movie
  document.querySelector("#add-movie").addEventListener("click", () => {
    const title = prompt("Enter movie title:");
    const description = prompt("Enter movie description:");
    const posterURL = prompt("Enter poster URL:");
    const rating = parseFloat(prompt("Enter movie rating:"));
    
    if (title && description && posterURL && !isNaN(rating)) {
      addMovie(title, description, posterURL, rating);
    } else {
      alert("Invalid input. Please try again.");
    }
  });
  
  // Event listeners for filtering
  document.querySelector("#title-filter").addEventListener("input", filterMovies);
  document.querySelector("#rating-filter").addEventListener("input", filterMovies);
  
  function filterMovies() {
    const titleFilter = document.querySelector("#title-filter").value.toLowerCase();
    const ratingFilter = parseFloat(document.querySelector("#rating-filter").value);
    
    const filteredMovies = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(titleFilter);
      const ratingMatch = isNaN(ratingFilter) || movie.rating >= ratingFilter;
      
      return titleMatch && ratingMatch;
    });
  
    // Render the filtered movies
    renderFilteredMovies(filteredMovies);
  }
  
  function renderFilteredMovies(filteredMovies) {
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = '';
  
    filteredMovies.forEach((movie, index) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      movieCard.innerHTML = `
        <img class="poster" src="${movie.posterURL}" alt="Movie Poster">
        <div class="movie-details">
          <h2 class="title">${movie.title}</h2>
          <p class="description">${movie.description}</p>
          <p class="rating">Rating: ${movie.rating}</p>
        </div>
      `;
      movieList.appendChild(movieCard);
    });
  }
  
  // Initial rendering of movies
  renderMovies();
  