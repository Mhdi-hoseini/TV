const header = document.querySelector('.header');
const drawer = document.querySelector('.drawer');
const search = document.querySelector('.search');
const drawerToggle = document.getElementById('drawer-toggle');
const searchToggle = document.getElementById('search-toggle');
const searchCloseBtn = document.querySelector('.search__close');
const logo = document.querySelector('.logo');
const submenusContainer = document.querySelectorAll('.has-submenu');
let drawerVisibility = false;

// ## Navigation

// show & hide drawer
const setDrawerVisibility = (v) => {
  if (v) {
    drawer.classList.toggle('showDrawer');
    header.style.filter = 'opacity(1)';
    drawer.insertBefore(logo, drawer.childNodes[0]);
    drawerVisibility = true;
  }
  if (!v) {
    drawer.classList.remove('showDrawer');
    header.removeAttribute('style');
    header.insertBefore(logo, drawer);
    drawerVisibility = false;
  }
};

// run input function if click outsdie of input ele or its childern
const outsideClickHandler = (el, toggle, e, fun, ...p) => {
  let isParent;
  let target = e.target;
  var paths = e.path || (e.composedPath && e.composedPath());
  for (const path of paths) if (path === el) isParent = true;
  if (target !== el && !isParent && target.id !== toggle) {
    fun(...p);
  }
};

// show submenu item when click on submenu container
for (const parent of submenusContainer) {
  parent.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = parent.querySelector('.submenu');
    const submenuToggle = parent.querySelector('i');
    const mediaQuery = window.matchMedia('(max-width:1200px)');
    if (mediaQuery.matches) {
      submenu.classList.toggle('show');
      submenuToggle.classList.toggle('rotate');
    } else {
      submenu.classList.remove('show');
      submenuToggle.classList.remove('rotate');
    }
  });
}

// show drawer when click on bar
drawerToggle.addEventListener('click', () => {
  setDrawerVisibility(true);
});

// hide drawer when click outsdie of it
document.addEventListener('click', (e) => {
  outsideClickHandler(drawer, 'drawer-toggle', e, setDrawerVisibility, false);
});

// ## search bar

searchToggle.addEventListener('click', () => {
  search.classList.toggle('show-searchbar');
});

searchCloseBtn.addEventListener('click', () => {
  search.classList.toggle('show-searchbar');
});

// ## Scroll window

//show & hide header when scroll
let preScroollpos = window.scrollY;
window.onscroll = () => {
  let currentScrollpos = window.scrollY;
  if (preScroollpos > currentScrollpos) {
    header.style.top = '0';
  } else if (!drawerVisibility) {
    header.style.top = '-100px';
  }
  preScroollpos = currentScrollpos;
};
