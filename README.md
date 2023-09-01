# Tip Calculator

This is a simple HTML and JavaScript code that allows to Calculate Tip .

# Html File
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tip Calculator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
       
      <div class="form">
        <h2>Charles' Tip calculator!</h2>
        <br>
        <h3 class="h3">How Much Was Your Bill</h3>
        <div>Rs. <input type="text" id="billAmount" /></div>
        <br>
        <h3 class="h3">How was your service?</h3>
        <div>
        <select id="review">
            <option value="0" disabled="" selected="" >Choose an Option</option>
            <option value=".3">30% Outstanding</option>
            <option value=".2">20% Good</option>
            <option value=".15">15% It was Okay</option>
            <option value=".10">10% Bad</option>
            <option value=".05">5% Terrible</option>
          </select>
          </div>
          <br>
        <h3 class="h3">How many people are sharing the bill?</h3>
        <div> <input type="text" id="totalPeople" /></div>
        <br>
        <br>
        <button id="calculate">Calculate</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

# Css File
```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    width: 100vw;
    height: 100vh;
    background-image: url(cal\ img.jpg);
    background-size: cover ;
    align-items: center;
    padding: 4% 0%;
}
.form{
    width: 500px;
    height: 80vh;
    margin: auto;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1%;
    /*box-shadow: 10px 10px 1px 1px greenyellow;*/
}
h2{
    margin-bottom: 30px;
    color:rgb(162, 0, 0);
}
.h3{
    margin-top:30px;
    color:rgb(162, 0, 0);
}
button{
    margin-top: 20px;
    background-color:rgb(162, 0, 0);
    color:white;
}
p{
    margin-top: 30px;
}
```
# Js File
```
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
