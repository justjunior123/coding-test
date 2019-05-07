// This will Delete all cookies...run on console deleteCookies()
const deleteCookies = () => {
  document.cookie.split(";").forEach(function(c) {
    document.cookie = c.replace(/^ +/, "").replace(/=.*/,
       "=;expires=" + new Date().toUTCString() + ";path=/"
    );
  });
}

// This will return a type string of either "red" or "blue"
const getCookieColor = () => {
  let cookie = document.cookie
  let color = '';
  let cookieArray = cookie.split(",");

  cookieArray.forEach( ( cookie ) => {
    let splitCookie = cookie.split("=")
    if (splitCookie[0] === "color") {
      color = splitCookie[1];
    }
  })

  return color;
}

// This will return the viewCount of type integer, of the current cookie
const getCookieViews = () => {
  let cookie = document.cookie
  let viewCount = null;
  let cookieArray = cookie.split(",");

  cookieArray.forEach( ( cookie ) => {
    let splitCookie = cookie.split("=")
    if ( splitCookie[0] === "viewCount" ) {
      viewCount = splitCookie[1];
    }
  })

  return parseInt(viewCount);
}

// This will return a value of type integer assigned to identify each cookie
const getCookieValue = () => {
  let cookie = document.cookie
  let cookieValue = null;
  let cookieArray = cookie.split(",");

  cookieArray.forEach( ( cookie ) => {
    let splitCookie = cookie.split("=")
    if ( splitCookie[0] === "cookie" ) {
      cookieValue = splitCookie[1];
    }
  })

  return cookieValue;
}

// This will either alert the user or create a new cookie
const checkCookie = () => {
  // If the cookie has a value then then the user has been on the webpage before
  if ( getCookieValue() > 0 ) {
    alert("Welcome back your view count will go up by one");
  } else {
    // set a new cookie with random number and max time to live by 30 days
    createCookie("cookie", Math.floor((Math.random() * (100 - 1))), 30);
  }

}

// This will update the cookie string viewcount and update document.cookie
const updateCookie = () => {
  let cookie = document.cookie
  let newView = getCookieViews();
  let cookieArray = cookie.split(",");
  let newArray = [];
  // Loop through the cookie array
  for (let i = 0; i <= cookieArray.length - 1; i++) {
    let currentCookie = cookieArray[i];
    let splitCookie = currentCookie.split("=");
    // loop through the key value subset array
    for (let j = 0; j <= splitCookie.length - 1; j++) {
      if ( splitCookie[j] === "viewCount" ) {
        // Update viewcount here by calling newView and adding 1
        splitCookie[j+1] = (newView + 1).toString();
      } else if (j === 1) {
        newArray.push(splitCookie.join("="))
      } else if ( splitCookie.length === 1) {
        newArray.push(splitCookie.join("="))
      }
    }
  }
  // Join newArray seperated by commas to create a valid cookie string
  let newCookie = newArray.join(",")
  document.cookie = newCookie;
}

// This will display both the View Count and Circle color
const displayCookie = () => {
  document.getElementById("circle").style.backgroundColor = getCookieColor();
  document.getElementById("viewCount").innerHTML = getCookieViews();
}

// Once the entire page and related files are loaded, the following functions will execute
window.onload = () => {
  checkCookie();
  updateCookie();
  displayCookie();
}
