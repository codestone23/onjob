// bài 1: viết 1 hàm js để lấy ngày hiện tại

const getCurrentDate = (item : string) : string => {
    let date: Date = new Date(Date.now());
    let day:string= date.getDate().toString();
    if(day.length === 1) day = '0' + day;
    let month: string = (date.getMonth() + 1).toString();
    if(month.length === 1) month = '0' + month;
    let year: string = date.getFullYear().toString();
    return day + item + month + item + year;
}

console.log(getCurrentDate("/"));

// bài 2: viết 1 hàm để lấy số ngày trong 1 tháng

const getDaysInMonth = (month: number, year: number) : number => {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(4,2024));

// bài 3: kiểm tra xem 1 ngày có phải là ngày cuối tuần hay không

const checkDayInWeek = () : boolean => {
    let day: number = new Date().getDay();
    if(day === 0 || day === 6) return true;
    return false;
}

console.log(checkDayInWeek());

// bài 4: trả về số phút theo giờ và phút

const getMinusByHourAndMinus = () : number => {
    let date: Date = new Date();
    let minus: number = date.getMinutes();
    let hour: number = date.getHours();
    return minus + hour*60;
}

console.log(getMinusByHourAndMinus());

// bài 5: đếm số ngày đã trôi qua từ đầu năm

const getDaysPassedInYear = () : number => {
    let date: Date = new Date();
    let startDay: number = new Date(date.getFullYear(),0,0).getTime();
    let currentDay: number = date.getTime();
    let timePassed: number = currentDay - startDay;
    return Math.floor(timePassed / ( 1000 * 60 * 60 * 24));
}

console.log(getDaysPassedInYear());

// bài 6: tính tuổi

const calculate_age = (date: Date) : number => {
    let time: number = Date.now() - date.getTime();
    let age: Date = new Date(time);
    return Math.abs(age.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1982,11,4)));

// bài 7: lấy ngày bắt đầu tuần

const startOfWeek = (dt: Date) : number => {
    let day: number = dt.getDay();
    let currentDate: Date = new Date(dt);
    let diff: number = currentDate.getDate() - day + (day === 0 ? -6 : 1);
    let dayStartWeek: number = new Date(currentDate.setDate(diff)).getDate();
    return dayStartWeek;
}

console.log(startOfWeek(new Date()));

// bài 8: lấy ngày kết thúc tháng

// const endOfMonth = (dt: Date) : number => {
//     let currentDate: Date = new Date(dt);
//     let month: number = dt.getMonth();
//     let currentMonth: number = new Date(currentDate.getFullYear(),month,1).getTime();
//     let nextMonth: number = new Date(currentDate.getFullYear(),month+1,1).getTime();
//     let dayEndMonth: number = Math.floor((nextMonth - currentMonth) / (1000 * 60 * 60 * 24));
//     return month;
// }

console.log(getDaysInMonth(4,2024));

// bài 9: viết hàm đếm ngược thời gian đến tết dương lịch

const downTime = () : void => {
    let date: Date = new Date(Date.now());
    let nextYear: Date = new Date(date.getFullYear()+1,0,1);
    let timeDiff: number = nextYear.getTime() - date.getTime();
    let days: number = Math.floor(timeDiff/(1000 * 60 * 60 * 24));
    let hours: number = Math.floor(timeDiff%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes: number = Math.floor(timeDiff%(1000 * 60 * 60)/(1000 * 60 ));
    let seconds: number = Math.floor(timeDiff%(1000 * 60) / 1000);
    console.log(`Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây nữa là đến Tết ${nextYear.getFullYear()}`)
}

downTime();

// bài 10: trả về 1 chuỗi biểu bị thời gian sau x giây kể từ thời điểm t

const getTimes = (currentTime: string, afterSeconds: number ): string => {
    let currentDate: Date = new Date();
    let arrTime: string[] =  currentTime.split(':');
    currentDate.setHours(parseInt(arrTime[0]));
    currentDate.setMinutes(parseInt(arrTime[1]));
    currentDate.setSeconds(parseInt(arrTime[2]));
    let afterTime: Date = new Date(currentDate.getTime() + afterSeconds*1000);
    return afterTime.getHours() + ':' + afterTime.getMinutes() + ':' + afterTime.getSeconds();
} 
console.log(getTimes("9:20:56",7));

// bài 11: viết hàm reset data 

type Obj = {
    name: string;
    age: number;
    isStatus: boolean;
    a:{
        a: number[];
        b: {
            c: number
        }
    };
    c: string[]
}

const obj: Obj = {
    name: "trung",
    age: 18,
    isStatus: true,
    a: {
        a: [1,2,3],
        b: {
            c: 2
        },
    },
    c: ['a','b','c']
}

const ResetData = (obj: Obj) : Obj => {
    obj.name = "";
    obj.age = 0;
    obj.isStatus = false;
    obj.a.a = Array(obj.a.a.length).fill(0);
    obj.a.b.c = 0;
    obj.c = Array(obj.c.length).fill('');
    return obj;
}

console.log(ResetData(obj));


