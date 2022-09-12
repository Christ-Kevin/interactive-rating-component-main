// init and declare form buttons and container elements
const formEl = document.querySelector("form");
const submitBtn = document.querySelector(".submit");
const cardEl = document.querySelector(".card");
const numbers = [...document.querySelectorAll(".number")];
let selected; // this keeps track of which button is pressed

let formSubmitted = false; // global variable check if form is submitted

const submitForm = () => {
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (selected === undefined) {
      alert("Please select a rating");
    }

    else {
      cardEl.innerHTML = `
              <header class="header-rating">
            <figure>
                <img src="images/illustration-thank-you.svg" alt="illustration-thank-you" width="162" height="108">
                <figcaption>You selected <span class="rating">
                        ${selected}
                    </span> out of 5</figcaption>
            </figure>
        </header>
        <article>
        <h1>
            Thank you!
        </h1>
        <p class="acknowledgments">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
            touch!
        </p>
        </article>   
    `;
      cardEl.classList.add("result-card");   // add new class to new container
    }
  })
}

/*const uniqSubmit = () => {   // fancy way to Submit only once
  if (!formSubmitted) {
    submitForm();
  }
  formSubmitted = true;
  alert("you already submitted a rating");
  cardEl.innerHTML = `<p class="bye">You already submitted a rating. See you soon</p>`;
}*/

const selectedRating = () => { 
  numbers.forEach((number) => {
    number?.classList?.remove("visited")
  })
}

// remove visited class to all buttons with the visited class 
// add visited class to currentTarget 
const init = () => {
  numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
      selected = event.currentTarget.textContent;
      selectedRating();      // remove visited
      /*uniqSubmit(); */
      submitForm();
      event.currentTarget.classList.add("visited"); 
    });
  });
}

init();