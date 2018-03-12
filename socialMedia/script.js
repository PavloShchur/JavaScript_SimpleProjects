let socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};

let socialList = function() {
  let  output = '<ul>',
    myList = document.querySelectorAll('.socialmediaicons');

  for (let key in arguments[0]) {
    output+= '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/' + key + '.png" alt="icon for ' + key + '"></a></li>';
  }
  output+= '</ul>';
  
  for (let i = 0, x = myList.length; i < x; i++) {
    myList[i].innerHTML = output;
  };
}(socialMedia);