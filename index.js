// Henry Garcia, Ihor Haidukov, Michael Perez-Ortiz, Saranya Muthaiyan, Ali Hussain
// LAB 316.1.1

// Menu data structure
const menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Part 1: Getting Started

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons

menuLinks.forEach((el) => {
    const anchorEl = document.createElement("a");
    // anchorEl.href = el.href;
    anchorEl.setAttribute("href", el.href);
    anchorEl.textContent = el.text;
    topMenuEl.appendChild(anchorEl);
});