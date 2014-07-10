$(document).ready(function(){

$("#calButton").click(function(){

//store all input values
var MW = $('#MolWt').val();
var volume_raw = $('#Volume').val();
var conc_raw = $('#Conc').val();
var mass_raw = $("#Mass").val();

//store all selector decimal places
var volumeDec = $('#VolumeDec').val();
var massDec = $('#MassDec').val();
var concDec = $('#ConcDec').val();

//format numbers
var volume = Math.pow(10,volumeDec)*volume_raw;
var mass = Math.pow(10,massDec)*mass_raw;
var conc = Math.pow(10,concDec)*conc_raw;

//create a function that returns true if input is a number and not 0
function isNo(a){
	if (isNaN(a)||a==0){
	return false;
	}else{
	return true;
}
}

//create a function that returns true if input is 0
function isZero(a){
	if (a==0){
	return true;
	}else{
	return false;
	}
}

//function that format numbers back and select the right selector option
function selectorConvert(value){
		if (value < 1e-9)
	{return "-12";}
	else  if (value < 1e-6)
	{return "-9";}
	else if (value < 1e-3)
	{return "-6";}
	else if (value < 1)
	{return "-3";}
	else
	{return "0";}
}


//calculate mass, by default calculate mass if too many inputs

 if (isNo(volume) && isNo(conc) && isNo(MW)){
 
 
	valueOriginal = conc*volume*MW;
	newDec = selectorConvert(valueOriginal)*(-1);
	valueConverted = Math.pow(10,newDec)*valueOriginal;
	
	document.getElementById("Mass").value=Math.round(valueConverted*100)/100;
	document.getElementById("MassDec").value=selectorConvert(valueOriginal);
    
 }else if (isNo(mass) && isNo(volume) && isNo(MW)){ //calculate conc.
 
	valueOriginal = mass/(volume*MW);
	newDec = selectorConvert(valueOriginal)*(-1);
	valueConverted = Math.pow(10,newDec)*valueOriginal;
	
	document.getElementById("Conc").value=Math.round(valueConverted*100)/100;
	document.getElementById("ConcDec").value=selectorConvert(valueOriginal);
    
 }else if (isNo(mass) && isNo(conc) && isNo(MW)){ //calculate volume
 
	valueOriginal = mass/(conc*MW);
	newDec = selectorConvert(valueOriginal)*(-1);
	valueConverted = Math.pow(10,newDec)*valueOriginal;
	
	document.getElementById("Volume").value=Math.round(valueConverted*100)/100;
	document.getElementById("VolumeDec").value=selectorConvert(valueOriginal);
    
 }else if (isNo(mass) && isNo(conc) && isNo(volume)){ //calculate molar weight
 
	valueOriginal = mass/(conc*volume);
	document.getElementById("MolWt").value=Math.round(valueOriginal*100)/100;
    
 }else{
	alert("Not enough minerals!!!");
 }  
    
    
});


});


