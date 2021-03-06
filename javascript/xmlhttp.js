(function(){

  let xmlhttp = new XMLHttpRequest();
  // if you can run a local server on port 8000, use this URL:
  // let url = "http://localhost:8000/data/data.json";
  /*
  if you can't run a local server, use the JSON source below and
  change the code that reads in the array data to match the new data 
  */
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
      
    arr.forEach (function (item) {
        theData += 
            `<li>
                <a href=${item.url}>
                    <img src=${item.thumbnailUrl} alt="you failed">
                </a>

                <h2>${item.title}</h2>
            </li>`
    })
    
    demoJSON.innerHTML = theData;
  }    
}());
