let i = 0; // Start point
let images = [];
let time = 3000;

// Image List
images[0] = 'img/oz-mule--212103Z 2F-worn-1-0-0-850-850_b 1.png';
images[1] = 'img/chasse-en-inde-ashtray--300352M 01-worn-2-0-0-850-850_b 1.png';
images[2] = 'img/avalon-iii-throw-blanket--102665M 59-worn-2-0-0-850-850_b 1.png';


// Change Image
function slider(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("slider()", time);
}

window.onload = slider;