/** JavaScript
 * File create date: 19/02/2022
 * Author: Julián López
 * Aim: Add elements to HTML file and listtening events
 * References: 
 * https://guias.makeitreal.camp/javascript-browser/manipulando-html
 * https://www.w3schools.com/jsref/met_element_getelementsbyclassname.asp
 * 
 */

console.log(document.title); // get the document title, in this case JS-HTML

var list = document.getElementsByClassName("headerTitle");
console.log(list[0].outerText)
