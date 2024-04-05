type User = {
    name : string;
    age : number;
    email: string;
}



const user: User = {
    name : "nguyen tien dat",
    age: 25,
    email: "tiendat@gmail.com"
}



// bài 1: viết hàm để lấy danh sách các key của object

const mapKeys = (obj : User): string[]=> {
    return Object.keys(obj);
}

console.log(mapKeys(user))

// bài 2: viết hàm để lấy danh sách các value của object

const mapValues = (obj: User) : (string | number)[] => {
    return Object.values(obj);
}

console.log(mapValues(user))

// bài 3: viết hàm để kiểm tra xem key có tồn tại trong object hay không

const checkKey = (obj : User, key : string | number) : boolean =>{
    return obj.hasOwnProperty(key);
}

console.log(checkKey(user,"address"));

// bài 4: kiểm tra xem object có độ dài bao nhiêu

const lengthObject = (obj : User) : number => {
    return Object.keys(obj).length;
}

console.log(lengthObject(user))

// bài 5: viết function lấy ra những user có tuổi lớn lớn 25 và isStatus  = true
type User1 = {
    name: string;
    age: number;
    isStatus: boolean;
}


const getUsers = (arr : User1[]) => {
    // let users = [];

    // for(let obj of arr){
    //     if(parseInt(obj.age) > 25 && obj.isStatus){
    //         users.push(obj);
    //     }
    // }
    // return users;
    return arr.filter((user) => user.isStatus == true && user.age > 25);
}

console.log(getUsers([{name:"dat", age:26,isStatus:true},{name:"da", age:26, isStatus:false}]))

