//array er moddhe access kora jay 2 vabe ...
//1--> looping
//2--> dynamic access

// const number = [2, 3, 4, 7, 8, 4, 12];
// // console.log(number.length - 1);

// console.log(number[4]);
// // for(initialization;condition;increment){
// //     // code execution block
// // }

// for (let index = 0; index < number.length; index++) {
//     console.log(number[index]);
// }

// const num = [3, 6, 7, 4, 90, 23, 14, 45];
// const result = num.slice(1, 5);
// console.log(result);
// console.log(num);

function printName(name) {
    let x = 10;
    let y = 5;
    let z = x + y;
    console.log(z);
    console.log(name);
}
// printName("Mehrab Hossen");

// function myFunc(p1, p2) {
//     const sum = p1 + p2;
//     return sum;
// }
// const result = myFunc(5, 3);
// const result2 = myFunc(6, 8);
// console.log(result);
// console.log(result2);

// const bikeName = ["R15", "Suzuki", "Discover", "Yamaha", "RX-5", "Honda"];

// function printBikeName(bikeArr) {
//     for (let index = 0; index < bikeArr.length; index++) {
//         console.log(bikeArr[index]);
//     }
// }
// printBikeName(bikeName);

// const number = [3, 6, 9, 23, 13, 45, 67, 78];

// number.forEach((item) => console.log(item));

// function subFunction(p1, p2) {
//     const sum = p1 + p2;
//     return sum;
// }

// function mainFunction() {
//     let x = 10;
//     let y = 5;

//     return subFunction(x, y);
// }

// const result = mainFunction();
// console.log(result);

// let number = [4, 6, 8, 9, 12, 11];

// function sum(item) {
//     console.log(item + 6);
// }

// function mapFunction(arr, callback) {
//     let el = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // let count = callback();
//         // el.push(callback(arr[i]));
//         el = callback(arr[i]);
//     }
//     return el;
// }

// let result = mapFunction(number, sum);
// console.log(result);

// data type

// let name = "Rahim";

// let number = 8;
// function studentName(num) {
//     // parameter receive korte hoy
//     // console.log(num);
//     //code execution block
//     let y = 7;
//     // console.log(number);
//     let info = {
//         name: "rahim",
//         age: 23,
//     };

//     return info;
// }

// console.log(number);

// let result = studentName(); //argument pass korte hoy
// console.log(result["age"]);

// let akbor = {
//     age: 25,
//     roll: 12231,
//     cgpa: 3.0,
//     weight: 50,
//     favColor: "white",
// };

// let Yeakub = {
//     age: 25,
//     roll: 231412,
//     cgpa: 3.04,
//     weight: 55,
//     favColor: "red",
// };

//callback function

function parentFunction(callback) {
    let x = 4;
    let y = 7;
    return callback(x, y);
}

function childFunction(p1, p2) {
    let sum = p1 + p2;
    console.log(sum);
}

// parentFunction(childFunction);

let shamimChatrabas = {
    name: "Shamim Chatrabas",
    colour: "White",
    rooms: 5,
    windows: 7,
    toilets: 2,
    isGirl: false,
};
// console.log(shamimChatrabas);

let jalilChatrabas = {
    name: "Jalil Chatrabas",
    rooms: 5,
    toilets: 2,
    windows: 5,
    colour: "White",
    isGirl: false,
};

let gofurMonjil = {
    name: "Gofur Monjil",
    rooms: 14,
    toilets: 6,
    colour: "Black White",
    windows: 14,
    isGirl: true,
};

let motiHoll = {
    name: "Moti Holl",
    rooms: 30,
    windows: 45,
    toilets: 18,
    colour: "Blue White",
    isGirl: false,
};

const massInfo = [
    {
        name: "Shamim Chatrabas",
        colour: "White",
        rooms: 5,
        windows: 7,
        toilets: 2,
        isGirl: false,
    },
    {
        name: "Jalil Chatrabas",
        rooms: 5,
        toilets: 2,
        windows: 5,
        colour: "White",
        isGirl: false,
    },
    {
        name: "Jalil Chatrabas",
        rooms: 5,
        toilets: 2,
        windows: 5,
        colour: "White",
        isGirl: false,
    },
    {
        name: "Moti Holl",
        rooms: 30,
        windows: 45,
        toilets: 18,
        colour: "Blue White",
        isGirl: false,
    },
];

const jahid = {
    name: "Jahid Hasan",
    department: "Banking",
    cgpa: 2.75,
    roll: 324342342,
    university: "RU",
};

let yeakub = {
    name: "Yeakub Ali",
    department: "Banking",
    cgpa: 2.5,
    roll: 324342342,
    university: "RU",
};

let mizan = {
    name: "Mizanur Rahman",
    department: "MGT",
    cgpa: 3.35,
    roll: 324342342,
    university: "RU",
};

let studentInfo = [
    {
        name: "Jahid Hasan",
        department: "Banking",
        cgpa: 2.75,
        roll: 324342342,
        university: "RU",
    },
    {
        name: "Yeakub Ali",
        department: "Banking",
        cgpa: 2.5,
        roll: 324342342,
        university: "RU",
    },
    {
        name: "Mizanur Rahman",
        department: "MGT",
        cgpa: 3.35,
        roll: 324342342,
        university: "RU",
    },
];
// console.log(studentInfo[2]);
// console.log(studentInfo[1]);
// console.log(studentInfo[0]);

// console.log(studentInfo.length);
// console.log(massInfo.length);

// index < length;

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//array 2 ta concept
//1-> index
//2-> element

// array er moddhe 2 vabe access kora jay
// 1--> dynamic access
// 2--> loop like for loop, while loop
// studentInfo[2]={
//     name: 'Mizanur Rahman',
//     department: 'MGT',
//     cgpa: 3.35,
//     roll: 324342342,
//     university: 'RU'
//   }

// const number = [3, 6, 8, 7, 5, 2, 9];
// console.log(number[3]);
// number[3] = 7;

let tShirtInfo = [
    {
        description:
            "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
        review: 0,
        img: "merino.jpg",
        variations: 7,
        size: 6,
        material: "merino wool",
        price: 23.7,
    },
    {
        description:
            "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
        review: 0,
        img: "merino.jpg",
        variations: 7,
        size: 6,
        material: "merino wool",
        price: 23.7,
    },
    {
        description:
            "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
        review: 0,
        img: "merino.jpg",
        variations: 7,
        size: 6,
        material: "merino wool",
        price: 23.7,
    },
    {
        description:
            "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
        review: 0,
        img: "merino.jpg",
        variations: 7,
        size: 6,
        material: "merino wool",
        price: 23.7,
    },
    {
        description:
            "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
        review: 0,
        img: "merino.jpg",
        variations: 7,
        size: 6,
        material: "merino wool",
        price: 23.7,
    },
];

// console.log(tShirtInfo[0]);
// console.log(tShirtInfo[1]);
// console.log(tShirtInfo[2]);
// console.log(tShirtInfo[3]);

// for (let index = 0; index < tShirtInfo.length; index++) {
//     //code execution block
//     console.log(tShirtInfo[index]);
// }

// let a = {
//     name: "Fatfish",
//     toString() {
//         return "medium";
//     },
// };
// if (a == "medium") {
//     console.log("hello world");
// }

// function findDescription(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         return arr[i].description;
//     }
// }
// let result = findDescription(tShirtInfo);
// console.log(result);

let merinoTShirt = {
    description: "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
    review: 0,
    img: "merino.jpg",
    variations: 7,
    size: 6,
    material: "merino wool",
    price: 23.7,
};

// for (key in merinoTShirt) {
//     console.log(typeof key);
//     console.log(merinoTShirt[key]);
// }

// const number = [3, 6, 75, 8, 9, 23, 45];

// let result = number.slice(0, 4);
// console.log(result);
// console.log(number);

// const number = [3, 6, 75, 8, 9, 23, 45];

// const myFunc = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// };

// myFunc(number, (el) => {
//     console.log(el * 2);
// });

// console.log("???");

// myFunc(number, (el) => {
//     console.log(el + 5);
// });
// console.log("???");
// myFunc(number, (el) => {
//     console.log(el - 2);
// });

// let a = 5;
// let b = 5;
// console.log(a == b);
// let d = {}; //reference 001
// let x = d; ///reference 001
// console.log(x == d);
// x = {}; //009

// let e = {}; //reference 002
// console.log(d == e);
// let f = [5]; //reference 005
// let g = [5]; //reference 007
// console.log(f == g);
