function getinput(){
	return document.getElementById("enter").innerText;

}
function printinput(num){
	document.getElementById("enter").innerText=num;
}
function printoutput(num){
	if(num==""){
			document.getElementById("out").innerText=num;

	}
	else{
			document.getElementById("out").innerText=rediblity(num);

	}
}

function getout(){
	return document.getElementById("out").innerText;

}


function reverse(num){
	return Number(num.replace(/,/g,''));
}


function rediblity(num){
	var n=Number(num);
	var value = n.toLocaleString("en");
	return value;
}


var operator= document.getElementsByClassName("operator");
 for(let i=0;i<operator.length;i++){
 	operator[i].addEventListener('click',function(){

 		if(this.id=='back'){
 			var output=reverse(getout()).toString();
 			if(output){
 				output = output.substr(0,output.length-1);
 				printoutput(output);
 			}
 		}
 		else if(this.id=='c'){
 			printoutput("");
 			printinput("");
 		}
 		 else{
 		 	var history=getinput();
 		 	var output=getout();
 		 	if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverse(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printoutput(result);
					printinput("");
				}
				else{
					history=history+this.id;
					printinput(history);
					printoutput("");
				}
			}
 		 }
 	})
 }

 var digit= document.getElementsByClassName('number');
 for(let i=0;i<11;i++){
 	digit[i].addEventListener('click',function(){
 			var digit1= reverse(getout());

 			if(digit1!=NaN){
 			digit1=digit1+this.id;
 			printoutput(digit1);
 		}
 	})
 }

