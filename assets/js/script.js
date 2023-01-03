const form_search = document.querySelector("#form_search");
const search = document.querySelector("#form-search");
const cancel = document.querySelector("#cancel");


search.addEventListener('focus', () =>{
  form_search.style.width = "12vw";
  form_search.style.padding = "0 6.7vw";
  form_search.style.gap = "0.2vw"
  search.style.width = "8vw";
  search.style.animation = "blink 1s infinite";
  cancel.style.display = "flex";
})

search.addEventListener('input', () => {
  search.style.animation = "none";
  search.style.textDecoration = "none";
})

search.addEventListener('blur', () => {
  form_search.style.width = "5vw";
  form_search.style.padding = "0"
  search.style.textDecoration = 'underline'
  search.style.width = "1vw";
  search.style.animation = "none";
  search.value = '    ';
  cancel.style.display = "none";
})

cancel.addEventListener('click', () =>{
  search.blur(); 
  
})
