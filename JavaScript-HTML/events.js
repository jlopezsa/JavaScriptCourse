/** JavaScript
 * File create date: 19/02/2022
 * Author: Julián López
 * Aim: Add elements to HTML file and listtening events
 * References: 
 * https://guias.makeitreal.camp/javascript-browser/manipulando-html
 * https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp
 * https://jquery.com/
 * 
 */

console.log(document.title); // get the document title, in this case JS-HTML

var list = document.getElementsByClassName("headerTitle");
console.log(list[0].outerText);

jQuery('Body').append("<h2>Hi JJLS</h2>");

$('Body').append("<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis et officia ipsa esse excepturi? Eaque similique ea delectus aspernatur vero aliquid itaque atque voluptate, quisquam hic deleniti quos modi impedit?</p>")

$('Body').append("<h2>This is another subtitle</h2>")

$('Body').append("<p>a daskd kals lkdajs lkdjaslk djalksj lkaj </p>")

//------------ Listenin events ------------
$('p').on('click', function(){
alert("Click sobre parrafo")
});