const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});

const header = document.createElement("h1");
header.textContent = "Ukraine";

const abc = document.querySelector(".actions");
abc.append(header);

const btn2 = document.createElement("button");
btn2.textContent = "Button-2";

abc.prepend(btn2);

// header.remove();
btn2.remove();

console.log(abc.innerHTML);

const container = document.querySelector(".editor");
console.log(container.innerHTML);
console.log();
const text = document.querySelector(".qwerty");

text.innerHTML = 'Slava <span class="ddd"> Ukraini </span>!!!';
