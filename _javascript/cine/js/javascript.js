function recomendar() {
  let edad = document.getElementById("intEdad").value;
  let genero = document.getElementById("genero").value;
  let recomendacion = "";
  let comedia = [
    [
      "Back to the Future",
      "https://www.imdb.com/title/tt0088763/",
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg",
    ],
    [
      "The Truman Show",
      "https://www.imdb.com/title/tt0120382/",
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg",
    ],
    [
      "The Wolf of Wall Street",
      "https://www.imdb.com/title/tt0993846/",
      "https://images-na.ssl-images-amazon.com/images/I/91m2MB2lYFL.jpg",
    ],
  ];
  let drama = [
    [
      "Casablanca",
      "https://www.imdb.com/title/tt0034583/",
      "https://upload.wikimedia.org/wikipedia/en/4/47/CasablancaPoster.jpg",
    ],
    [
      "The Shawshank Redemption",
      "https://www.imdb.com/title/tt0111161/",
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@.jpg",
    ],
    [
      "Taxi Driver",
      "https://www.imdb.com/title/tt0075314/",
      "https://m.media-amazon.com/images/M/MV5BNDJlNGJiODgtMTU3Zi00M2VjLTg3YWQtODlmZTBhYjBmZjJkXkEyXkFqcGdeQXVyNzA4ODc3ODU@.jpg",
    ],
  ];
  let musical = [
    [
      "La La Land",
      "https://www.imdb.com/title/tt3783958/",
      "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@.jpg",
    ],
    [
      "Les Miserables",
      "https://www.imdb.com/title/tt1707386/",
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Les-miserables-movie-poster1.jpg",
    ],
    [
      "The Rocky Horror Picture Show",
      "https://www.imdb.com/title/tt0073629/",
      "https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@.jpg",
    ],
  ];
  let crimen = [
    ["⚠ No hay películas ATP ⚠", "#", "https://t3.ftcdn.net/jpg/01/59/17/98/360_F_159179817_F8joMJLDzGCjFSENf7ectW43ZJ7mlXvr.jpg"],
    [
      "El secreto de sus ojos",
      "https://www.imdb.com/title/tt1305806/",
      "https://m.media-amazon.com/images/M/MV5BZmIwMjJmNTctZGZhYi00NjA4LTljZWUtZmY4ZGZjNDUyMjE3XkEyXkFqcGdeQXVyNDI3NjU1NzQ@.jpg",
    ],
    [
      "The Godfather",
      "https://www.imdb.com/title/tt0068646/",
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg",
    ],
  ];

  if (edad > 0 && edad < 119) {
    switch (genero) {
      case "comedia":
        if (edad < 13) {
          recomendacion = comedia[0];
        } else if (edad < 16) {
          recomendacion = comedia[1];
        } else {
          recomendacion = comedia[2];
        }
        break;
      case "drama":
        if (edad < 13) {
          recomendacion = drama[0];
        } else if (edad < 16) {
          recomendacion = drama[1];
        } else {
          recomendacion = drama[2];
        }
        break;
      case "musical":
        if (edad < 13) {
          recomendacion = musical[0];
        } else if (edad < 16) {
          recomendacion = musical[1];
        } else {
          recomendacion = musical[2];
        }
        break;
      case "crimen":
        if (edad < 13) {
          recomendacion = crimen[0];
        } else if (edad < 16) {
          recomendacion = crimen[1];
        } else {
          recomendacion = crimen[2];
        }
    }
    document.getElementById(
      "recomendacion"
    ).innerHTML = `📽 Nuestra sugerencia es: \n<p class="arvo-bold">${recomendacion[0]}</p>\
    <a href="${recomendacion[1]}"><img src="${recomendacion[2]}" alt="${recomendacion[0]}" style="width:200px;"></a>`;
  } else {
    document.getElementById("recomendacion").innerHTML =
      "Nuestra sugerencia es...";
  }
}
