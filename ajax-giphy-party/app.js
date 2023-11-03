console.log("Let's get this party started!");

const gifContainer = document.getElementById("gif-container");
const searchInput = document.getElementById("search-input");

document.getElementById("gif-search").addEventListener("submit", async function(e) {
  e.preventDefault();
  let searchTerm = searchInput.value;
  searchInput.value = "";
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  appendGif(response.data);
});

function appendGif(term) {
  let numResults = term.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let newCol = document.createElement("div");
    newCol.className = "col-md-4 col-12 mb-4";
    let newGif = document.createElement("img");
    newGif.src = term.data[randomIdx].images.original.url;
    newGif.className = "w-100 m-3";
    newCol.appendChild(newGif);
    gifContainer.appendChild(newCol);
  }
}

document.getElementById("clear-button").addEventListener("click", function() {
  gifContainer.innerHTML = "";
});
