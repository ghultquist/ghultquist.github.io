let projects = {
  data: [
    {
      projectName: "X",
      category: "game",
      year: "2022",
      role: "Programmer, Artist, & Writer",
      tools: "Godot (game engine), Aseprite (pixel art software)",
      link: "https://gbuggy.itch.io/untitled-thesis",
      description: "A game about loneliness created for my master's thesis.",
      long_desc: "",
      image: "assets/game_scrnshot169.png",
      page: "x.html",
    },
    {
      projectName: "YEPT Website",
      category: "ux",
      year: "2022",
      role: "UX Designer & UI Developer",
      tools: "Squarespace, Figma, Premiere Pro (for tutorials)",
      link: "https://www.youthenvironmentalpressteam.org/",
      description: "A website created for Youth Environmental Press Team.",
      long_desc: "",
      image: "assets/yept.png",
      page: "yept.html",
    },
    {
      projectName: "X at the Airport",
      category: "video",
      year: "2022",
      role: "Artist & Animator",
      tools: "After Effects, Illustrator, Clip Studio Paint",
      link: "https://www.youtube.com/watch?v=oYdqPIslSvs",
      description: "A short animation about the airport.",
      long_desc: "",
      image: "assets/x_airport.png",
      page: "axil.html",
    },
    {
      projectName: "YouTour",
      category: "ux",
      year: "2021",
      role: "UX Designer",
      tools: "Figma",
      link: "https://www.figma.com/proto/IoBZMufKKOttcPfXY0TKXI/UTour-(Round3)-Design?node-id=125%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=125%3A2&show-proto-sidebar=1",
      description: "An app prototype about being a tourist in your own town.",
      long_desc: "",
      image: "assets/youtour.png",
      page: "youtour.html",
    },
    {
      projectName: "Tick",
      category: "video",
      year: "2021",
      role: "Special Effects Artist",
      tools: "Makeup & Props (variety of fake blood, etc.)",
      link: "https://www.youtube.com/watch?v=qb5VQy7VpfE",
      description: "A short experimental horror film.",
      long_desc: "",
      image: "assets/tick_BTS169.png",
      page: "tick.html"
    },
    {
      projectName: "Axil",
      category: "game",
      year: "2020",
      role: "Programmer",
      tools: "Godot (game engine)",
      link: "https://gbuggy.itch.io/axil",
      description: "A video game about gardening... in space!",
      long_desc: "As a part of the CS490 Software Production Studio, I worked on a multidisciplinary team of 6 students tasked with creating an original video game. I learned how to use Godot game engine; taught and learned from my group mates in the ways of art, programming, and production; researched licensing; and collaborated on ideas to make Axil, an extraterrestrial plant growing simulation game.",
      image: "assets/axil.jpg",
    },
    {
      projectName: "Queer Chocolatier",
      category: "video",
      year: "2020",
      role: "Director & Editor",
      tools: "Premiere Pro",
      link: "https://www.youtube.com/watch?v=bikBnXSYpE8",
      description: "A short documentary about Muncie's local LGBTQ+ sweets shop.",
      long_desc: "This is a production that I led during my time as president of the university film group, Fringed. It was an honor and an amazing time to get to work with the head queer herself, Morgan Roddy.",
      image: "assets/queerchocolatier.png",
    },
    {
      projectName: "Home Sweet Home",
      category: "video",
      year: "2020",
      role: "Producer, Director, & Writer",
      tools: "Premiere Pro",
      link: "https://www.youtube.com/watch?v=FDqSrBoLUdg",
      description: "A short horror film about agoraphobia.",
      long_desc: "A short film about a person suffering from agoraphobia who refuses to leave their house until strange things start happening and paranoia overcomes them. This is a production by the university film group, Fringed. This film was featured in Ball State's 2020 Frog Baby Film Festival. As president I worked with my fellow film club member, Aaron Dwyer, to create this concept, write this script, and direct this short horror flick!",
      image: "assets/hsh.png",
    },
    {
      projectName: "Superfoot",
      category: "video",
      year: "2019",
      role: "Special Effects Artist & Slate Operator",
      tools: "Makeup & Props (variety of fake blood, etc.)",
      link: "https://www.youtube.com/watch?v=7wtbBLzihB8",
      description: "A short film about neighbors.",
      long_desc: "A short film by my friend, Ian Mitchell. With loud parties happening each weekend across the street, a pair of roommates attempt to make a compromise with their neighbor. This film won Best Alternative Film at Ball State's 2019 Frog Baby Film Festival.",
      image: "assets/superfoot_award_169.png",
    },
    {
      projectName: "DJ Jannell",
      category: "video",
      year: "2019",
      role: "Audio & Editor",
      tools: "Premiere Pro",
      link: "https://www.youtube.com/watch?v=WOpBoOz63uY",
      description: "A short documentary featuring Muncie's DJ Jannell.",
      long_desc: "A short documentary featuring DJ Jannell, a DJ in Muncie! This is a production by the university film group, Fringed. This was one of my first film projects while in university and my first time interviewing someone for a documentary. It was really interesting to get to sit down with and have a conversation someone as down-to-Earth and raw as Jannell Summers.",
      image: "assets/dj-jannell.png",
    },
    {
      projectName: "Cornfed Derby Dames",
      category: "video",
      year: "2019",
      role: "Director, Editor, & Camera Operator",
      tools: "Premiere Pro",
      link: "https://www.youtube.com/watch?v=94_1P4VieZc",
      description: "A short documentary about Muncie's roller derby team, the Cornfed Derby Dames.",
      long_desc: "This is a production by the university film group, Fringed. This film was featured in Ball State's 2019 Frog Baby Film Festival. Having started filming in the fall of 2017, this was the first production I worked on while at university. ",
      image: "assets/cornfed.png",
    },
  ],
};

//create information overlay
var openMoreInfo = function(value){
  alert(event.target.innerHTML);
  //let card = document.createElement("div");
  //document.getElementById("overlay").style.display = "block";
}

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
  //description
  let description = document.createElement("h6");
  description.innerText = i.description;
  container.appendChild(description);

  card.appendChild(container);
  document.getElementById("projects").appendChild(card);

  //click project name
  name.addEventListener('click', openMoreInfo);
  card.addEventListener('click', openMoreInfo);
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
