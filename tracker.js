// ===== Data =====
const tasks = [
  { text: "Revise DOM selectors", done: false },
  { text: "Push Lab Sheet 01 to GitHub", done: true },
  { text: "Read MDN: Introduction to events", done: false }
];

// ===== Page elements =====
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const message = document.getElementById("message");
const list = document.getElementById("task-list");
const summary = document.getElementById("summary");

// TODO 1: build one <li> for a task (no innerHTML)
function createTaskItem(task, index) {
  const li = document.createElement("li");
  li.dataset.index = index;
  if (task.done) {
    li.classList.add("done");
  }

  const span = document.createElement("span");
  span.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "✕";

  li.append(span, deleteBtn);
  return li;
}

function render() {
  list.textContent = ""; // clears the old items

  // TODO 2: append every task
  tasks.forEach((task, i) => {
    list.append(createTaskItem(task, i));
  });

  // TODO 3: summary line
  const doneCount = tasks.filter((task) => task.done).length;
  const toGo = tasks.length - doneCount;
  summary.textContent = `${tasks.length} tasks | ${doneCount} done | ${toGo} to go`;
}

// TODO 4: form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();

  if (text === "") {
    message.textContent = "Please type a task first.";
    message.classList.add("error");
    return;
  }

  tasks.push({ text, done: false });
  input.value = "";
  message.classList.remove("error");
  message.textContent = "Task added.";
  render();
});

// TODO 5: one delegated click listener
list.addEventListener("click", (e) => {
  const item = e.target.closest("li");
  if (!item) return;
  const index = Number(item.dataset.index);

  if (e.target.closest(".delete-btn")) {
    tasks.splice(index, 1);
  } else {
    tasks[index].done = !tasks[index].done;
  }
  render();
});

render();
