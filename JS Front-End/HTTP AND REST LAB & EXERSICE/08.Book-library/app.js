let API_URL = `http://localhost:3030/jsonstore/collections/books/`;
console.log(API_URL.length);
const loadBooksBtn = document.querySelector(`#loadBooks`);
const container = document.querySelector(`tbody`);
const [titleInput, authorInput] = Array.from(
  document.querySelectorAll(`#form > input`)
);
const submitBtn = document.querySelector(`#form > button`);
const bookTitle = document.querySelector(`#form > h3`);
let editId = null;
function attachEvents() {
  loadBooksBtn.addEventListener(`click`, loadBooks);
  submitBtn.addEventListener(`click`, submitInfo);
}
async function loadBooks() {
  container.innerHTML = ``;
  const responce = await (await fetch(API_URL)).json();
  let id = Object.keys(responce);
  Object.values(responce).forEach((x, i) => {
    const tr = createElemente(`tr`, 0, null, null, container);
    createElemente(`td`, 0, null, x.title, tr);
    createElemente(`td`, 0, null, x.author, tr);
    const td = createElemente(`td`, 0, null, null, tr);
    const editBtn = createElemente(`button`, 0, null, `Edit`, td);
    const deleteBtn = createElemente(`button`, 0, null, `Delete`, td);
    editBtn.addEventListener(`click`, () => {
      editId = id[i];
      bookTitle.textContent = `Edit FORM`;
      submitBtn.textContent = `Save`;
      titleInput.value = x.title;
      authorInput.value = x.author;
    });
    deleteBtn.addEventListener(`click`, async () => {
      await fetch(`${API_URL}${id[i]}`, { method: `DELETE` });
      loadBooks();
    });
  });
}
async function submitInfo() {
  if (titleInput.value === `` || authorInput.value === ``) {
    return;
  }
  const author = authorInput.value;
  const title = titleInput.value;
  let httpHeader = {
    method: `POST`,
    body: JSON.stringify({ title, author }),
  };
  if (bookTitle.textContent === `Edit FORM`) {
    httpHeader.method = `PUT`;
    await fetch(`${API_URL}${editId}`, httpHeader);
  } else {
    await fetch(`${API_URL}`, httpHeader);
  }
  loadBooks();
  if (bookTitle.textContent === `Edit FORM`) {
    bookTitle.textContent = `FORM`;
    submitBtn.textContent = `Submit`;
  }
  titleInput.value = ``;
  authorInput.value = ``;
}
function createElemente(type, classes, id, textContent, parent) {
  let element = document.createElement(type);
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.setAttribute(`id`, id);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
attachEvents();