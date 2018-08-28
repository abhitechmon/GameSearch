
var requestURL = 'http://starlord.hackerearth.com/gamesext';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var gameList = request.response;
  showgames(gameList);
  // searchShow();
}

function showgames(jsonObj) {
	

  var games = jsonObj;
      
  for (var i = 0; i < games.length; i++) {
  
  	var title=document.createElement("h2");
  	var platform=document.createElement("li");
  	var score=document.createElement("li");
  	var genre=document.createElement("li");
  	var editors_choice=document.createElement("li");
  	var release_year=document.createElement("li");
  	var hr=document.createElement("hr");

  	title.textContent=games[i].title;
  	platform.textContent=games[i].platform;
  	score.textContent="Score: "+games[i].score;
  	genre.textContent="Genre: "+games[i].genre;
  	editors_choice.textContent=games[i].editors_choice;
  	release_year.textContent="Release Year: "+games[i].release_year;

  	document.getElementById("result").appendChild(title);
  	document.getElementById("result").appendChild(platform);
  	document.getElementById("result").appendChild(score);
  	document.getElementById("result").appendChild(genre);
  	document.getElementById("result").appendChild(editors_choice);
  	document.getElementById("result").appendChild(release_year);
  	document.getElementById("result").appendChild(hr);
  	
  }
}

// function searchShow(jsonObj) {
//   var games = jsonObj;
      
//   for (var i = 0; i < document.getElementsByTagName("h2").length; i++) {
  
  

//     title.textContent=games[i].title;
//     platform.textContent=games[i].platform;
//     score.textContent="Score: "+games[i].score;
//     genre.textContent="Genre: "+games[i].genre;
//     editors_choice.textContent=games[i].editors_choice;
//     release_year.textContent="Release Year: "+games[i].release_year;

//     if(document.getElementById("myInput").value==document.getElementsByTagName("h2")[i])

//     document.getElementById("result").appendChild(title);
//     document.getElementById("result").appendChild(platform);
//     document.getElementById("result").appendChild(score);
//     document.getElementById("result").appendChild(genre);
//     document.getElementById("result").appendChild(editors_choice);
//     document.getElementById("result").appendChild(release_year);
//     document.getElementById("result").appendChild(hr);
    
//   }
// }