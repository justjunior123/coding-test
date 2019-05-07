# Someones Challenge

1. Shows a user an image of either a red or blue ball upon visiting the page. This should be random, with a 50/50 chance of a user being shown either color ball.

2. Determine whether the user saw a red or a blue ball and the next time a user visits the page show them the same color ball they saw previously.

3. Please work with cookies (and not local storage) to record how many times a user has seen each color of ball. You should be able to provide a report on users and number of times they saw each color ball.

4. The test should work in any browser (including Chrome). Style as necessary (it is very much appreciated if you do).

5. Code should be completed in Javascript and/or Python and feel free to use a framework for building the page/application. Any cookie functionality should not be abstracted by jQuery or any other module provided by NPM or the like.

## Abstract Breakdown

Working With Cookies
Summary

1. I need to create a cookie if it does not exist when page loads initially
  Cookie props
  ~ cookie: "we can use random numbers keep it simple";
  ~ color: "red" or "blue";
  ~ viewCount: number of times page is viewed; Default at 1
  ~ expires: set it to 30 days for simplicity; thats the max

2. I need to create unique users and keep track of them over time
  ~ This will be done by assigning a cookie number; 1-100 for simplicity
  its not perfect or ideal, we can use other unique methods. This gets the
  point across.


3. I need to display the circle after the cookie is created along with our
  viewCount, by default it is set to 1.
  ~ I will need to create a displayCookie() to read cookie props.


4. I need to update the cookie every time the user visits with a viewCount + 1
   ~ I will need an updateCookie() to update the viewCount

## Important!

In the console if you would like to delete the cookie stored. You can invoke the deleteCookies() method, please view the following:

```bash
  deleteCookies()
```

## Technologies Utilized

1. HTML
2. CSS
3. Vanilla JavaScript (ES6)

## Getting Started

This following repo of files addresses the prompt and solves the given restrictions. This is a simple, single html page, utilizing vanilla JavaScript and css. You can run these files locally using localhost in your web browser. This project was developed in chrome using chrome dev tools.

## Running The Webpage

Running any client side server to generate a static webpage should work. The specific text editor used for development was "Atom". Along with the externally installed web package "atom-live-server", used to generate a local webpage on localhost:3000.

## Solved

Utilizing document.cookie to generate a cookie that holds client information upon arrival of the webpage. The cookie string holds key value pairs separated by "," commas. When the cookie is created the returned value will look like the
following:

```bash
  "cookie=11,color=red,viewCount=1,expires=Sun, 02 Jun 2019 17:28:56 GMT"
```
We use this information to generate the circle and to keep track of the number of times the user has viewed this same page. The counter is triggered every time
the page is refreshed or re-renders. There is a default 30 day expiration date upon creation of the cookie. Please take a look at code files along with the supplied comments for further details. CHEERS!
