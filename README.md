# Javascript data exercise 02

This example uses a local web server (check that this is available) to allow your browser to read in a local JSON file, and display the results.

## Start a local web server

Open a command-line console, `cd` into the directory where your index.html file is, then run one of the following commands (depending on your installed languages):

- Python 2.7: `python -m SimpleHTTPServer`
- Python 3: `python -m http.server`
- PHP (>=5.4): `php -S localhost:8000` 

Then go to `http://localhost:8000/` in your browser. If you want, you can stop the server with `ctrl-C`, but your page won't work if you simply load the file into the browser.

Read more about [running a simple local server](https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally).

## Exercise

The code given uses a local JSON file with the lecturers' names from exercise 01. The JavaScript file includes an [alternative source of JSON data](https://jsonplaceholder.typicode.com/photos), commented-out on line 5. There is far more data (a dummy photo album with placeholder images) than that given in the lecturers' names, and it is arranged differently. See if you can modify the function on line 21 to display some of this data in the HTML file. 

**HINT:** If you just change the link to the new JSON file, the first error you'll see in the console is "Cannot read property 'length' of undefined". This is because the exsiting code is expecting the data to have properties named 'lecturers', 'firstName', etc. but the new data has different property names. Use 'title', 'url', 'thumbnailUrl' from '"albumId": 1' to create a 'gallery' of placeholder images.