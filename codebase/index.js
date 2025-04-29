const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menuIcon");
const navlist = document.getElementsByClassName("navlist");
const logoImg = document.getElementById("logoImg");

menuIcon.onclick = () => {
  menu.classList.toggle("close");
  navlist[0].classList.toggle("open");
};
html.onclick = (e) => {
  if (e.target !== menuIcon && e.target !== menu && e.target !== navlist[0]) {
    menu.classList.toggle("close");
    navlist[0].classList.remove("open");
  }
};