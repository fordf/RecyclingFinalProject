'use strict';

var fordImg = document.getElementsByClassName('toptwo')[0];
var irvImg = document.getElementsByClassName('toptwo')[1];
var mikeImg = document.getElementsByClassName('bottomtwo')[0];
var rachelImg = document.getElementsByClassName('bottomtwo')[1];
var srcs = [['../images/IMG_4074.JPG','../images/IMG_4073.JPG'],
            ['../images/IMG_4078.JPG','../images/IMG_4077.JPG'],
            ['../images/IMG_4080.JPG','../images/IMG_4079.JPG'],
            ['../images/IMG_4076.JPG','../images/IMG_4075.JPG']];

function handleEvent(event) {

  if (event.target === fordImg || event.target === irvImg) {
    irvImg.src = srcs[1][0];
    srcs[1].reverse();
    fordImg.src = srcs[0][0];
    srcs[0].reverse();

  } else if (event.target === mikeImg || event.target === rachelImg) {
    mikeImg.src = srcs[2][0];
    srcs[2].reverse();
    rachelImg.src = srcs[3][0];
    srcs[3].reverse();

  }
}

fordImg.addEventListener('mouseover', handleEvent);
irvImg.addEventListener('mouseover', handleEvent);
mikeImg.addEventListener('mouseover', handleEvent);
rachelImg.addEventListener('mouseover', handleEvent);
fordImg.addEventListener('mouseout', handleEvent);
irvImg.addEventListener('mouseout', handleEvent);
mikeImg.addEventListener('mouseout', handleEvent);
rachelImg.addEventListener('mouseout', handleEvent);
