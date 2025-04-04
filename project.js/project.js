const database = firebase.database();
const projectRef = database.ref("projects");
const projectList = document.getElementById("project-list");

projectRef.once("value", (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const project = childSnapshot.val();
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      ${project.image_url ? `<img src="${project.image_url}" alt="${project.title}" />` : ""}
    `;
    projectList.appendChild(projectCard);
  });
});
