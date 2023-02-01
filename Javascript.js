const main = document.querySelector("main");
const links = document.querySelectorAll(".primaryNavigation__navigationItem a");
const pages = ['page1.html', 'page2.html', 'page3.html'];

links.forEach((link, index) => {
  link.addEventListener("click", e => {
    e.preventDefault();
    fetch(pages[index])
      .then(response => response.text())
      .then(data => {
        main.innerHTML = data;
      });
  });
});