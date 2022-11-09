function formdata() 
{
var firstname1= document.getElementById("fname").value;
var lastname1= document.getElementById("lname").value;
var email1= document.getElementById("email").value;
var Address1= document.getElementById("Address").value;
var city1= document.getElementById("city").value;
var province1= document.getElementById("province").value;
var PM= document.getElementById("PM").value;
var SM= document.getElementById("SM").value;
var BM= document.getElementById("BM").value;


if(document.getElementById('PM').checked){
    document.getElementById("output").innerHTML= "Full name: "+firstname1+ " " +lastname1 + "<br>"+ "Email: "+ email1+ "<br>"+ "Address :" + Address1 + " "+ city1+ " " +province1 + "<br>"+"Membership: Premium";

}
else if(document.getElementById('SM').checked ){
document.getElementById("output").innerHTML= "Full name: "+firstname1+ " " +lastname1 + "<br>"+ "Email: "+ email1+ "<br>"+ "Address :" + Address1 + " "+ city1+ " " +province1 + "<br>"+"Membership: Standard";

}
else if(document.getElementById('BM').checked){
document.getElementById("output").innerHTML= "Full name: "+firstname1+ " " +lastname1 + "<br>"+ "Email: "+ email1+ "<br>"+ "Address :" + Address1 + " "+ city1+ " " +province1 + "<br>"+ "Membership: Basic";
}
}

function myExcelFuns(){
    
    var  numberStr = document.getElementById("numbers").value
    if (numberStr==[]){
        alert('empty input field');
    }
    else{
        numberStr = numberStr.trim();
        
        var numberArr = numberStr.split(" ")
       
        var finalNumericArray = [];
        for (let i = 0; i < numberArr.length; i++) { 
            if (!(isNaN(numberArr[i]))) {
                finalNumericArray.push(parseInt(numberArr[i]));
            }
            
            
        }
        
        if(document.getElementById('AutoSum').checked){
            const reducer =(accumulator, curr) => accumulator + curr;
            document.getElementById("output").innerHTML= finalNumericArray.reduce(reducer);
        }
        if(document.getElementById('Average').checked){
            const average = finalNumericArray.reduce((a, b) => a + b, 0) / finalNumericArray.length;
            document.getElementById("output").innerHTML= average;
        }
        if(document.getElementById('Max').checked){
            document.getElementById("output").innerHTML = Math.max.apply(null, finalNumericArray);
        }
        if(document.getElementById('Min').checked){
            document.getElementById("output").innerHTML = Math.min.apply(null, finalNumericArray);
        }
    }
}