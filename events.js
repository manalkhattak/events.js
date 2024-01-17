// events.html
function myCode(){
    document.write('Hello I am a response to an event.')
}

// button.html
function adding(a,b){
    document.write(`Sum of the Two Numbers ${a} and ${b} is <br> ${a+b}.`)
}

function subtracting(a,b){
    document.write(`Difference of the Two Numbers ${a} and ${b} is <br> ${a-b}.`)
}

function multiplying(a,b){
    document.write(`Product of the Two Numbers ${a} and ${b} is <br> ${a*b}.`)
}

function findSum(arr){
    var sum = 0
    for (a=0; a<arr.length; a++){
        sum += arr[a]
    }
    document.write(`The sum of the Array ${arr} is ${sum}.`)
}

// event-field.html
function makeFieldYellow(){
    this.style.backgroundColor='yellow'
}

function makeFieldWhite(){
    this.style.backgroundColor='white'
}

// reading-field-values.html
let emails = ['manalmasood828@gmail.com','azanmasood707@gmail.com','suhiii@gmail.com','fizza123@gmail.com']
let passwords = ['123444','nothing','helloworld','blahblah']

function checkAddress(email,pass){
    let userEmail = document.getElementById(email).value
    let userPass = document.getElementById(pass).value
    if (userEmail !== "" && userPass !==""){

        if (emails.includes(userEmail) && passwords.includes(userPass)){

        if (emails.indexOf(userEmail) == passwords.indexOf(userPass)){
            
            document.write(`Welcome ${userEmail}`)
        }
        else{

            document.write("Invalid Email Address or Password.")
        }
        }  
        else{

            alert("Invalid Email Address or Password.")
        }  
    }
    else{
        alert("Please enter your email address .")
    }
}

// setting field values
function fillCity(){

    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch(zipEntered){
        case "60608" :
            cityName = "Chicago";
            break;
        case "68114" :
            cityName = "Omaha";
            break;
        case "53212" :
            cityName = "Milwaukee";
            break;
        default :
            cityName = "Peshawar";
    }
    document.getElementById("city").value = cityName;
}