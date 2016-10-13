/* eslint-disable */

var form = document.getElementById('inputbox');
var mainDiv = document.getElementById('main');
var searchStrEl = document.getElementById('searchStr');
var searchStr = '';
var words;
var obj;
var dataList; //var for localStorage function
var appleEl = document.getElementById('apple');
var bottleEl = document.getElementById('bottle');
var catEl = document.getElementById('cat');

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
    foam: 'Garbage.',
    paper: {
      clean: 'Recycle or compost.',
      soiled: 'Compost.'
    }
  },
  pizza: 'Compost',
  tissue: 'Recycle. Try to remove plastic liner, but not necessary.'
};

var medicineBottle = {
    'Non-prescription': 'Pill bottles such as aspirin or vitamin bottles are recyclable. Avoid putting leftover pills in the garbage or down the drain.',
    prescription: 'Translucent prescription medicine vials go in the garbage. Avoid putting leftover pills in the garbage or down the drain.'
}

var plastic = {
  'blister packaging (really hard to open stuff)': 'Garbage.',
  '6-pack rings': 'Snip apart, bag, and place in garbage.',
  'berry tray': 'Clean and recycle.',
  utensil: 'Garbage, unless marked compostable.',
  cup: 'Clean and recycle.',
};

var cleanAndRecycle = 'Clean, dry, and recycle.';
var container = {
  soda: cleanAndRecycle,
  water: cleanAndRecycle,
  detergent: cleanAndRecycle,
  bleach: cleanAndRecycle,
  pesticide: 'Garbage.',
  feces: 'Down the drain! Or a bag I guess?',
  'motor oil': 'Garbage',
  'hazardous': 'Garbage.',
  glass: cleanAndRecycle,
  pill: medicineBottle,
  medicine: medicineBottle
};

var light = {
    incandescent: 'garbage',
    fluorescent: 'drop off only',
    led: 'garbage',
    christmas: 'during the holidays, drop off, otherwise, garbage'
};

var book = {
  phone: 'Recycle.',
  hardcover: 'Garbage.',
  softcover: 'Recycle.'
};
//function to wrap all objects created to localStorage
function makeDataList(){
  dataList = {
    styrofoam: 'Anything styrofoam goes in the garbage.',
    aluminum: {
      foil: {
        clean: 'Recycle. Do not crumple up.',
        'food-soiled': 'Garbage.'
      },
      bulk: 'Recycle. Maximum size is 2 feet X 2 feet X 2 feet. Nothing smaller than 3 inches. Do not recycle metal with plastic, wood, or rubber attached.'
    },
    cap: {
      beer: 'Garbage',
      plastic: 'Screw onto empty plastic bottle and recycle. Garbage without bottle.'
    },
    // bottle: {
    //   plastic: 'Ignore the numbers, you can recycle all plastic food containers: bottles, dairy tubs, jugs, and jars.',
    //   glass: 'Clean and recycle.',
    //   'shampoo/lotion': 'Clean and recycle.'
    // },

    bucket: 'Reuse if possible. If it contained hazardous waste, it goes in the garbage. Otherwise, recycle.',
    kleenex: 'Garbage.',
    tissue: 'Garbage.',
    wipe: 'Garbage.',
    peanut: 'Put into a bag and garbage.',
    foam: 'Garbage',
    cd: 'Garbage.',
    dvd: 'Garbage.',
    hanger: 'Garbage.',
    trash: 'Really?',
    diaper: 'Flush excrement down the toilet, then bag and put in garbage.',
    cork: 'Recycle through the Cork ReHarvest Program, which has drop boxes at PCC, Whole Foods Markets, and Wine World Warehouses. Otherwise they are garbage.',
    wrap: {
      bubble: 'Reuse or bag and recycle.',
      shrink: 'If clean and dry, bag with other plastics and recycle. Garbage otherwise.',
      gift: 'Paper gift wrap can be recycled. Plastic, foil, or gift tissue paper similar to facial tissue paper must go in the garbage.'
    },
    book: {
      phone: 'Recycle.',
      hardcover: 'Garbage.',
      softcover: 'Recycle.'
    },
    photo: 'Garbage.',
    photograph: 'Garbage.',
    receipt: 'Recycle.',
    envelope: {
      paper: 'Recycle, including plastic window.',
      bubble: 'Garbage.',
      tyvek: 'Garbage.'
    },
    mail: {
      junk: 'Recycle.'
    },
    magazine: 'Recycle, or donate.',
    newspaper: 'Recycle.',
    notebook: 'Throw any spiral in garbage, Recycle paper.',
    cardboard: {
      greasy: 'Compost (Food & Yard Waste cart), can\'t be recycled.',
      waxed: 'Compost (Food & Yard Waste cart), can\'t be recycled.',
      corrugated: 'Recycle.',
      wet: 'Compost (Food & Yard Waste cart).',
      foamcore: 'Garbage'
    },
    clipping: {
      grass: 'Compost.',
      yard: 'Compost.'
    },
    grass: 'Compost.',
    box: boxes,
    boxe: boxes,
    carton: boxes,
    napkin: {
      unused: 'Recycle.',
      'food-soiled': 'Compost.',
      'soiled': 'Garbage. Bagged preferably.',
    },
    light: light,
    lightbulb: light,
    pill: 'Dispose of pills with TakeBackYourMeds.org. Do not put in garbage or down the drain unless no other option exists.',
    medicine: 'Dispose of medicine with TakeBackYourMeds.org. Do not put in garbage or down the drain unless no other option exists.',
    antifreeze: 'Take used antifreeze to the HHW locations for recycling or ask your local auto shop to recycle it for you. Do not pour out.',
    bag: {
      paper: {
        clean: 'Recycle.',
        dirty: 'Compost.'
      },
      grocery: {
        single: 'Garbage',
        bundle: 'Recycle'
      },
      ziploc: 'Garbage.',
      produce: 'Garbage.',
      chip: 'Garbage.',

      'pet food': 'Garbage.'
    },
    battery: {
      alkaline: 'Garbage or drop off recycling.',
      rechargeable: 'Drop off recycling.'
    },
    cartridge: 'Many stores refill and recycle them. Most companies that make cartridges also provide means to return and recycle your empty cartridge. Otherwise, they go in the garbage.',
    lid: {
      'Diameter larger than 3"': 'Recycle.',
      'Diameter smaller than 3"': 'Garbage.'
    },
    tarp: 'Garbage.',
    toy: 'Recycle metal or rigid plastic toys that are 3 feet or smaller on all sides. Items that are not all metal or all plastic go in the garbage.',
    bottle: container,
    jar: container,
    jug: container,
    tub: container,
    vial: container,
    container: container,
    plastic: {
      cup: 'Clean and recycle',
      utensil: 'Garbage, unless marked compostable.',
    },
    paper: {
      cup: {
        'plastic-coated': 'Recycle. Garbage if dirty. Unless cup says it\'s compostable.',
        uncoated: 'Compost.'
      },
      plate: {
        'plastic-coated': 'Recycle if clean. Garbage if dirty. Unless plate says it\'s compostable.',
        uncoated: 'Compost.'
      },
      towel: {
        unused: 'Recycle',
        'food-soiled': 'Compost.',
        'chemical/body-fluid soiled': 'Garbage. Bagged preferably.',
      },
      office: 'Recycle.',
      printer: 'Recycle.',
      shredded: 'Compost or garbage.',
      waxed: 'Compost bin.',
      'punch holes': 'Compost or garbage.'
    },
    can: {
      beverage: 'Recycle.',
      aerosol: 'Garbage.',
      paint: 'Garbage.',
      steel: 'Recycle.',
      tin: 'Recycle.',
        lid: {
          loose: 'Garbage.',
          attached: 'Recycle.',
        },
    },
    foil: {
      aluminum: {
        clean: 'Recycle. Do not crumble up.',
        'food-soiled': 'Garbage.',
      },
    },
    paint: {
      contained: {
        latex: 'Garbage. Let paint dry and harden before disposal.',
        'oil-based': 'Garbage. Let paint dry and harden before disposal.',
      },
      uncontained: 'Not disposable. Place in container, let dry and harden.',
    },
    wrapper: {
      candy: 'Garbage.',
      cigar: 'Garbage.',
      cigarette: 'Garbage.',
    },
    cartridge: {
      printer: 'Follow manufacturer\'s recycling instruction. Otheriwse, Garbage.',
      toner: 'Follow manufacturer\'s recycling instruction. Otheriwse, Garbage.',
    },
    printer: {
      cartridge: 'Follow manufacturer\'s recycling instruction. Otheriwse, Garbage.',
    },
    toner: {
      cartridge: 'Follow manufacturer\'s recycling instruction. Otheriwse, Garbage.',
    },
    money: 'Disposing national currency is illegal. Can be fined or imprisoned. Title 18, Chapter 17 of the U.S. Code.',
    tampon: 'Garbage.',
    condom: {
      used: 'Garbage.',
      unused: 'Maybe it\'s time to get busy instead of wondering about where your trash goes.',
    },
    puppy: 'This is animal cruelty.',
    puppie: 'This is animal cruelty.',
    dog: 'This is animal cruelty.',
    kitten: 'This is animal cruelty.',
    cat: 'This is animal cruelty.',
    toothpick: 'Garbage.',
    toothbrush: 'Garbage.',
    oil: {
      cooking: 'Contain it. Seal it. Recycle.',
      'fat & grease': 'Contain it. Seal it. Garbage.',
      motor: 'Contain it. Seal it. Recycle.',
    },
    fat: 'Contain it. Seal it. Garbage.',
    grease: 'Contain it. Seal it. Garbage.',
    tupperware: {
      plastic: 'Recycle.',
      pyrex: 'Garbage.',
    },
    pyrex: 'Garbage.',
    glass: {
      bottle: 'Recycle.',
      jar: 'Recycle.',
      ceramic: 'Garbage.',
      eye: 'Garbage.',
      broken: 'Recycle (large pieces). Garbage (shards).',
    },
    computer: {
      laptop: 'Recycle at local electronics recycling center.',
      desktop: 'Recycle at local electronics recycling center.',
      tablet: 'Recycle at local electronics recycling center.',
      ipad: 'Recycle at local electronics recycling center.',
    },
    phone: {
      'land line': 'Recycle at local electronics recycling center.',
      mobile: 'Recycle at local electronics recycling center.',
    },
    peel: 'Compost',
    pencil: 'Garbage.',
    pen: 'Garbage.',
    marker: 'Garbage.',
    eraser: 'Garbage.',
    'glue stick': 'Garbage.',
    crayon: 'Garbage.',
    highlighter: 'Garbage.',
    'post-it note': 'Recycle.',
    scissor: 'Garbage.',
    'white-out': 'Garbage.',
    staple: 'Garbage.',
    stapler: 'Garbage.',
    paperclip: 'Garbage.',
    vegetable: 'Compost.',
    fruit: 'Compost.',
    food: 'Compost.',
    hair: 'Compost.',
    chip: 'Compost.',
    dropping: 'Compost.',
    lint: 'Compost.',
    hay: 'Compost.',
    popcorn: 'Compost.',
    fish: 'Garbage.',
    spice: 'Compost.',
    seaweed: 'Compost.',
    kelp: 'Compost.',
    hop: 'Compost.',
    herb: 'Compost.',
    molasse: 'Compost.',
    potato: 'Compost.',
    potatoe: 'Compost.',
    bread: 'Compost.',
    ash: 'Compost.',
    ashe: 'Compost',
    sawdust: 'Compost.',
    shell: 'Compost.',
    alfalfa: 'Compost.',
    rye: 'Compost.',
    grapefruit: 'Compost.',
    pasta: 'Compost.',
    grape: 'Compost.',
    corncob: 'Compost.',
    jello: 'Compost.',
    gelatin: 'Compost.',
    beet: 'Compost.',
    milk: 'Compost.',
    soy: 'Compost.',
    bean: 'Compost',
    bark: 'Compost.',
    starfish: 'Garbage.',
    flower: 'Compost.',
    petal: 'Compost.',
    qtip: 'Compost.',
    rhubarb: 'Compost.',
    tobacco: 'Compost.',
    jellyfish: 'Garbage.',
    wheat: 'Compost.',
    bran: 'Compost.',
    clover: 'Compost.',
    cheese: 'Compost.',
    greensand: 'Compost.',
    straw: {
      plastic: 'Garbage.',
      produce: 'Compost.',
    },
    egg: 'Compost.',
    guano: 'Compost.',
    apple: 'Compost.',
    banana: 'Compost.',
    yogurt: 'Compost.',
    shrimp: 'Garbage.',
    crab: 'Garbage.',
    lobster: 'Garbage.',
    pie: 'Compost.',
    onion: 'Compost.',
    watermelon: 'Compost.',
    date: 'Compost.',
    olive: 'Compost.',
    peanut: 'Compost.',
    oatmeal: 'Compost.',
    bread: 'Compost.',
    tofu: 'Compost.',
    fingernail: 'Compost.',
    toenail: 'Compost.',
    cookie: 'Compost.',
    moss: 'Compost.',
    pickle: 'Compost.',
    leaf: 'Compost.',
    leave: 'Compost.',
    leather: 'Compost.',
    salad: 'Compost.',
    cereal: 'Compost.',
    ticket: 'Compost.',
    toast: 'Compost.',
    feather: 'Compost.',
    fur: 'Compost.',
    manure: 'Compost.',
    envelope: 'Compost.',
    insect: 'Compost.',
    sandwich: 'Compost.',
    bone: 'Compost.',
    produce: 'Compost.',
    receipt: 'Compost.',
    urine: 'Compost.',
    metal: 'Recycle all metal items except car parts. Request bulky pickup for larger items. Garbage items smaller than 3 inches.'

  };

}
//get newSearchButton (by id?)
var newSearchButton = document.getElementById('newSearchButton');

// searches for user's input in the dataList
function narrowDown(object) {
  obj = object;
  var found = false;
  var i = words.length - 1;
  while (i >= 0 && !found) {
    var currentWord = ignorePlural(removeDash(words[i]));
    console.log(currentWord);
    if (obj.hasOwnProperty(currentWord)) {
      if (typeof(obj[currentWord]) === 'string') {
        found = true;
        console.log('found it: ' + obj[currentWord]);
        mainDiv.innerHTML = '';
        mainDiv.textContent = obj[currentWord];
        newSearchButton.style.display='block';
        // newSearchButton.style.position='absolute';
        newSearchButton.addEventListener('click', refreshBrowser);
        animate(obj[currentWord]);
      } else if (typeof(obj[currentWord]) === 'object') {
        console.log('found object: ' + obj[currentWord]);
        obj = obj[currentWord];
        i = words.length - 1;
      }
    } else {
      i--;
    }
  }
  // if it doesn't reach an answer but wasn't totally stumped it gives the user buttons.
  searchStrEl.textContent = 'Current search: ' + searchStr;
  if (!found && obj !== dataList){
    renderButtons(obj);
  } else if (!found) {
    mainDiv.innerHTML = '';
    mainDiv.textContent = 'Input ' + searchStr + ' not an accepted term. Describe item by its material or visit the information page for miscellaneous items.';
    // console.log('not found');
    //unhide it (change display to block)
    newSearchButton.style.display='block';
    //addEventListener for newSearchButton
    newSearchButton.addEventListener('click', refreshBrowser);
  }
}

//takes input and makes an array of seperate words

//function refreshButton :
function refreshBrowser() {
     window.location.reload();
}

function handleSubmit(event) {
  event.preventDefault();
  // console.log(e.target.item.value);
  var itemString = event.target.item.value.toLowerCase();
  searchStr = itemString;
  words = itemString.split(' ');
  // console.log(words);
  narrowDown(dataList);
}

function handleClick(event) {
  console.log('which witch is which?');
  // console.log(event.target.textContent);
  var which = obj[event.target.textContent];
  searchStr = event.target.textContent + ' ' + searchStr;
  searchStrEl.textContent = 'Current search: ' + searchStr;
  // console.log(which);
  if (typeof(which) === 'string'){
    mainDiv.innerHTML = '';
    mainDiv.textContent = which;
    animate(which);
    newSearchButton.style.display = 'block';
    newSearchButton.addEventListener('click', refreshBrowser);
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

// add flexibility for user input
function removeDash(str) {
  var returnStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
      returnStr = returnStr + str[i];
    }
  }
  return returnStr;
}

function ignorePlural(str) {
  if (str[str.length - 1] === 's' && str[str.length - 2] !== 's') {
    console.log('plural');
    return str.substring(0, str.length - 1);
  }
  return str;
}

function animate(answerStr) {
  console.log(answerStr);
  console.log(answerStr.toLowerCase().includes('compost'));
  if (answerStr.toLowerCase().includes('recycle')) {
    //animate bottle
    bottleEl.id += '-animation';
  }
  if (answerStr.toLowerCase().includes('compost')) {
    //animate apple
    appleEl.id += '-animation';
  }
  if (answerStr.toLowerCase().includes('garbage')) {
    //animate cat
    catEl.id += '-animation';
  }
}

//function for creating local storage file for dataList
function searchStorage(){
  if (localStorage.getItem('dataList')) {
    dataList = JSON.parse(localStorage.getItem('dataList'));
    console.log('dataList retrieved');

  }
  else {
    makeDataList();
    var dataListStringified = JSON.stringify(dataList);
    localStorage.setItem('dataList',dataListStringified);
    console.log('dataList in storage')
  }
}

window.addEventListener('load', searchStorage);
form.addEventListener('submit', handleSubmit);
