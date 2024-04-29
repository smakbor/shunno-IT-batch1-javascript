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

// let studentInfo = [
//     {
//         name: "Jahid Hasan",
//         department: "Banking",
//         cgpa: 2.75,
//         roll: 324342342,
//         university: "RU",
//     },
//     {
//         name: "Yeakub Ali",
//         department: "Banking",
//         cgpa: 2.5,
//         roll: 324342342,
//         university: "RU",
//     },
//     {
//         name: "Mizanur Rahman",
//         department: "MGT",
//         cgpa: 3.35,
//         roll: 324342342,
//         university: "RU",
//     },
// ];
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

// let tShirtInfo = [
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 6,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 6,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 6,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 6,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 6,
//         material: "merino wool",
//         price: 23.7,
//     },
// ];

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

// let merinoTShirt = {
//     description: "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//     review: 0,
//     img: "merino.jpg",
//     variations: 7,
//     size: 6,
//     material: "merino wool",
//     price: 23.7,
// };

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

// const number = [3, 6, 75, 8, 9, 23, 45];

// const result = number.splice(2, 7, 67, 63, 12, 23);

// console.log(number);

// let merinoTShirt = {
//     description: "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//     review: 0,
//     img: "merino.jpg",
//     variations: 7,
//     size: 6,
//     material: "merino wool",
//     price: 23.7,
// };
// key = "description";

// for (let key in merinoTShirt) {
//     console.log(merinoTShirt[key]);
// }

const number = [3, 6, 75, 8, 9, 23, 45];

// let result = number.map((item) => {
//     return item * 2;
// });
// console.log(result);
// let tShirtInfo = [
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 5,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 6,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 3,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 7,
//         material: "merino wool",
//         price: 23.7,
//     },
//     {
//         description:
//             "Premium Grey Preparer organic Merino Wool Short Sleeve Men ",
//         review: 0,
//         img: "merino.jpg",
//         variations: 7,
//         size: 8,
//         material: "merino wool",
//         price: 23.7,
//     },
// ];

// const mapFunction = (arr, callback) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// };

// const myResult = mapFunction(number, (item) => {
//     return item * 2;
// });

// const multiplyByFive = mapFunction(number, (item) => {
//     return item * 5;
// });

// console.log(multiplyByFive);

// const result = mapFunction(tShirtInfo, (item) => {
//     if (item.size > 6) {
//         item.size = 10;
//     }
//     return item;
// });

// let result = tShirtInfo.map((item) => {
//     if (item.size > 6) {
//         item.size = 0;
//     }
//     return item;
// });

// console.log(result);

// let obj = {
//     name: "rahim",
//     age: 23,
//     nationality: "Bangladesh",
// };

// obj.name = "Karim";
// obj["cgpa"] = 3.4;
// console.log(obj);

// const abc = [2, 5, 6, 8];
// abc[2] = 10;
// abc[4] = 13;
// console.log(abc);

// interview quiestion 1
// let x = [4, 5, 7, 8, 3, 2][(0, 5, 3)];
// console.log(x);

// interview quiestion 1
// let bool1 = false;
// let bool2 = new Boolean(false);

// if (bool1) {
//     console.log("First boolean executed");
// }
// if (bool2) {
//     console.log("Second boolean executed");
// }

//// interview quiestion 3
// function CharCheck(char) {
//     return char.toUpperCase() === char;
// }

// console.log(CharCheck("A"));
// console.log(CharCheck("a"));
// console.log(CharCheck("b"));
// console.log(CharCheck("D"));

// interview quiestion 4
// const magicObj = {
//     val: 1,
//     get a() {
//         return this.val++;
//     },
// };
// console.log(magicObj.a);
// console.log(magicObj.a);
// console.log(magicObj.a);
// console.log(magicObj);

// // interview quiestion 5
// setTimeout(() => {
//     console.log("C");
// }, 0);
// (function () {
//     Promise.resolve().then(() => {
//         console.log("A");
//         Promise.resolve().then(() => {
//             console.log("B");
//         });
//     });
// })();
//////
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// // answer ===5,5,5,5,5

// let items = [5, 3, 7, 6, 2, 9];
// function swap(items, leftIndex, rightIndex) {
//     let temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     let pivot = items[Math.floor((right + left) / 2)]; //middle element
//     let i = left; //left pointer
//     let j = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     let index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) {
//             //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) {
//             //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// first call to quick sort
// let sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

// /////////////////////////////////////////////
// function swap(arr, left, right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
// }

// function partition(arr, left, right) {
//     // console.log(arr);
//     let pivot = arr[Math.floor((left + right) / 2)];
//     console.log(pivot);
//     let i = left;
//     let j = right;
//     while (i <= j) {
//         while (arr[i] < pivot) {
//             i++;
//         }
//         while (arr[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(arr, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(arr, left, right) {
//     let index;
//     if (arr.length > 1) {
//         index = partition(arr, left, right);

//         if (left < index - 1) {
//             quickSort(arr, left, index - 1);
//         }
//         if (right > index) {
//             quickSort(arr, index, right);
//         }
//     }
//     return arr;
// }

// const quickArr = [5, 8, 2, 9, 4, 6, 1, 7, 10, 3, 30, 15];
// const sortedArr = quickSort(quickArr, 0, quickArr.length - 1);
// console.log(sortedArr);

// const foo = async () => {
//     console.log("hello world");
// };
// const final = await foo();
// console.log(final);

const num = [2, 5, 8, 3, 4, 9, 10];

// console.log((num[2] = 11));

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }
// let age = 24;

// function printElement(arr) {
//     console.log(age);
//     let name = "Rahim";
//     console.log(name);
//     console.log("Hello world");
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//     }
// }
// printElement(num);
// console.log(age);
// console.log(name);

// start index (included)
//end index (excluded)

// let res = num.slice(0, 4);
// console.log(res);
// console.log(num);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const spliced = fruits.splice(2, 1, "Lemon", "Kiwi");
// console.log(spliced);
// console.log(fruits);

// function sum() {
//     console.log("This is sum function");
// }

// function Calculator() {
//     console.log("This is Calc function");
//     sum();
// }

// console.log(Calculator());

// const arr = new Array(4)
//     .fill({ deviceCode: "0122", mac: "543298572", sn: "100" })
//     .map((item) => {
//         console.log(item);
//     });
// // console.log(arr);

// function removeEmptyValue(obj) {
//     const newObj = {};

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key) && obj[key] !== "") {
//             newObj[key] = obj[key];
//         }
//     }

//     return newObj;
// }

// const info = { name: "Akbor", age: 23, capa: "" };
// const result = removeEmptyValue(info);

// console.log(result);

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

// const findIndices = (arr, target) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 result.push(i, j);
//             }
//         }
//     }
//     return result;
// };

// console.log(findIndices([2, 5, 6, 7, 10], 7));

// const findMedian = (arr1, arr2) => {
//     const m = arr1.length;
//     const n = arr2.length;
//     const resultArr = arr1.concat(arr2);
//     let sum = 0;
//     for (let i = 0; i < resultArr.length; i++) {
//         sum += resultArr[i];
//     }
//     const median = sum / (m + n);
//     return median;
// };
// console.log(findMedian([1, 3], [2, 7]));

// const str = "Dear SM Akbor. Your Bill amount is {{bill.amount}}";
// const find = str.includes("{{bill.amount}}");
// console.log(find);

const firstFunction = () => {
    return "this is first function";
};
const secondFunction = () => {
    return "this is second function";
};

const message = firstFunction() || secondFunction();
console.log(message);
