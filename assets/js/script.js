const form_search = document.querySelector("#form_search");
const search = document.querySelector("#form-search");
const cancel = document.querySelector("#cancel");


search.addEventListener('focus', () =>{
  form_search.style.width = "12vw";
  search.style.width = "8vw";
  search.style.animation = "blink 1s infinite";
  cancel.style.display = "block";
})

cancel.addEventListener('click', () =>{
  search.blur();
})
