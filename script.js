let container = document.querySelector(".form");
let calculate = document.querySelector("#calculate");
let div = document.createElement("p");
calculate.addEventListener("click",()=>{
    div.innerText =""
    let amount=document.querySelector('#billAmount').value;
    let totalPeople = document.getElementById("totalPeople").value;
  
    var service = document.getElementById("review").value;
    div.innerText = ` Tip Amount is ${amount*service/totalPeople}`
    // console.log(div);
    container.appendChild(div);

   
});