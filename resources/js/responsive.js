/* Header */
var headerContainer = document.getElementById('header-container');

headerTogger = () => {
  headerContainer.classList.toggle('responsive');
};

window.onresize = () => {
  if (window.innerWidth >= 720) {
    headerContainer.classList.remove('responsive');
  }
};

/* Header */
var headerContainer = document.getElementById('header-container');

headerTogger = () => {
  let value = headerContainer.classList.value;
  if (value == '' || value == 'slide-up') {
    headerContainer.classList.remove('slide-up');
    headerContainer.classList.add('slide-down');
  } else {
    headerContainer.classList.remove('slide-down');
    headerContainer.classList.add('slide-up');
  }
};

window.onresize = () => {
  if (window.innerWidth >= 720) {
    headerContainer.classList.remove('slide-down');
    headerContainer.classList.remove('slide-up');
  }
};
