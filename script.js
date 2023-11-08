window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((bookArr) => {
      console.log(bookArr);
      bookArr.forEach((book) => {
        if (book.img) {
          const row = document.getElementById("book-cards");

          const col = document.createElement("div");
          col.className = "col-12 col-sm-6 col-md-4 col-lg-3 gy-3";

          const card = document.createElement("div");
          card.className = "card h-100 text-bg-dark border-light";

          const cardImg = document.createElement("img");
          cardImg.className = "card-img-top h-100 object-fit-cover";
          cardImg.src = book.img;

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";

          const cardTitle = document.createElement("h6");
          cardTitle.className = "card-title text-truncate";
          cardTitle.innerText = book.title;

          const cardText = document.createElement("p");
          cardText.className = "card-text text-capitalize";
          cardText.innerText = book.category;

          const cardBtn = document.createElement("button");
          cardBtn.className = "btn btn-outline-light";
          cardBtn.innerText = "Scarta";

          card.appendChild(cardImg);
          card.appendChild(cardBody);

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          cardBody.appendChild(cardBtn);

          col.appendChild(card);
          row.appendChild(col);

          cardBtn.addEventListener("click", function (e) {
            e.target.closest(".col-12").remove();
          });
        }
      });
    })
    .catch((err) => console.log("C'è un errore:", err));
};
