# Javascript data exercise 02

Navigate to a local directory where you want to store this exercise, and clone the repository from GitHub. Before you push, you will need to *change the GIT remote* to a new repository of your own with the following command: `git remote set-url origin [YOUR_REPO_URL_HERE]`.

The first part of this example uses a local web server (check that this is available) to allow your browser to read in a local JSON file, and display the results. If you can't run a local server, use the alternative JSON API source provided in the code.

## Start a local web server (if available)

If you can run a local server on your machine, open a command-line console, `cd` into the directory where your index.html file is, then (if you don;t already have a server setup) run one of the following commands (depending on your installed languages):

- Python 2.7: `python -m SimpleHTTPServer`
- Python 3: `python -m http.server`
- PHP (>=5.4): `php -S localhost:8000` 

Wait until the console shows `Serving HTTP on 0.0.0.0 port 8000`, then go to `http://localhost:8000/` in your browser. You can stop the server with `ctrl-C` if you need to later, but your browser won't read the JSON if you simply load the index.html file into the browser as a file. See the first paragraph of the exercise below to run this without a local server.

Read more about [running a simple local server](https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally).

## Exercise

If you uncomment line 5 and comment out line 10, the code given works on a local server with a local JSON file containing the lecturers' names from exercise 01. Line 10 is a URL for an [alternative source of JSON data](https://jsonplaceholder.typicode.com/photos) with far more data (a dummy photo album with placeholder images), arranged differently. See if you can modify the function on line 21 to read in and display some of this data in the HTML file. 

**HINT:** If you just use the link to the new JSON file, the first error you'll see in the console is `"Cannot read property 'length' of undefined"`. This is because the exsiting code is expecting the data to have property strings named 'lecturers', 'firstName', etc. (in JSON the 'properties' are strings) but the new data contains *different property name strings* and the containing array is not 'lecturers' - it has no name. So use 'title', 'url', 'thumbnailUrl' from '"albumId": 1' to create a 'gallery' of placeholder images.