let projects = {
  data: [
    {
      projectName: "X",
      category: "game",
      year: "2022",
      image: "assets/game_scrnshot.png",
    },
    {
      projectName: "YEPT Website",
      category: "ux",
      year: "2022",
      image: "assets/YEPT_logo.png",
    },
    {
      projectName: "X at the Airport",
      category: "video",
      year: "2022",
      image: "assets/YEPT_logo.png",
    },
    {
      projectName: "Tick",
      category: "video",
      year: "2021",
      image: "assets/tick_BTS.png",
    },
    {
      projectName: "Axil",
      category: "game",
      year: "2020",
      image: "assets/axil.jpg",
    },
    {
      projectName: "Superfoot",
      category: "video",
      year: "2019",
      image: "assets/superfoot_award.png",
    },
  ],
};

for (let i of projects.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //project name
  let name = document.createElement("h5");
  name.classList.add("project-name");
  name.innerText = i.projectName.toUpperCase();
  container.appendChild(name);
  //year
  let year = document.createElement("h6");
  year.innerText = i.year;
  container.appendChild(year);

  card.appendChild(container);
  document.getElementById("projects").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProject(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".project-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all projects
window.onload = () => {
  filterProject("all");
};
