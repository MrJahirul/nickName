let myText;
document.getElementById("myButton").onclick=function(){
    myText=document.getElementById("nickName").value; 
    document.getElementById("styleText").innerHTML=myText;
}