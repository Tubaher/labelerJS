// import { saveAs } from 'file-saver';
var cars = [];
// var directions = [];
var plates = [];
var index = 0;
var carSave = [];

var lenCars = 0;

///document.getElementById("nextBtn").src = "crops/".concat(cars[index]);
//Buttons
//Next Button
document.getElementById("nextBtn").onclick = function() {nextImg()};
//Back Button
document.getElementById("backBtn").onclick = function() {backImg()};
//Save Txt
document.getElementById("saveBtn").onclick = function() {saveStaticDataToFile()}
//Open Files
document.getElementById('files').addEventListener('change', handleFileSelect, false);


//Load files to the labeler
function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    for (var i = 0, f; f = files[i]; i++) {
        cars.push(f.name);
        plates.push("");
      }
    
    lenCars = cars.length

    
    var firstImg =  "crops/".concat(cars[0])
    // files is a FileList of File objects. List some properties.
    document.getElementById("plateImg").src = firstImg;


    document.getElementById("nextBtn").disabled = false;
    //document.getElementById("saveBtn").disabled = false;
    
    //console.log(cars)
    //document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

function nextImg() {
    // console.log(index)

    var tmpPlateNumber = document.getElementById("plateNumber").value;
    plates[index] = tmpPlateNumber

    index = index +1;

    //Load next img and info
    img =   "crops/".concat(cars[index])
    document.getElementById("plateImg").src = img;
    document.getElementById("plateNumber").value = plates[index];

    if (index == 1) {
        //Enable buttons
        document.getElementById("saveBtn").disabled = false;
        document.getElementById("backBtn").disabled = false;

        
    }

    if (index == lenCars - 1) {
        document.getElementById("nextBtn").disabled = true;
    }


    //Display the possible previous 5 elements
    var staridx;
    var endidx = index;

    if (index <= 4){
        staridx = 0;
    }else{
        staridx = index - 5;
    }

    var crop = plates.slice(staridx, endidx)

    displayList(crop);

}

function backImg() {
    // console.log(index)

    var tmpPlateNumber = document.getElementById("plateNumber").value;
    plates[index] = tmpPlateNumber

    index = index - 1;

    //Load next img and info
    img =   "crops/".concat(cars[index])
    document.getElementById("plateImg").src = img;
    document.getElementById("plateNumber").value = plates[index];

    if (index == 0) {
        //Enable buttons
        document.getElementById("backBtn").disabled = true;        
    }

    //Display the possible previous 5 elements
    var staridx;
    var endidx = index;

    if (index <= 4){
        staridx = 0;
    }else{
        staridx = index - 5;
    }

    var crop = plates.slice(staridx, endidx)

    displayList(crop);

}

function displayList(family) {
    for (var prop in family) {
      document.getElementById('dynamic-list').innerHTML += '<li>' + prop + '</li>';
    }
}

function saveStaticDataToFile() {
    var finalPlates = []
    for (let idx = 0; idx < plates.length; idx++) {
        if (plates[idx]!=""){
            finalPlates.push("crops/" + cars[idx] + " " + plates[idx]+"")
        }
        
    }
    
    var blob = new Blob(finalPlates,
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "annotations.txt");
}



  