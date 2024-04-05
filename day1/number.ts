// homework number
// bai 1 - tinh the tich hinh cau

const sphericalVolume = (radius : number) : number | void => {
    if(radius > 0){
        return Math.round((4 / 3) * Math.PI * Math.pow(radius,3) * 100) / 100;
    }
    console.log("ban kinh khong hop le!")
}

let radius : number = 4;
console.log(sphericalVolume(radius));

// bai 2 - Tinh tong tat ca cac so nguyen nam giua chung

const sumNumber = (firstNumber : number,secondNumber : number) : number => {
    if(firstNumber > secondNumber){
        [firstNumber, secondNumber] = [secondNumber, firstNumber]
    }
    let count : number = 0;
    for(let i = firstNumber + 1; i < secondNumber; i++){
        count += i;
    }
    return count;
}

let firstNumber: number = 8, secondNumber: number = 2;
console.log(sumNumber(firstNumber, secondNumber));

// bai 3 - kiem tra so nguyen to

const isPrime = (number : number) : boolean => {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


let number1: number = 4;
let number2: number = 101;
if(isPrime(number1)){
    console.log("number1 is prime");
}else{
    console.log("number1 is not prime");
}
if(isPrime(number2)){
    console.log("number2 is prime");
}else{
    console.log("number2 is not prime");
}

// bai 4 - tong cac so nguyen to nho hon n

let nu : number = 3;
let cnt: number = 0;
if(nu >= 2){
    cnt = 2;
    for(let i = 3; i <= nu; i++){
        if(isPrime(i)){
            cnt += i;
        }
    }
    console.log(`tong cac so nguyen to nho hơn ${nu} là ${cnt}`);
}else{
    console.log(`tong cac so nguyen to nho hơn ${nu} là 0`);
}

// bai 5 - viet ham tinh tong tat ca cac uoc cua so do

let total: number = 0;

const totalDivisor = (num : number) =>{
    for(let i=1; i <= Math.sqrt(num); i++){
        let rel: number = num / i;
        
        if(num%i == 0){
            total += i;
        }
        if(num%rel == 0){
            total += rel;
        }
        if(i == rel){
            total -= i;
        }
    }
    
    return total;
}

let num: number = 36;
console.log(`tong uoc so cua ${num} bang ${totalDivisor(num)}`);


// bai 6 - viết hàm sắp xếp lại các chữ số 

const sortNumber = (number6 : number) : number => {
    let arr : string[] = number6.toString().split("");
    arr.sort();
    let result = parseInt(arr.join(""));
    return result;
}

let number6: number = 145500123;
console.log(`chu so nho nhat la ${sortNumber(number6)}`);

