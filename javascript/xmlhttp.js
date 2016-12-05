(function(){

  let xmlhttp = new XMLHttpRequest();
  let url = "http://localhost:8000/data/data.json";
  // let url = "https://jsonplaceholder.typicode.com/photos";

  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let myArr = JSON.parse(this.responseText);
      gatherData(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  let demoJSON = document.getElementById("demo");

  function gatherData(arr) {
    let theData = "";
    let i;
    for(i = 0; i < arr.lecturers.length; i++) {
      theData += `<li>${arr.lecturers[i].firstName} ${arr.lecturers[i].lastName}</li>`;
    }
    demoJSON.innerHTML = theData;
  }

}());
