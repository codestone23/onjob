// homework string
// bai 1 - kiem tra 1 chuoi co nam trong chuoi con lai hay khong

const checkStringExist = (str1,str2) => {
    let arr1 = str1.split(" ");
    return arr1.includes(str2);
}

let str1 = "Amela A Beta";
let str2 = "B";
console.log(checkStringExist(str1,str2));

// bai 2 - viet ham rut ngan chuoi

const shortenString = (str) => {
    let relString = str.substring(0,8) + '...';
    return relString;
}

let str = "Xin chao cac ban";
console.log(`Chuoi thay the la: ${shortenString(str)}`)

// bai 3 - viet ham sao chep chuoi do len 10 lan

const repeatStr = (str) => {
    return str.repeat(10);
}

let str3 = "ABC";
console.log(repeatStr(str3));

// bai 4 - viet ham sao chep chuoi len 10 lan cach nhau boi dau gach ngang


const repeatString = (str) => {
    let arr = [];
    for(let i=0; i< 10; i++){
        arr.push(str);
    }
    return arr.join('-');

    // return Array(10).fill(str).join("-");
}

let str4 = "ABC";
console.log(repeatString(str4));

// bai 5 - viet ham sao chep chuoi len n lan cach nhau boi dau gach ngang

const repeatStringN = (str,number) => {
    let arr = [];
    for(let i=0; i< number; i++){
        arr.push(str);
    }
    return arr.join('-');

    // return Array(number).fill(str).join("-");
}

let str5 = "ABC";
let n = 6
console.log(repeatStringN(str5,n));

// bai 6 - viet ham dao nguoc chuoi

const reverseString = (str) =>{
    return str.split("").reverse().join("");
}

let str6 = "hello world";
console.log(`dao nguoc chuoi cua str6 la: ${reverseString(str6)}`);

// bai 7 - viet ham check doi xung

const checkSymmetry = (str) => {
    let replaceStr = str.replace(/\s+/g, "").split("").reverse().join("");
    return replaceStr === str.replace(/\s+/g, "");
}

let str7 = "Race car";
console.log(checkSymmetry(str7.toLowerCase()));

// bai 8 - viet ham kiem tra xem chuoi co viet hoa hay khong 

const checkUpperCase = (str) => {
    return str === str.toUpperCase();
}

let str8 = "Hello World";
console.log(checkUpperCase(str8));