// bài 1: viết hàm tìm ra số nhổ nhất trong các mảng số 

const minNumbers = (arr) => {
    let min = arr[0];
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

const max2Numbers = (arr) => {
    if(arr.length >= 2){
        arr.sort().reverse();
        return arr[1];
    }
}

// console.log(max2Numbers([2,1,3,4]))

// bài 3: viết hàm truyền vào một mảng tên học viên, sắp xếp lại bảng này theo chiều ngược của bảng chữ cái 

const sortStudents = (arr) => {
    return arr.sort().reverse();
}
console.log(sortStudents(["nam","hoa","tuan"]));

// bài 4: tính tổng các số chia hết cho 5 từ 0->100

const sumNumbers = () => {
    let total = 0;
    for(let i=5; i<=100; i+=5){
        total += i;
    }
    return total;
}

// bài 5: viết hàm truyền vào 1 mảng, đầu ra là mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

const divideForTwo = (arr) => {
    for (let i=0;i<arr.length;i++) {
        arr[i]/=2;
    }
    return arr;
}

// console.log(divideForTwo([2,4,6]))

// baì 6: viết hàm lọc ra các phần tủ cho độ dài lớn nhất



// bài 7: lấy một phần tử ngẫu nhiên từ mảng
// bài 8: viết chương trình đổi chỗ ngẫu nhiên giữa các phần tử trong mảng
// bài 9: tìm phần tử chung của 2 mảng
// bài 10: phần từ không xuất hiện ở cả 2 mảng
// bài 11: trả về tập con của một chuỗi
// bài 12: kiểm tra mảng xem có phải mảng tăng dần hay không
// bài 13: kiểm tra xem có phải mảng số lẻ giảm dần hay không
