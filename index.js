// Henry Garcia, Ihor Haidukov, Michael Perez-Ortiz, Saranya Muthaiyan, Ali Hussain
// LAB 316.1.1

// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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
    anchorEl.subLinks = el.subLinks;
    topMenuEl.appendChild(anchorEl);
});

// Henry Garcia, Mahad Siad, Naica Rousseau, Aleksandr Kozlov, Michael Perez-Ortiz
// R-ALAB 316.3.1

// Part 3: Creating the Submenu

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0%";

// Part 4: Adding Menu Interaction

const topMenuLinks = document.querySelectorAll("a");
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.matches("a")) {
    return;
  }
  console.log(event.target);
  event.target.classList.toggle("active");
  topMenuLinks.forEach((el) =>{
    if (el !== event.target) {
      el.classList.remove("active");
    }    
  });

  // Part 5: Adding Submenu Interaction

  if (event.target.subLinks && event.target.matches(".active")) {
    subMenuEl.style.top = "100%";
    buildSubmenu(event.target.subLinks);
  } else {
    if (!event.target.subLinks) {
      mainEl.innerHTML = "<h1>About</h1>";
    }
    subMenuEl.style.top = "0%";
  }

});


function buildSubmenu(subLinks) {
  while (subMenuEl.firstChild) {
    subMenuEl.removeChild(subMenuEl.firstChild);
  }
  subLinks.forEach((el) => {
    const anchorEl = document.createElement("a");
    anchorEl.setAttribute("href", el.href);
    anchorEl.textContent = el.text;
    subMenuEl.appendChild(anchorEl);
  });
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.matches("a")) {
    return;
  }
  console.log(event.target);
  subMenuEl.style.top = "0%";
  topMenuLinks.forEach((el) =>{
    el.classList.remove("active"); 
  });
  mainEl.innerHTML = `<h1>${event.target.textContent.toUpperCase()}</h1>`;
});