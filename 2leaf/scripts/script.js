(function(){

$(window).load(function(){
	"use strict";


const imageCount= $("#slider ul li").length;
const imageWidth = $("#slider ul li:first img").width();
const totalWidth= (imageCount+imageWidth)+"px";
//alert(totalWidth);

let leftPosition=0;
let counter=0;


$("#slider ul").css("width", totalWidth);


	let mySlider = setInterval( slider, 1000);
	$("#slider").mouseover(function(){clearInterval(mySlider) });
	$("#slider").mouseout(function(){mySlider=setInterval(slider, 5000); });
	$("#slider").css("cursor", "grab");
	
	function slider(){
	counter++;
	
	if(counter == imageCount){ counter=0;}
	leftPosition = `-${counter * imageWidth}px`;
	$("#slider ul").animate({left: leftPosition}, 3000, "easeInQuad");

	}
	
	





});



}());