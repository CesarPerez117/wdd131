function recallPreference() {
  console.log("Food preference recall function.");
}

const foodPlaces = [
  {
    name: "La Esquina GastroBar",
    protein: ["pork", "beef"],
    prep: ["grilled", "fried"],
    style: "street",
    sides: ["fries", "plantains"],
    image: "images/la-esquina.webp"
  },
  {
    name: "A Punto de Nieve",
    protein: ["chicken"],
    prep: ["fried"],
    style: "local",
    sides: ["rice", "salad"],
    image: "images/punto-nieve-food.webp"
  },
  {
    name: "Lorenzo's",
    protein: ["beef", "chicken"],
    prep: ["cooked"],
    style: "local",
    sides: ["rice", "plantains"],
    image: "images/lorenzo-food.webp"
  },
  {
    name: "Odalis Grill",
    protein: ["pork", "beef"],
    prep: ["grilled", "fried"],
    style: "street",
    sides: ["fries"],
    image: "images/odalis-grill.webp"
  },
  {
    name: "Aguas Blancas",
    protein: ["chicken", "none"],
    prep: ["grilled", "cooked"],
    style: "local",
    sides: ["salad", "rice"],
    image: "images/aguas-blancas-food.webp"
  },
  {
    name: "Cafeteria La Via",
    protein: ["pork", "chicken"],
    prep: ["fried"],
    style: "street",
    sides: ["plantains", "fries"],
    image: "images/cafeteria-la-via.webp"
  },
  {
    name: "Moncarlo Restaurant",
    protein: ["beef", "pork", "chicken"],
    prep: ["grilled", "cooked"],
    style: "local",
    sides: ["rice", "salad", "plantains"],
    image: "images/moncarlo-rest.webp"
  }
];

document.getElementById("food-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // if I run the recall here, I will be able to make it work.
  recallPreference();

  const style = document.querySelector("input[name='style']:checked")?.value; // this validates better if the user selected an option or not.
  const protein = document.getElementById("protein").value;
  const prep = document.querySelector("input[name='prep']:checked")?.value;
  const sides = Array.from(document.querySelectorAll("input[name='sides']:checked")).map(input => input.value);

  const resultBox = document.getElementById("result");

  if (!style || !protein || !prep) { // this requires spaces in the form were is required to fill.
    resultBox.innerHTML = `<p>Please fill out all required fields.</p>`;
    return;
  }

  const matches = foodPlaces.filter(place =>
    place.style === style &&
    place.protein.includes(protein) &&
    place.prep.includes(prep) &&
    sides.some(side => place.sides.includes(side))
  );

  if (matches.length > 0) {
    const match = matches[Math.floor(Math.random() * matches.length)];
    resultBox.innerHTML = `
        <div class="food-result">
            <img src="${match.image}" alt="${match.name}" loading="lazy">
            <p><strong>Try:</strong> ${match.name}</p>
        </div>`;
} else {
  resultBox.innerHTML = `<p>Sorry, we couldn’t find a match. Try adjusting your choices.</p>`;
}
});
