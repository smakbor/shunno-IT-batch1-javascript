// JavaScript has 8 Datatypes
// 1. String   -->" "
// 2. Number  132313
// 3. Bigint --->
// 4. Boolean ---> true/false
// 5. Undefined
// 6. Null
// 7. Symbol -->
// 8. Object--->

// The Object Datatype
// The object data type can contain:

// 1. An object ---> {name:"Akbor",age:24}
// 2. An array---->[2,3,4,7,9,3]  [ {name:"Akbor",age:24},{name:"Akbor",age:24},true,34,35,null,undefined,[3,45,6,53],"Masrafee"]
// 3. A date  --->

const studentInformation = {
    name: "SM Akbor",
    department: "Management Studies",
    roll: 424242341,
    CGPA: 2.0,
    hobby: ["cricket", "gardening", "wathing Movie", "Programming"],
    eat: function () {
        return `${this.name} loves eating!😊`;
    },
};

// studentInformation.nationality = "Indian";
// console.log(studentInformation);
// // console.log(studentInformation.eat());

// object er moddhe value thake   {key:value}

// R for Read
// C for Create
// U for Update
// D for Delete

// CRUD

// const watchInfo = {
//     name: "Bangle Watch",
//     title: "Anne Klein Women's Genuine Diamond Dial Bangle Watch",
//     rating: 4.6,
//     price: 27,
//     description:
//         "Available at a lower price from other sellers that may not offer free Prime shipping.",
//     img: "https://m.media-amazon.com/images/I/71QDsaFZF9L._AC_SL1500_.jpg",
//     brand: "Simple Modern",
//     color: "black",
//     specialFeature:
//         "Leak Resistant, Dishwasher Safe, Vacuum Insulated, Cupholder Friendly, Handle",
// };

// const fn1 = (callback) => {
//     let x = 35;
//     let extraNum = callback(x)["c"] + 10;
//     console.log(extraNum);
// };
// const fn2 = (num) => {
//     let newNum = num + 5;
//     return {
//         b: newNum,
//         c: 70,
//     };
// };

// fn1(fn2);
