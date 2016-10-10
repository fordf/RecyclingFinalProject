/* eslint-disable */

var form = document.getElementById('inputbox');
var mainDiv = document.getElementById('main');

var dataList = {
  // Acetylene_Oxygen_Tanks:
  // Acoustic_Ceiling_Tile
  // Aerosol_Spray_Cans
  // Air_Conditioners_or_Heat_Pumps
  // Aluminum
  // Aluminum_Foil_Trays
  // Ammunition_Guns_Fireworks
  // Anti_Freeze
  // Appliances_Large
  // Asbestos
  // Aseptic/Tetra Pak
  // Ashes - Fireplace & Briquettes
  // Asphalt Roofing
  // Aspirin Containers
  // Audio Equipment
  // Auto_Parts_Starters_Carburetors
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
  // bags_paper: {
  //   clean: 'recycle',
  //   dirty: 'compost'
  // },
  //
  // Bags_Plastic_Bread: 'garbage',
  // Bags_Plastic_Grocery_Shopping: 'recycle in a bundle',
  // Bags_Plastic_Produce: 'garbage',
  // Bags_Plastic_Ziploc: 'garbage',
  // Barrels & Drums

  Batteries_Alkaline: 'garbage or drop off',
  Batteries_Rechargeable: 'drop off',
  // Bed Frames
  // Bedding
  // Berry Trays
  // Beverage Cans
  // Bicycles & Bike Parts
  // Biodegradable Foam Peanuts
  // Bleach
  // Blister Package
  // Books, Hardback
  // Books, Paperback
  // Bottle Caps & Jar Lids
  // Brake, Transmission Fluid
  // Branches
  // Brick
  // Bubble Wrap
  // Buckets
  // Butter Boxes
  // Camera & Watch Batteries
  // Can Lids
  // Cans, Aerosol Spray
  // Car Glass
  // Cars
  // Cardboard, Boxes
  // Cardboard, Corrugated
  // Cardboard, Soiled or Greasy
  // Cardboard, Waxed
  // Carpet & Padding
  // Cast Iron
  // CD_Cases
  // CDs_DVDs_Floppies
  // Cell Phones
  // Cell Phone Batteries
  // Cereal & Cracker Boxes
  // Child Car Seats
  // Chip Bags
  // Christmas Lights
  // Christmas Trees
  // Clam Shell Containers
  // Clean Soil
  // Cleaning Supplies
  // Clock Radios
  // Clothes
  // Coffee Filters
  // Compostable Food Ware
  // Computers/Laptops
  // Computer Batteries
  // Computer Monitors
  // Concrete & Asphalt
  // Construction Waste, Mixed
  // Contaminated Soil
  // Cooking Oil
  // Copiers/Fax Machines
  // Copper, Bronze, Brass
  // Corks
  // Cups & Utensils, Plastic
  // Dirt & Soil
  // Disposable Diapers
  // Drinking Glasses
  // Drums
  // Drywall
  // Dry Cleaner Bags
  // Ducts
  // Edible Food to Donate
  // Egg Cartons, Foam
  // Egg Cartons, Paper
  // Engines or Motors & Car Parts
  // Envelopes_with
  // E-waste
  // Eyeglass Frames
  // Eyeglasses
  // Fabric or Textiles
  // Facial Tissue (Kleenex)
  // Fats, Oils & Grease
  // Fax Machines
  // Fiberglass
  // Fire Extinguishers
  // Flares
  // Fluorescent Lights
  // Flushable Wipes
  // Foam Blocks or Packing Sheets
  // Foamcore
  // Foil Pie Pans
  // Food Box Liners
  // Food/Meat Trays
  // Food Scraps -- All
  // Food Scraps -- Home Composting
  // Frozen Food Boxes
  // Furnaces
  // Gas Canisters, Small
  // Gas Cans
  // Gasoline
  // Gift Wrap
  // Glass Bottles & Jars
  // Glass, Broken
  // Glass or Ceramic Household Items
  // Gold, Silver, Etc.
  // Glues & Adhesives
  // Grass Clippings & Sod
  // Greeting Cards
  // Grocery Bags
  // Gutters
  // Hand Tools
  // Hearing Aid Batteries
  // Helium Tanks
  // Hobby Chemicals
  // Hot/Coffee Cups
  // House Plants
  // Household (Alkaline) Batteries
  // Household Furniture
  // Jar Lids
  // Jewelry & Coins
  // Juice Boxes
  // Juice Cartons
  // Juice Jug
  // Junk Mail
  // Keys
  // Kleenex - Facial Tissue
  // Laptops
  // Laundry Detergent Boxes
  // Laundry Detergent Jugs
  // Lawn Mowers & Power Equipment
  // Lead
  // Leaves & Non-Woody Yardwaste
  // Lids - Deli, Coffee, Soft drink
  // Light bulbs, Fluorescent
  // Light bulbs, Incandescent
  // Light bulbs, LED
  // Lights, Christmas
  // Lumber & Boards
  // Magazines
  // Mattresses & Futons
  // Meat or Fish Trays
  // Medicine
  // Mercury Thermometers & Items
  // Microwaves
  // Milk, Juice Cartons
  // Mirrors
  // Motor Oil
  // Motor Oil Containers
  // Motor Oil Filters
  // Mugs, Plates, Bowls
}

function handleInput(itemString) {
  var words = itemString.split(' ');
  console.log(words);
  // for (var j = 0; j < words.length; j++) {
  //   for (var i in dataList[item]) {
  //     console.log(i);
  //   }
  // }
}

function isIt(property) {
  var ans = prompt('Is it ' + property + '?').toLowerCase();
  if (ans === 'yes' || ans === 'y') {
    return true;
  } else if (ans === 'no' || ans === 'n') {
    return false;
  } else {
    alert('Valid answers: yes, y, no, n');
  }
}

var words;
var obj;

function narrowDown(object) {
  obj = object;
  var found = false;
  var i = 0;
  while (i < words.length) {
    // console.log('i = ' + i);
    // console.log(obj.hasOwnProperty(words[i]));
    if (obj.hasOwnProperty(words[i])) {
      if (typeof(obj[words[i]]) === 'string') {
        found = true;
        console.log('found it: ' + obj[words[i]]);
        return obj[words[i]];
      } else if (typeof(obj[words[i]]) === 'object') {
        console.log('found object: ' + obj[words[i]]);
        obj = obj[words[i]];
        i = 0;
      }
    } else {
      i++;
    }
  }
  if (!found && obj !== dataList){
    renderButtons(obj);
  } else if (found) {
    mainDiv.innerHTML = '';
    mainDiv.textContent = obj[words[i]];
  }
}
function handleSubmit(e) {
  e.preventDefault();
  // console.log(e.target.item.value);
  var itemString = e.target.item.value.toLowerCase();
  words = itemString.split(' ');
  // console.log(words);
  narrowDown(dataList);

}


function handleClick(event) {
  // console.log(event.target);
  console.log(event.target.textContent);
  var which = obj[event.target.textContent];
  if (typeof(which) === 'string'){
    mainDiv.innerHTML = '';
    mainDiv.textContent = which;
  } else {
    renderButtons(obj[event.target.textContent]);
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

form.addEventListener('submit', handleSubmit);
