const dummyCover = 'resources/images/dummyimage1.jpg';
const str = '#BLOG';

const coverBlock = document.getElementById('cover');
coverBlock.setAttribute('style',
`background-image: url(${dummyCover})`,
);

const coverOverlay = document.createElement('div');
coverOverlay.classList.add('overlay');
coverBlock.appendChild(coverOverlay);

const coverTitle = document.createElement('h1');
coverTitle.innerHTML = str;
coverBlock.appendChild(coverTitle);