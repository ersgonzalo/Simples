var input;
var submit = document.getElementById("btnSubmit");
var clear = document.getElementById("btnClear");
var oCharArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nCharArr = oCharArr.split("");

submit.onclick = function(){
	input = document.getElementById('txtANum').value;
	document.getElementById('numTotal').innerHTML = convertNumber(input);
	document.getElementById('numOriginal').innerHTML = input;
}

clear.onclick = function(){
	document.getElementById('txtANum').value = "";
	document.getElementById('numTotal').innerHTML = "";
	document.getElementById('numOriginal').innerHTML = "";
}

function convertNumber(iString){
	var stringToNum = 0;
	iString = iString.replace(/\s/g, '').toUpperCase();
	var toNums = iString.split("");
	for(i = 0; i < iString.length; i++){
		//checks if there are non-letters
		if (oCharArr.indexOf(toNums[i]) == -1){
			alert("Please use only letters!");
			return "error";
		}
		else {
			stringToNum += oCharArr.indexOf(toNums[i])+1;
		}
	}
	return stringToNum;
}

// console.log("Hello World!");
/*
check for input
split the string - check array
add them together
return number
*/