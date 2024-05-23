// document.getElementById("hedding").innerText = "change";
// document.getElementById("hedding").style.color = "blue";

// //alert("set alert");
// console.log("test");
// console.error("ado awlak wela");

// document.write("test")

// var number1 = 10;
// var number2 = 20;

// var total = 0;

// total = number1 + number2;
// //console.log(total);
// document.getElementById("total").innerText = "total : " + total;

// var numbre1 = 5;
// var number2 = 10;

// function sum() {
//     console.log(numbre1 + number2);
// }

// sum();

// let text = '';
// let number1 = 10;
// let number2 = 20;
// let number3 = 30;
// let number4 = 40;

// while (number < 10) {
//     console.log(number);
//     number++;
// }

// do {
//     console.log("here working");
//     number++;
// }
// while (number > 10);
// function name() {
//     while (number >= 0) {
//         console.log(number1);
//         number1--;
//     }

//     console.log("light off");
// }

// name();


// let total = 0;

// function addNumber(num1, num2) {
//     total = num1 + num2;
//     return total;
// }

// console.log(addNumber(number1, number2))

// const userName = 'chrishan'

// function getUsername(name) {
//     return "hello " + name + " welcome"
// }
// const meg = getUsername(userName)
// console.log(meg)

// const x = 10
// const y = 20

// const a = function () { return x + y }
// console.log(a())

// const userName = "chrishan"

// function createMeg(name) {
//     console.log("hello " + name + " welcome to the system")
// }

// let total = myFunction(5, 6)

// console.log(total)
// document.getElementById("number").innerHTML = total
// function myFunction(num1, num2) {
//     return num1 + num2
// }

// const fristName = "chrishan"

// function createName(name) {
//     console.log("hello " + name + " hi")
//     //alert('hello awada ithin')
// }

// new method
// const names = ['kalpana', 'udara', 'chrishan']

// // old method
// const names1 = new Array('kalpana', 'udara', 'chrishan')

// function getValue() {
//     for (let i = 0; i < 3; i++) {
//         console.log(names1[i])
//     }
// }

// console.log(getValue())

// const number = [1, 2, 3, 4, 5]

// console.log(number);

// number.forEach(myFunction)

// function myFunction(value, index, Array) {
//     //console.log(value, index, Array);
//     Array[index] = value * 2
// }

// console.log(number);

// const number = [1, 2, 'three', 4, 5]

// try {
//     number.forEach((value) => {
//         if (typeof value !== 'number') {
//             throw new Error("invalid number")
//         }
//         console.log(value);
//     })
// }
// catch (error) {
//     console.error(error.message);
// }


// name : chrishan, age: 27
// name : sanjeewa, age: 28
// name : kalpana, age: 30

// const presons = [
//     { presonName: "chrishan", age: 28 },
//     { presonName: "shani", age: 27 },
//     { presonName: "sanjeewa", age: 26 },
//     { presonName: "wanasighe", age: 30 },
//     { presonName: "kalpana", age: 29 },
//     { presonName: "gayan", age: 22 },
// ]

// presons.forEach((newvalue) => {
//     // console.log(newvalue);
//     console.log(newvalue.age)
// })

// const para = [
//     'hello javascript', 'this is my code'
// ]

// const words = para.flatMap((sentence) => {
//     // console.log(sentence);
//     return sentence.split(' ')
// })

// console.log(words);

// const car = { modelName: 'nisan', carColor: 'green', carCapacity: 1500 }


// car.owner = 'chrishan' // add property

// delete car.owner // delect property

// console.log(car)

// document.getElementById('hedding').style.fontSize = '40px'
// console.log(document.getElementById('hedding'))

// document.getElementsByTagName('h1')[0].style.color = 'blue'
// console.log(document.getElementsByTagName('h1'))


// const headTag = [...document.getElementsByTagName('h1')]

// console.log(headTag)

// headTag.map((tag) => {
//     tag.style.color = 'red'
// })

function getData() {
    // console.log("test the button");
    //document.getElementsByTagName('h1')[0].style.color = 'red'
    const name = document.getElementById('personName').value
    const email = document.getElementById('personEmail').value

    if (name === "" || email === "") {
        alert("please Fill all inputs")
        return
    }

    const sendNameToHtml = "Your Name is " + name + " and Your Email is " + email
    console.log(sendNameToHtml);

    document.getElementById('outputName').innerHTML = sendNameToHtml


}