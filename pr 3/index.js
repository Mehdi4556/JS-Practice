let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);
  img.classList.add("pic");

  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;

  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);

  document.body.appendChild(card); // or add to a specific container
});
