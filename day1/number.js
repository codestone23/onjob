// homework number
// bai 1 - tinh the tich hinh cau

const sphericalVolume = (radius) => {
    if(radius > 0){
        return Math.round((4 / 3) * Math.PI * Math.pow(radius,3) * 100) / 100;
    }
    console.log("ban kinh khong hop le!")
}

let radius = 4;
console.log(sphericalVolume(radius));

// bai 2 - Tinh tong tat ca cac so nguyen nam giua chung

const sumNumber = (firstNumber,secondNumber) => {
    if(firstNumber >= secondNumber - 1){
        return 0;
    }
    let count = 0;
    for(let i = firstNumber + 1; i < secondNumber; i++){
        count += i;
    }
    return count;
}

let firstNumber = 3, secondNumber = 8;
console.log(sumNumber(firstNumber, secondNumber));

// bai 3 - kiem tra so nguyen to

const isPrime = (number) => {
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


let number1 = 4;
let number2 = 101;
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

let n = 3;
let cnt = 0;
if(n >= 2){
    cnt = 2;
    for(let i = 3; i <= n; i++){
        if(isPrime(i)){
            cnt += i;
        }
    }
    console.log(`tong cac so nguyen to nho hơn ${n} là ${cnt}`);
}else{
    console.log(`tong cac so nguyen to nho hơn ${n} là 0`);
}

// bai 5 - viet ham tinh tong tat ca cac uoc cua so do

let total = 0;

const totalDivisor = (num) =>{
    for(let i=1; i<=num/2; i++){
        let rel = num%i;
        if(num%i ==0){
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

let num = 30;
console.log(`tong uoc so cua ${num} bang ${totalDivisor(num)}`);


// bai 6 - viết hàm sắp xếp lại các chữ số 

const sortNumber = (number6) => {
    let arr = number6.toString().split("");
    arr.sort();
    let result = parseInt(arr.join(""));
    return result;
}

let number6 = 145500123;
console.log(`chu so nho nhat la ${sortNumber(number6)}`);

