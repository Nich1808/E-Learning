const sidebar = document.getElementById("mobile-sidebar");
const searchIconResponsive = document.getElementById("search-bg");
const bgBlack = document.getElementById("bgOver");
function toggleSidebar() {
  sidebar.style.left = "0px";
  bgBlack.style.display = "block";
}

function toggleCloseSidebar() {
  sidebar.style.left = "-280px";
  bgBlack.style.display = "none";
}
function toggleSearch() {
  searchIconResponsive.style.display = "block";
}
function closeBgOpa() {
  searchIconResponsive.style.display = "none";
  bgBlack.style.display = "none";
  sidebar.style.left = "-280px";
}
