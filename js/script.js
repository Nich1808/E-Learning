// const sidebar = document.getElementById("mobile-sidebar");
// const searchIconResponsive = document.getElementById("search-bg");
// const bgBlack = document.getElementById("bgOver");
// function toggleSidebar() {
//   sidebar.style.left = "0px";
//   bgBlack.style.display = "block";
// }

// // function toggleCloseSidebar() {
// //   sidebar.style.left = "-280px";
// //   bgBlack.style.display = "none";
// // }
// function toggleSearch() {
//   searchIconResponsive.style.display = "block";
// }
// function closeBgOpa() {
//   searchIconResponsive.style.display = "none";
//   bgBlack.style.display = "none";
//   sidebar.style.left = "-280px";
// }
// function toggleCloseSidebar() {
//   const sidebar = document.getElementById('mobile-sidebar');
//   sidebar.style.left = '-280px';
// }

function safeGet(id) {
  return document.getElementById(id);
}

window.toggleSidebar = function () {
  const sidebar = safeGet("mobile-sidebar");
  const bgBlack = safeGet("bgOver");
  if (sidebar) sidebar.style.left = "0px";
  if (bgBlack) bgBlack.style.display = "block";
};

window.toggleCloseSidebar = function () {
  const sidebar = safeGet("mobile-sidebar");
  const bgBlack = safeGet("bgOver");
  if (sidebar) sidebar.style.left = "-280px";
  if (bgBlack) bgBlack.style.display = "none";
};

window.toggleSearch = function () {
  const searchIconResponsive = safeGet("search-bg");
  const bgBlack = safeGet("bgOver");
  if (searchIconResponsive) searchIconResponsive.style.display = "block";
  if (bgBlack) bgBlack.style.display = "block";
};

window.closeBgOpa = function () {
  const searchIconResponsive = safeGet("search-bg");
  const bgBlack = safeGet("bgOver");
  const sidebar = safeGet("mobile-sidebar");

  if (searchIconResponsive) searchIconResponsive.style.display = "none";
  if (bgBlack) bgBlack.style.display = "none";
  if (sidebar) sidebar.style.left = "-280px";
};
