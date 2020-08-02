// import { saveAs } from 'file-saver';
var cars = [];
var directions = [];
var plates = [];
var index = 1;


///document.getElementById("nextBtn").src = "crops/".concat(cars[index]);
document.getElementById("nextBtn").onclick = function() {nextImg()};

document.getElementById("saveBtn").onclick = function() {saveStaticDataToFile()};


function nextImg() {
    // console.log(index)
    if (index <= cars.length){
        var tmpDirection = document.getElementById("direction").value;
        var tmpPlateNumber = document.getElementById("plateNumber").value;
    
        directions.push(tmpDirection);
        plates.push(tmpPlateNumber.concat("\n"));

        document.getElementById("direction").value = "";
        document.getElementById("plateNumber").value = "";
    }
    
    //console.log(directions)

    if (index < cars.length) {
        cars[index] = "crops/".concat(cars[index])
        //console.log(cars.length)
        document.getElementById("plateImg").src = cars[index];
        
        }
    
    if (index > cars.length){
        document.getElementById("direction").value = "";
        document.getElementById("plateNumber").value = "";
    }    

    index = index + 1;


}

function saveStaticDataToFile() {


    var blob = new Blob(directions,
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "annotations.txt");
}



function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    var firstImg =  "crops/".concat(files[0].name)
    // files is a FileList of File objects. List some properties.
    document.getElementById("plateImg").src = firstImg;

    for (var i = 0, f; f = files[i]; i++) {
      cars.push(f.name);
    }


    cars[0] = firstImg

    
    console.log(cars)
    //document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);