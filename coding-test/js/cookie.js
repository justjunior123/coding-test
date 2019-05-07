// This script will create an initial cookie

function createCookie( name, value, expires ) {
  // By default name is "cookie" and "value" is random number 1 - 100;
  let cookie = name + "=" + value + ",";

  // Create random red or blue circle with 50/50 split;
  let circleColor = "";
  circleColor = Math.random() > 0.50 ? "red" : "blue";
  cookie += "color=" + circleColor + ",";

  // Initial viewCount will be 0 when created for the first time.
  let viewCount = 0;
  cookie += "viewCount=" + viewCount + ",";

  // Lets create an expiration date
  if ( expires ) {
    // If it's a date
    if( expires instanceof Date ) {
      // If it isn't a valid date
      if ( isNaN( expires.getTime() ))
       expires = new Date();
    } else
      expires = new Date(new Date().getTime() + parseInt(expires) * 1000 * 60 * 60 * 24);

    // This creates an expiration date maxed at 30 days from time of creation
    cookie += "expires=" + expires.toGMTString() + ";";
  }
  // Save the created cookie
  document.cookie = cookie;
}
