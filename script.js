function toggleMenu(isSubMenu=false) {
  const menu = document.querySelector('.menu');
  if(isSubMenu && !menu.classList.contains("show")) return
  
  menu.classList.toggle("show");
}
