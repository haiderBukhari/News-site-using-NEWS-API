let crimes = document.querySelector(".crime");
let hack = document.querySelector(".hack");
let crypto = document.querySelector(".crypto");
let movies = document.querySelector(".movies");

// let abovediv = document.querySelector('.above');
let i = 0;
let j = 0;
let belowdiv = document.querySelector(".down");
function request(url) {
    console.log(url);
    j = 0;
  i = 0;
  belowdiv.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setInterval(() => {
        if (
          data.articles[i].urlToImage == null) {
          i++;
        } else {
          if (j == 16) {
            return;
          }
          j++;
          let html = `<div class="item1">
            <img src="${data.articles[i].urlToImage}" alt="" srcset="" />
            <div class="items">
              <h2 class="img-heading">
                ${data.articles[i].title}
              </h2>
              <p class="img-para">
                ${data.articles[i].description}
              </p>
              <p class="data">${data.articles[i].publishedAt.replace("T", " ")}</p>
              <p class="alp">
              <div class="btns">
                <button class="first">${data.articles[i].source.name}</button>
                <button class="second"> <a href = ${data.articles[i].url} target = "blank"> Read article <i class="fa-solid fa-arrow-right fa-1x"> </i></a></button>
              </div>
            </p>
            </div>
          </div>`;
          belowdiv.insertAdjacentHTML("beforeend", html);
          i++;
        } // console.log(data.articles[i]);
      }, 200);
    })
    .catch((error) => console.log("error"));
}
function funct(crime){
    crime.classList.add('color');
    crime.classList.remove('blink');
}
function funct_remove(crime){
    if(crime.classList.contains('color')){
        crime.classList.remove('color')
        crime.classList.add('blink')
    }
}
request(
  "https://newsapi.org/v2/everything?q=crimes&language=en&apiKey=95422f3ee6e0478caeb6cbd3cfb7e408"
);
crimes.addEventListener("click", () => {
    funct(crimes)
    funct_remove(hack)
    funct_remove(crypto)
    funct_remove(movies)
    belowdiv.innerHTML = "";
  request(
    "https://newsapi.org/v2/everything?q=crimes&language=en&apiKey=95422f3ee6e0478caeb6cbd3cfb7e408"
  );
});

hack.addEventListener("click", () => {
    funct(hack)
    funct_remove(crimes)
    funct_remove(crypto)
    funct_remove(movies)
    belowdiv.innerHTML = "";
  request(
    "https://newsapi.org/v2/everything?q=hacking&language=en&apiKey=95422f3ee6e0478caeb6cbd3cfb7e408"
  );
});

crypto.addEventListener("click", () => {
    funct(crypto)
    funct_remove(crimes)
    funct_remove(hack)
    funct_remove(movies)
    belowdiv.innerHTML = "";
  request(
    "https://newsapi.org/v2/everything?q=crypto&language=en&apiKey=95422f3ee6e0478caeb6cbd3cfb7e408"
  );
});

movies.addEventListener("click", () => {
  belowdiv.innerHTML = "";
  funct(movies)
  funct_remove(crimes)
  funct_remove(hack)
  funct_remove(crypto)
  request(
    "https://newsapi.org/v2/everything?q=movies&language=en&apiKey=95422f3ee6e0478caeb6cbd3cfb7e408"
  );
});
