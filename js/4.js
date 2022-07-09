const list = document.querySelector(".list");
// створюємо новий масив
const newTechnologies = ["React", "TypeScript", "Node.js"];

const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforebegin", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
