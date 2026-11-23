// ===== Selections =====
const greetBtn = document.getElementById("greet-btn");
const themeBtn = document.getElementById("theme-btn");
const title = document.getElementById("title");
const message = document.getElementById("message");
const nameBox = document.getElementById("name-input");
const preview = document.getElementById("preview");
const counter = document.getElementById("counter");
const menuList = document.getElementById("menu-list");
const navLinks = document.querySelectorAll(".nav-link");

// Task B1: click events
greetBtn.addEventListener("click", () => {
  message.textContent = `Hello! The time is ${new Date().toLocaleTimeString()}`;
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
});

let titleClicks = 0;
title.addEventListener("click", () => {
  titleClicks++;
  message.textContent = `Title clicked ${titleClicks} times`;
});

// Task B2: input and mouse events
nameBox.addEventListener("input", () => {
  const typed = nameBox.value;
  const name = typed.trim();
  preview.textContent = name ? `Hello, ${name}!` : "";
  counter.textContent = `${typed.length} / 20`;
  counter.classList.toggle("error", typed.length > 20);
});

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("mouseover", () => item.classList.add("highlight"));
  item.addEventListener("mouseout", () => item.classList.remove("highlight"));
});

// Task B3: the event object
nameBox.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    message.textContent = `Saved name: ${nameBox.value}`;
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
    message.textContent = `You chose ${e.target.textContent}`;
  });
});

// Task B4: event delegation
menuList.addEventListener("click", (e) => {
  console.log(e.target, e.currentTarget);
  const item = e.target.closest("li");
  if (!item) return;
  item.classList.toggle("done");
});

// Task B4.4 (challenge): double-click to delete
menuList.addEventListener("dblclick", (e) => {
  const item = e.target.closest("li");
  if (!item) return;
  item.remove();
});
