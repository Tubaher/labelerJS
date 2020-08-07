// import { saveAs } from 'file-saver';
var cars = [];
// var directions = [];
var plates = [];
var index = 1;


///document.getElementById("nextBtn").src = "crops/".concat(cars[index]);
document.getElementById("nextBtn").onclick = function() {nextImg()};

document.getElementById("saveBtn").onclick = function() {saveStaticDataToFile()};


function nextImg() {
    // console.log(index)
    if (index <= cars.length){

        // var e = document.getElementById("direction");
        // var tmpDirection = e.options[e.selectedIndex].value;

        var tmpPlateNumber = document.getElementById("plateNumber").value;
    
        // directions.push(tmpDirection);
        plates.push(tmpPlateNumber.concat("\n"));

        document.getElementById("plateNumber").value = "";
        if (index == cars.length){
            document.getElementById("saveBtn").disabled = false;
            document.getElementById("nextBtn").disabled = true;
            // document.getElementById("direction").disabled = true;
            document.getElementById("plateNumber").disabled = true;
        }
    }
    
    //console.log(directions)

    if (index < cars.length) {
        cars[index] = "crops/".concat(cars[index])
        //console.log(cars.length)
        document.getElementById("plateImg").src = cars[index];
        
        }
    
    if (index > cars.length){
        document.getElementById("plateNumber").value = "";
    }    


    index = index + 1;


}

function saveStaticDataToFile() {
    var final_strings = cars.map(joinNumberAndPlate)
    var blob = new Blob(final_strings,
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "annotations.txt");
}

function joinNumberAndPlate(num, idx) {
    // return num + " <" +  directions[idx] + ">"+plates[idx];
    return num + " " + plates[idx];
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
    document.getElementById("nextBtn").disabled = false;
    
    console.log(cars)
    //document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);