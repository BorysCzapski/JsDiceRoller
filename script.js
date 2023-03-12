var number = document.getElementById('output');

function myFunc(){
  var a;
  var elem = document.getElementById('square');
  elem.className += " " + "active";
  
  setTimeout(()=>{
    a = Math.floor(Math.random()*6);
    number.innerText = a;
    console.log(a)
    elem.classList.remove("active");
    console.log("removed");}, "2000"
  );
 
}

myFunc();