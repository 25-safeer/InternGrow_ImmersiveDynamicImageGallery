const searchInput = document.getElementById("searchInput");
const gallery = document.getElementById("gallery");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeBtn");

const buttons = document.querySelectorAll(".categories button");
let currentCategory = "all";

const images = [
    {
        title: "Mountain",
        category: "Nature",
        image: "assets/nature1.jpg"
    },
    {
        title: "Forest",
        category: "Nature",
        image: "assets/nature2.jpg"
    },
    {
        title: "Lake",
        category: "Nature",
        image: "assets/nature3.jpg"
    },
    {
        title: "Waterfall",
        category: "Nature",
        image: "assets/nature4.jpg"
    },
    {
        title: "Bridge",
        category: "Architecture",
        image: "assets/architecture1.jpg"
    },
    {
        title: "Building",
        category: "Architecture",
        image: "assets/architecture2.jpg"
    },
    {
        title: "Tower",
        category: "Architecture",
        image: "assets/architecture3.jpg"
    },
    {
        title: "Mosque",
        category: "Architecture",
        image: "assets/architecture4.jpg"
    },
    {
        title: "Laptop",
        category: "Tech",
        image: "assets/tech1.jpg"
    },
    {
        title: "Keyboard",
        category: "Tech",
        image: "assets/tech2.jpg"
    },
    {
        title: "Smartphone",
        category: "Tech",
        image: "assets/tech3.jpg"
    },
    {
        title: "Headphones",
        category: "Tech",
        image: "assets/tech4.jpg"
    }
]

function displayImages(imageArray) {

    gallery.innerHTML = "";
    
    if (imageArray.length === 0) {
        gallery.innerHTML = `<h2 class="no-result">No Images Found</h2>`;
        return;
    }

    imageArray.forEach(function (image) {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${image.image}" alt="${image.title}">
            <h3>${image.title}</h3>
        `;

        // Open modal when image is clicked
        card.querySelector("img").addEventListener("click", function () {
            modal.style.display = "flex";
            modalImage.src = image.image;
        });

        gallery.appendChild(card);

    });

}
displayImages(images);



closeBtn.addEventListener("click", function () {

    modal.style.display = "none";

});

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.style.display = "none";

    }

});

function filterImages() {

    const searchText = searchInput.value.toLowerCase();

    const filteredImages = images.filter(function (image) {

        const matchCategory =
            currentCategory === "all" ||
            image.category === currentCategory;

        const matchSearch =
            image.title.toLowerCase().includes(searchText);

        return matchCategory && matchSearch;

    });

    displayImages(filteredImages);

}

searchInput.addEventListener("input", function () {

    filterImages();

});

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        buttons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentCategory = button.dataset.category;

        filterImages();

    });

});