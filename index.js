document.addEventListener("DOMContentLoaded", function () {

const images = [
    {
        src: "Crimes-per-md.png", 
        caption: "This visualization shows the crimes per month color coded by day of the week."
    
    },
    {
        src: "Boston.png",
        caption: "This visualization shows the crime distribution throughout Boston."
    },
    {
        src: "District-types.png",
        caption: "This visualization shows the spread of type of crime per district."
    }
];
let currentViz = 0;
const vizImage = document.getElementById("vizImage");
const vizCaption = document.getElementById("vizCaption");
const nextViz = document.getElementById("nextViz");
if( vizImage && vizCaption && nextViz){
nextViz.addEventListener("click", showNextViz); }

function showNextViz() {
    currentViz = (currentViz + 1) % images.length;
    vizImage.src = images[currentViz].src;
    vizCaption.textContent = images[currentViz].caption;
}

});