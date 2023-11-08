window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((bookArr) => {
      console.log(bookArr);
      bookArr.forEach((book) => {
        if (book.img) {
          const row = document.getElementById("book-cards");

          const col = document.createElement("div");
          col.className = "col-12 col-sm-6 col-md-4 col-lg-3 gy-4";

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

          const cardPrice = document.createElement("p");
          cardPrice.className = "card-text";
          cardPrice.innerText = book.price + "€";

          const cardBtnContainer = document.createElement("div");
          cardBtnContainer.className = "d-flex justify-content-between";

          const cardBtnRemove = document.createElement("button");
          cardBtnRemove.className = "btn btn-outline-light";
          cardBtnRemove.innerText = "Scarta";

          const cardBtnBuy = document.createElement("button");
          cardBtnBuy.className = "btn btn-outline-light";
          cardBtnBuy.innerText = "Compra ora";

          card.appendChild(cardImg);
          card.appendChild(cardBody);

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardPrice);

          cardBtnContainer.appendChild(cardBtnRemove);
          cardBtnContainer.appendChild(cardBtnBuy);

          cardBody.appendChild(cardBtnContainer);

          col.appendChild(card);
          row.appendChild(col);

          cardBtnRemove.addEventListener("click", function (e) {
            e.target.closest(".col-12").remove();
          });

          cardBtnBuy.addEventListener("click", function (e) {
            console.log(book);

            const cartRender = document.getElementById("cart");
            const list = document.createElement("ul");
            list.className = "list-group";

            const cart = [];
            const cartInStorage = JSON.parse(localStorage.getItem("cart"));
            const bookObj = { title: book.title, price: book.price };

            const listElement = document.createElement("li");
            listElement.className = "list-group-item list-group-item-dark";
            listElement.innerText = `Titolo: ${book.title} Prezzo: ${book.price}`;

            list.appendChild(listElement);
            cartRender.appendChild(list);

            if (cartInStorage) {
              console.log(cartInStorage);
              cartInStorage.push(bookObj);
              localStorage.setItem("cart", JSON.stringify(cartInStorage));
            } else {
              cart.push(bookObj);
              console.log(cart);
              localStorage.setItem("cart", JSON.stringify(cart));
            }
          });
        }
      });
    })
    .catch((err) => console.log("C'è un errore:", err));
};
