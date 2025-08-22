let btn = document.querySelector(".menu");
let nav = document.querySelector("#menu-usr");
let head = document.querySelector("header");
let st = document.getElementsByTagName('h2')[0];


/* Jeito prático mas errado */
document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener('click', function() {
    
    nav.classList.toggle('active');
    
    if (head.style.backgroundImage) {
      head.style.backgroundImage = "";
      head.style.backgroundRepeat = "";
      head.style.backgroundSize = "";
      btn.style.color = "#000000";
      btn.style.padding = "";
      st.style.textAlign = "center";
      st.style.fontWeight = "bold";
      st.style.color = "#ffffff";
      st.style.textDecoration = "underline 1px";
      st.style.opacity = "1";
      st.style.visibility = "visible";
    } else {
      head.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaqWijPa1LntvkEbzxZ07AWs638o7-NXr0v88GSUXsg&s')";
      btn.style.color = "#ffffff";
      head.style.backgroundRepeat = "no-repeat";
      head.style.backgroundSize = "cover";
      btn.style.padding = "20% 0 0 8px;";
      st.style.textAlign = "";
      st.style.fontWeight = "";
      st.style.color = "";
      st.style.textDecoration = "";
      st.style.opacity = "0";
      st.style.visibility = "hidden";
    };
  });
});