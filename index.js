// document.addEventListener("DOMContentLoaded", function() {
//   theDomHasLoaded()
// });
 
// function theDomHasLoaded() {
//   document.getElementById( "text" )
//     .innerHTML = "This is really cool!";
// }
document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
   document.getElementById( "text" )
     .innerHTML = "This is really cool!";
}