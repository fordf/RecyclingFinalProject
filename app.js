/* eslint-disable */

var form = document.getElementById('inputbox');
var mainDiv = document.getElementById('main');

var boxes = {
  butter: 'Recycle.',
  cereal: 'Recycle. Liners go in garbage.',
  cracker:'Recycle. Liners go in garbage.',
  liner: 'Garbage',
  'ice cream': 'Recycle.',
  detergent: 'Recycle.',
  soup: 'Recycle.',
  milk: 'Recycle.',
  juice: 'Recycle',
  egg: {
    clean: 'Recycle or compost.',
    soiled: 'Compost.'
  },
  pizza: 'Compost',
  tissue: 'Recycle. Try to remove plastic liner, but not necessary.'
};

var cardboard = {
  greasy: 'Compost (Food & Yard Waste cart), can\'t be recycled.',
  waxed: 'Compost (Food & Yard Waste cart), can\'t be recycled.',
  corrugated: 'Recycle.',
  wet: 'Compost (Food & Yard Waste cart).',
  foamcore: 'Garbage'
};

var lid = {
  'Diameter larger than 3"': 'Recycle.',
  'Diameter smaller than 3"': 'Garbage.'
};

var dataList = {
  paper: {
    cup: {
      'plastic-coated': 'Recycle. Garbage if dirty. Unless cup says it\'s compostable.',
      uncoated: 'Compost.'
    },
    plate: {
      'plastic-coated': 'Recycle if clean. Garbage if dirty. Unless cup says it\'s compostable.',
      uncoated: 'Compost.'
    },
    bag: {
      clean: 'recycle',
      dirty: 'compost'
    },
    towel: {
      unused: 'Recycle',
      'food-soiled': 'Compost.',
      'chemical/body-fluid soiled': 'Garbage. Bagged preferably.',
    },
    napkin: {
      unused: 'Recycle',
      'food-soiled': 'Compost.',
      'chemical/body-fluid soiled': 'Garbage. Bagged preferably.',
    }
  },
  cardboard: cardboard,
  box: boxes,
  carton: boxes,
  antifreeze: 'Take used antifreeze to the HHW locations for recycling or ask your local auto shop to recycle it for you. Do not pour out.',
  bag: {
    paper: {
      clean: 'recycle',
      dirty: 'compost'
    },
    plastic: {
      grocery: {
        single: 'garbage',
        bundle: 'recycle'
      },
      ziploc: 'garbage',
      produce: 'garbage'
    }
  },

  // Barrels & Drums

  battery: {
    alkaline: 'garbage or drop off recycling',
    rechargeable: 'drop off recycling'
  },

  light: {
    incandescent: 'garbage',
    fluorescent: 'drop off only',
    led: 'garbage',
    christmas: 'during the holidays, drop off, otherwise, garbage'
  },

  cardboard: cardboard,
  lid: lid,


  juice: {
    carton: {

    }
  }
}




var boxes = {
  butter: 'Recycle.',
  cereal: 'Recycle. Liners go in garbage.',
  cracker:'Recycle. Liners go in garbage.',
  liner: 'Garbage',
  'ice cream': 'Recycle.',
  detergent: 'Recycle.',
  soup: 'Recycle.',
  milk: 'Recycle.',
  juice: 'Recycle',
  egg: {
    clean: 'Recycle or compost.',
    soiled: 'Compost.'
  }
};

var words;
var obj;

function narrowDown(object) {
  obj = object;
  var found = false;
  var i = 0;
  while (i < words.length && !found) {
    if (obj.hasOwnProperty(removeDash(words[i]))) {
      if (typeof(obj[removeDash(words[i])]) === 'string') {
        found = true;
        console.log('found it: ' + obj[removeDash(words[i])]);
        mainDiv.innerHTML = '';
        mainDiv.textContent = obj[removeDash(words[i])];
      } else if (typeof(obj[removeDash(words[i])]) === 'object') {
        console.log('found object: ' + obj[removeDash(words[i])]);
        obj = obj[removeDash(words[i])];
        i = 0;
      }
    } else {
      console.log('not found');
      i++;
    }
  }
  if (!found && obj !== dataList){
    renderButtons(obj);
  } else if (found) {
    mainDiv.innerHTML = '';
    mainDiv.textContent = obj[removeDash(words[i])];
  }
}
function handleSubmit(event) {
  event.preventDefault();
  // console.log(e.target.item.value);
  var itemString = event.target.item.value.toLowerCase();
  words = itemString.split(' ');
  // console.log(words);
  narrowDown(dataList);

}


function handleClick(event) {
  // console.log(event.target);
  console.log(event.target.textContent);
  var which = obj[event.target.textContent];
  console.log(which);
  if (typeof(which) === 'string'){
    mainDiv.innerHTML = '';
    mainDiv.textContent = which;
  } else {
    obj = which;
    renderButtons(obj);
  }

  }

function renderButtons(object) {
  mainDiv.innerHTML = '';
  for (var i in object) {
    var buttonEl = document.createElement('button');
    buttonEl.addEventListener('click', handleClick);
    buttonEl.textContent = i;
    mainDiv.appendChild(buttonEl);
  }
}

function removeDash(str) {
  var returnStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
      returnStr = returnStr + str[i];
    }
  }
  return returnStr;
}

form.addEventListener('submit', handleSubmit);
