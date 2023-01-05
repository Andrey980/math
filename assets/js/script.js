const form_search = document.querySelector("#form_search");
const search = document.querySelector("#form-search");
const cancel = document.querySelector("#cancel");
const theme = document.querySelector("#theme");

const references = document.querySelector("#references");
const guides = document.querySelector("#guides");
const math_plus = document.querySelector("#math-plus")

const ref_nav = document.querySelector("#nav-references")

const ul_nav = document.querySelectorAll("header>nav>ul>li>ul");

references.addEventListener('mouseover', (e)=>{
  ul_nav[0].style.display = "block"
})

references.addEventListener('mouseout', ()=>{
  ul_nav[0].style.display = "none"
})

guides.addEventListener('mouseover', () => {
  ul_nav[1].style.display = "block"
})

guides.addEventListener('mouseleave', () => {
  ul_nav[1].style.display = "none"
})

math_plus.addEventListener('mouseover', () =>{
  ul_nav[2].style.display = "block"
})

math_plus.addEventListener('mouseleave', () =>{
  ul_nav[2].style.display = "none"
})


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

