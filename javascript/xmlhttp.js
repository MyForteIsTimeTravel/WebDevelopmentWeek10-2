(function(){

  let xmlhttp = new XMLHttpRequest();
  // let url = "http://localhost:8000/data/data.json";
  // if you can't run a local server, use the JSON source below
  let url = "https://jsonplaceholder.typicode.com/photos";
  /*
    this online 'fake API' service has other JSON examples covering
    typical use cases - feel free to try them out:
    https://jsonplaceholder.typicode.com/
  */

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
