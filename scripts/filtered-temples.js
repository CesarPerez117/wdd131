document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "San Juan Puerto Rico",
    location: "San Juan, Puerto Rico",
    dedicated: "2023, January, 15",
    area: 6988,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/san-juan-puerto-rico-temple/san-juan-puerto-rico-temple-32386.jpg"
  },
  {
    templeName: "Cobán Guatemala",
    location: "Cobán, Guatemala",
    dedicated: "2024, June, 9",
    area: 8722,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
  },
  {
    templeName: "Halifax Nova Scotia",
    location: "Halifax, Canada",
    dedicated: "1999, November, 14",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/halifax-nova-scotia-temple/halifax-nova-scotia-temple-57120-main.jpg"
  },
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated) < 1900));
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated) > 2000));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
});

const templeContainer = document.querySelector("#temple-grid");


oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => !temple.dedication.includes("Utah")))
})

function createTempleCard(filteredTemples) { 
    document.querySelector(".temple-grid").innerHTML = "";
    filteredTemples.forEach(temple => {

        let card = document.createElement("section");
        card.classList.add("temple-card"); 

        let name = document.createElement("h3");
        name.textContent = temple.templeName;

        let location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        let dedication = document.createElement("p");
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        let area = document.createElement("p");
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        let img = document.createElement("img");
        img.src = temple.imageUrl; 
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy"; 

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);

        document.querySelector(".temple-grid").appendChild(card);
    });
}