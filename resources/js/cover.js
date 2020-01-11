const dummyCover = 'resources/images/dummyimage1.jpg';
const str = '#BLOG';

let coverBackground = document.getElementById('cover');
coverBackground.setAttribute('style',
`background-image: url(${dummyCover})`,
);

let coverOverlay = document.createElement('div');
coverOverlay.classList.add('overlay');
coverBackground.appendChild(coverOverlay);

let coverTitle = document.createElement('h1');
coverTitle.innerHTML = str;
coverBackground.appendChild(coverTitle);