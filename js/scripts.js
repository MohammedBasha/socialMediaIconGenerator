var socialMedia = { // adding a list of property and value links
  facebook : 'http://facebook.com/',
  twitter: 'http://twitter.com/',
  flickr: 'http://flickr.com/',
  youtube: 'http://youtube.com/'
};

var social = function() { // creating self executed function

  var output = "<ul>", // creeting an output variable start with the openning ul tag end with the needed markup
      navs = document.querySelectorAll(".socialmediaicons"); // grab all the nav containers that ll hold the output markup

  for (let icon in arguments[0]) { // loop through the socialMedia properties
    output += "<li><a href='" + arguments[0][icon] + "'><img src='images/" + icon + ".png' alt='Icon for " + icon + "'></a></li>"; // adding the li and anchors and images for each property
  }

  output += "</ul>"; // ending the markup with the closing ul tag

  for (let nav = 0; nav < navs.length; nav++) { // loop through the navs container
    navs[nav].innerHTML = output; // put in each container the output markup
  }

}(socialMedia); // passing the socialMedia object as a parameter