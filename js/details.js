const projects = {
    Todo: {
        title: "Todo Web Application",
        description: "This to-do management site is designed to help users efficiently organize and manage their tasks. It features a user-friendly interface where users can create, view, and manage their to-do items.",
        techstack: ["Bootstrap: For design and user interface.",
        " JavaScript: For client-side logic.",
        "HTML: For page structure.",
        "Django: As the server-side framework."],
        images: [
            "img/Todo.png",
            "img/todo2.png",
        ],
        features: ["Task Display and Filtering:Tasks are displayed in a card format with details such as title, description, and date. Users can filter tasks based on their status: active, completed, or all, using buttons provided at the top of the task list.",
        "Task Completion and Removal:Users can mark tasks as completed by clicking a Complete button on each task card. Users can also remove tasks using the Remove button, which deletes the task from the list.",
        "Dynamic Updates: Use of JavaScript to handle task completion without reloading the page. AJAX requests are used to send completion data to the server, and the task list is updated dynamically to reflect changes immediately. Completed tasks are visually distinguished and the Complete button is removed to indicate the change.",
        "Server-Side Integration:Integration with a Django backend to handle data storage and management. Tasks are fetched, updated, and removed using Django views and URL routes, ensuring seamless interaction between the frontend and backend."],
        GitHub: "https://github.com/ankundah/ToDo",
    },
    Recipe: {
        title: "Recipe Web Application",
        description: "Website with all your recipe needs, you can search for specific recipes by ingredients and create your own. This is your very own recipe book if you will.",
        techstack: ["Bootstrap: For design and user interface.",
        "JavaScript: For client-side logic.",
        "HTML: For page structure.",
        "Django: As the server-side framework.",
        "Python: For backend logic.",
        "WSO2 Identity Server: For User Authentication"],
        images: [
            "img/Landing.png",
            "img/Login.png",
            "img/Create.png",
            "img/Fav.png",
            "img/results.png",
            "img/Edit.png"],
        features: ["Create Recipes: Users can create their own recipes by inputting ingredients, instructions, and other details.",
        "Save Recipes: Save your favorite recipes for easy access later.",
        "Search by Ingredients: Use the MealDB API to search for recipes based on the ingredients you have on hand.",
        "CRUD API: The app includes a CRUD (Create, Read, Update, Delete) API for managing recipes in the backend.",
        "Identity Server: WSO2 Identity Server is integrated into the application to facilitate secure user login and authentication as well as user management."],
        GitHub: "https://github.com/ankundah/recipe-app",
    }
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const projectId = getQueryParam('project');

let slideIndex = 0; 


if (projectId && projects[projectId]) {
    const project = projects[projectId];
    const projectDetailsDiv = document.getElementById('project-details');
    const featuresList = project.features.map(feature => `<li>${feature}</li>`).join('');
    const techstackList = project.techstack.map(tech => `<li>${tech}</li>`).join('');
    const slides = project.images.map(image => `
        <div class="slides">
            <img src="${image}" alt="${project.title}">
        </div>`).join('');

    projectDetailsDiv.innerHTML = `
       <center> <h1>${project.title}</h1></center>
        <div class="slideshow-container">
           ${slides}
           <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
           <a class="next" onclick="changeSlide(1)">&#10095;</a>
       </div>
        <p><strong>Description: </strong>${project.description}</p>
        <p><strong>Tech stack: </strong></p>
        <ul>${techstackList}</ul>
        <p><strong>Features:</strong></p>
        <ul>${featuresList}</ul>
      <center>  <a href="${project.GitHub}" target="_blank">Visit GitHub Repo  <i class="fa fa-external-link" aria-hidden="true"></i></a></center>
    `;

    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++; 
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }
    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 2000); 
}
}
 else {
    document.getElementById('project-details').innerHTML = "<p>Oops I haven't done that one yet.</p>";
}