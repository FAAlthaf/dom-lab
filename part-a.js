console.log("DOM lab ready");

// Task A2: selecting elements
const title = document.getElementById("title");
const tagline = document.querySelector(".tagline");
const menuList = document.getElementById("menu-list");
const items = document.querySelectorAll(".item");
const message = document.getElementById("message");
console.log(title, tagline, menuList, items, message);

// Task A3: change the text
title.textContent = "Lagoon Café · Open now";
tagline.textContent = "Fresh food by the lagoon since 2010";
items.forEach((item, index) => {
  item.textContent = `${index + 1}. ${item.textContent}`;
});
message.innerHTML = "<strong>Welcome!</strong> Today's special is crab curry.";
const nameBox = document.getElementById("name-input");
console.log(nameBox.value); // try typing in the box, then read it in the Console

// Task A4: change the look
document.querySelector(".special").classList.add("highlight");
document.querySelector(".nav-link").classList.add("active");
nameBox.setAttribute("placeholder", "Type your first name");
const hoursHeading = document.getElementById("hours");
hoursHeading.style.color = "crimson";
items.forEach((item) => {
  console.log(item.textContent, item.classList.contains("special"));
});

// Task A5: creating and removing elements
const eggHoppers = document.createElement("li");
eggHoppers.textContent = "Egg hoppers";
eggHoppers.classList.add("item");
menuList.append(eggHoppers);

const drinks = ["Faluda", "King coconut", "Plain tea"];
const drinksHeading = document.createElement("h2");
drinksHeading.textContent = "Drinks";
const drinksList = document.createElement("ul");
drinks.forEach((drink) => {
  const li = document.createElement("li");
  li.textContent = drink;
  drinksList.append(li);
});
hoursHeading.before(drinksHeading, drinksList);

// Kottu has sold out (the third original item)
items[2].remove();

// Task A5.4 (challenge): opening hours table from data
const hours = [
  { day: "Monday to Friday", time: "8 am to 9 pm" },
  { day: "Saturday", time: "8 am to 10 pm" },
  { day: "Sunday", time: "Closed" }
];
const table = document.createElement("table");
hours.forEach((row) => {
  const tr = document.createElement("tr");
  const dayCell = document.createElement("td");
  const timeCell = document.createElement("td");
  dayCell.textContent = row.day;
  timeCell.textContent = row.time;
  tr.append(dayCell, timeCell);
  table.append(tr);
});
document.querySelector(".hours").after(table);
