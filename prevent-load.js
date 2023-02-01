const main = document.querySelector("main");
const links = document.querySelectorAll(".primaryNavigation__navigationItem a");
const pages = ['page1.html', 'page2.html', 'page3.html'];

links.forEach((link, index) => {
  link.addEventListener("click", e => {
    e.preventDefault();
    fetch(pages[index])
      .then(res => res.text())
      .then(html => {
        main.innerHTML = html;
      });
  });
});