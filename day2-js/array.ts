// bài 1: viết hàm tìm ra số nhổ nhất trong các mảng số 

const minNumbers = (arr: number[]) : number => {
    let min: number = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i];
    }
    return min;
}

// let minNumbers = (arr) => {
//     arr.sort();
//     return arr[0];
// }

// bài 2: viết hàm tìm ra số lớn thứ nhì trong các mảng số

const max2Numbers = (arr: number[]): number | void => {
    if(arr.length >= 2){
        arr.sort();
        let ans: number[] = [...new Set(arr)]
        // let ans: number = arr[arr.length - 1];
        // for(let i = arr.length - 2; i >= 0; i--){
        //     if(arr[i] < ans) {
        //         return arr[i];
        //     }
        // }
        return ans[1];
    }
}

console.log(max2Numbers([2,1,3,4,4]))

// bài 3: viết hàm truyền vào một mảng tên học viên, sắp xếp lại bảng này theo chiều ngược của bảng chữ cái 

const sortStudents = (arr: string[]) : string[] => {
    return arr.sort().reverse();
}
// console.log(sortStudents(["nam","hoa","tuan"]));

// bài 4: tính tổng các số chia hết cho 5 từ 0->100

const sumNumbers = () : number => {
    let total = 0;
    for(let i=5; i<=100; i+=5){
        total += i;
    }
    return total;
}

// bài 5: viết hàm truyền vào 1 mảng, đầu ra là mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

const divideForTwo = (arr : number[]) : number[] => {
    for (let i=0;i<arr.length;i++) {
        arr[i]/=2;
    }
    return arr;
}

// console.log(divideForTwo([2,4,6]))

// baì 6: viết hàm lọc ra các phần tủ cho độ dài lớn nhất

const showStringMaxLength = (arr: string[]) : string[] => {
    let len: number = arr[0].length;
    let ans: string[] = [arr[0]];
    for(let i=1;i<arr.length;i++) {
        if(len < arr[i].length){
            len = arr[i].length;
            ans = [];
            ans.push(arr[i]);
        }else if(len === arr[i].length){
            ans.push(arr[i]);
        }
    }

    return ans;
}

console.log(showStringMaxLength(['ab','aaa','ad','c','vcd']));

// bài 7: lấy một phần tử ngẫu nhiên từ mảng

const sample = (arr: number[]) : number => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// console.log(sample([3,7,9,11]))

// bài 8: viết chương trình đổi chỗ ngẫu nhiên giữa các phần tử trong mảng

const randomPosition = (arr: number[]) => {
    return arr.sort(function(){
        return 0.5 - Math.random();
    })
}
// 
// console.log(randomPosition([1,2,3,4,5]));

// bài 9: tìm phần tử chung của 2 mảng

const similarity = (arr1 : number[],arr2 : number[]) : number[]=> {
    // let arr = [];
    // for(let i = 0; i < arr2.length; i++) {
    //     if(arr1.includes(arr2[i])){
    //         arr.push(arr2[i]);
    //     }
    // }

    // return arr;
    return arr1.filter((i) => arr2.includes(i));
}

// console.log(similarity([1,2,3],[1,2,4]))

// bài 10: phần từ không xuất hiện ở cả 2 mảng

const symmetricDifference = (arr1 : number[],arr2: number[]) : number[] => {
    // let arr = [];
    // for(let i = 0; i < arr1.length; i++) {
    //     if(!arr2.includes(arr1[i])){
    //         arr.push(arr1[i]);
    //     }
    // }
    // for(let i = 0; i < arr2.length; i++) {
    //     if(!arr1.includes(arr2[i])){
    //         arr.push(arr2[i]);
    //     }
    // }
    // return arr.sort();
    return [...arr1.filter((i)=> !arr2.includes(i)),...arr2.filter((i)=> !arr1.includes(i))]
}

// console.log(symmetricDifference([1,2,4],[1,2,3]));

// bài 11: trả về tập con của một chuỗi

const sub_String = (str: string): string[] => {
    let arr:string[] = [];
    for(let i = 0; i < str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            arr.push(str.substring(i,j));
        }
    }
    return arr;
}

console.log(sub_String("dog"))


// bài 12: kiểm tra mảng xem có phải mảng tăng dần hay không

const increaseArray = (arr1: number[]): boolean => {
    let arr = [...arr1];
    arr1.sort();
    return JSON.stringify(arr1) === JSON.stringify(arr);
}

// console.log(increaseArray([1,6,4,5]));

// bài 13: kiểm tra xem có phải mảng số lẻ giảm dần hay không

const checkArray = (arr1: number[]) : boolean => {
    let arr: number[] = [...arr1];
    arr1.sort().reverse();
    let check: boolean = true;
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] %2 === 0){
            check = false;
            break;
        }
    }
    return JSON.stringify(arr1) === JSON.stringify(arr) && check;
    
}
// console.log(checkArray([7,5,3]))


