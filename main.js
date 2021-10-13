let i = 0;
const images = [];
const time = 5000;

images[0] = 'img/oz-mule--212103Z 2F-worn-1-0-0-850-850_b 1.png';
images[1] = 'img/chasse-en-inde-ashtray--300352M 01-worn-2-0-0-850-850_b 1.png';
images[2] = 'img/avalon-iii-throw-blanket--102665M 59-worn-2-0-0-850-850_b 1.png';
images[3] = 'img/behapi-bracelet--064686CKAV-front-1-300-0-850-850_b.png'
images[4] = 'img/amarres-earrings-large-model--057021FL1G-front-1-300-0-850-850_b.png'
images[5] = 'img/as-de-coeur-earrings-small-model--081864CDJ7-front-1-300-0-850-850_b.png'

function slider() {
  document.slide.src = images[i];
  document.slide1.src = images[i+1];
  document.slide2.src = images[i+2]

  if (i < images.length - 1) {
    i += 1;
  } else {
    i = 0;
  }

  setTimeout('slider()', time);
}

window.onload = slider;
