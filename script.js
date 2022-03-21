function Elephant(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Image of elephant outline";
  this.image = "elephant.png";
}

function Giraffe(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Image of giraffe outline";
  this.image = "giraffe.png";
}


function Bear(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "Image of a bear outline";
  this.image = "bear.png";
}


let animals = [new Elephant(), new Giraffe (), new Bear ()];
let names = ["Abby", "Betty", "Charlie", "Darcy" , "Eevee", "Frannie", "Georgie", "Heather", "JJ", "Kally", "Lucy"];


/*** Functions ***/
function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}


function generateRandomName(){
  let randomIdx = generateRandomIndex(names.length);
  return names[randomIdx];
}


function generateRandomAge(){
  return generateRandomIndex(10);
}


function generateRandomAnimal(){
  let randomIdx = generateRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Elephant)
  {
    return new Elephant(generateRandomName(), generateRandomAge());
  }

  else if (randomAnimal instanceof Giraffe)
  {
    return new Giraffe(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Bear)
  {
    return new Bear(generateRandomName(), generateRandomAge());
  }
}


/*** Document Load ***/
function onLoad(){
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));
  var hasSavedAnimal = false;
  const objectAnimals = []
  if (animal === null)
  {
    document.getElementById("save-animal").textContent = "Save me";
    animal = generateRandomAnimal();
  }

  else
  {
    document.getElementById("save-animal").textContent = "Clear me";
    hasSavedAnimal = true;
  }


  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

  document.getElementById("save-animal").addEventListener("click", function () {
    if (hasSavedAnimal)
    {
      localStorage.removeItem("savedAnimal");
      document.getElementById("save-animal").style.display = "none";
      document.getElementById("feedback").textContent = "Cleared!";
      document.getElementById("feedback").style.display = "block";
    }
    else
    {
      localStorage.setItem("savedAnimal",JSON.stringify(animal));
      localStorage.setItem("objectAnimals", JSON.parse(animal));
      document.getElementById("save-animal").style.display = "none";
      document.getElementById("feedback").textContent = "Saved!";
      document.getElementById("feedback").style.display = "block";
    }
  });



};




