// homework string
// bai 1 - kiem tra 1 chuoi co nam trong chuoi con lai hay khong

const checkStringExist = (str1: string,str2: string) : boolean => {
    let arr1: string[] = str1.split(" ");
    console.log(arr1);
    return arr1.includes(str2);
}

let str1: string = "Amela A Beta";
let str2: string = "B";
console.log(checkStringExist(str1,str2));

// bai 2 - viet ham rut ngan chuoi

const shortenString = (str: string) => {
    let relString: string = str.substring(0,8) + '...';
    return relString;
}

let str: string = "Xin chao cac ban";
console.log(`Chuoi thay the la: ${shortenString(str)}`)

// bai 3 - viet ham sao chep chuoi do len 10 lan

const repeatStr = (st: string) : string => {
    return str.repeat(10);
}

let str3: string = "ABC";
console.log(repeatStr(str3));

// bai 4 - viet ham sao chep chuoi len 10 lan cach nhau boi dau gach ngang


const repeatString = (str : string): string => {
    let arr: string[] = [];
    for(let i=0; i< 10; i++){
        arr.push(str);
    }
    return arr.join('-');

    // return Array(10).fill(str).join("-");
}

let str4: string = "ABC";
console.log(repeatString(str4));

// bai 5 - viet ham sao chep chuoi len n lan cach nhau boi dau gach ngang

const repeatStringN = (str: string,number: number): string => {
    let arr: string[] = [];
    for(let i=0; i< number; i++){
        arr.push(str);
    }
    return arr.join('-');

    // return Array(number).fill(str).join("-");
}

let str5: string = "ABC";
let num5: number = 6
console.log(repeatStringN(str5,num5));

// bai 6 - viet ham dao nguoc chuoi

const reverseString = (str: string) : string =>{
    return str.split("").reverse().join("");
}

let str6: string = "hello world";
console.log(`dao nguoc chuoi cua str6 la: ${reverseString(str6)}`);

// bai 7 - viet ham check doi xung

const checkSymmetry = (str: string) : boolean => {
    let replaceStr = str.replace(/\s+/g, "").split("").reverse().join("");
    return replaceStr === str.replace(/\s+/g, "");
}

let str7 = "Race car";
console.log(checkSymmetry(str7.toLowerCase()));

// bai 8 - viet ham kiem tra xem chuoi co viet hoa hay khong 

const checkUpperCase = (str: string): boolean => {
    return str === str.toUpperCase();
}

let str8: string = "Hello World";
console.log(checkUpperCase(str8));