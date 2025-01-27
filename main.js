/*//String, Number, Boolean, Object, Array

//String
let firstname = "John"; //let คือการประกาศตัวแปร
const idcard = "1234"; //const คือค่าคงที่ ไม่สามารถเปลี่ยนแปลงค่าได้

console.log(firstname);
//Number
let age = 25;
let height = 5.9;

//Boolean
let isMarried = false;
firstname = "xxx";
idcard = "5678";
console.log("my name is", firstname, "and i am", age, "years old");*/

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ
** ยกกำลัง
*/

/*
let number1 = 5;
let number2 = 5;

let condition1 = number1 >= number2;//Boolean ค่าที่ได้จะเป็น true หรือ false
console.log("resault of condition is",condition1);
*/

/*
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
*/
//if - else condition
/*
let score = 65;

if (score >= 80) {
    console.log("you are grade A");//ถ้าเข้าเงื่อนไขนี้จะทำงานที่นี่
} else if (score >= 70) {
    console.log("you are grade B");//ถ้าไม่เข้าเงื่อนไขข้างบนจะมาทำงานที่เงื่อนไขนี้
} else if (score >= 60) {
    console.log("you are grade C");
} else if (score >= 50) {
    console.log("you are grade D");
} else { 
    console.log("you are grade F");
} 
*/

/*
&& และ
|| หรือ
! นิเสธ
*/

/*
let number1 = 5;
let number2 = 8;

//true || false = true
let condition = number1 >= 3 || number2 >= 10;
console.log("resault of condition", condition);

let age = 30;
let gender = "male";

// ture && true = true
if (age >= 20 && gender == "male") {
    console.log("You are adult");
}

let number = 20;
// !true = false
if (!(number % 2 == 0)){
    console.log("your are odd number")
} else {
    console.log("your are even number")
}
*/

/*
while loop
for loop
*/

/*
let counter = 0;

while (counter < 10) {
    console.log("while loop");
    counter++;
}

for (let counter = 0; counter < 10; counter++) {
    console.log("for loop");
}
*/

/*
//Array
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [20, 30, 40, 50];
console.log("new age", ages[2]);
console.log("age list",ages);

//1.แทนที่ค่าใน array
ages = [45,50];
console.log("new age", ages);

//2.ต่อ array
ages.push(55);
console.log("new age", ages);
*/

/*
//Array
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [20, 30, 40, 50];

//เช็คว่ามีค่า 40 อยู่ใน array หรือไม่
if (!ages.includes(40)){
    console.log("you have to be 40");
}
*/

/*
let ages = [90,60,40,45,50];
console.log(ages);
ages.sort();//เรียงค่าใน array จากน้อยไปมาก
console.log(ages);

let names_list = ["John", "Bob", "Alice", "Mary"];
names_list.push("Mike");
console.log(names_list.length);//นับจำนวนข้อมูลใน array
console.log(names_list[0]);

for (let index = 0; index < names_list.length; index++) {
    console.log("name list",names_list[index]);
}
*/

/*
//Object

let student = [{
    name: "zz",
    age: 90,
    grade: "A"
}, {
    name: "aa",
    age: 66,
    grade: "B"
}];

student.pop();//ลบข้อมูลตัวสุดท้าย

for (let index = 0; index < student.length; index++) {
    console.log("student number",(index+1));
    console.log("name:",student[index].name);
    console.log("age:",student[index].age);
    console.log("grade:",student[index].grade);
}
*/

/*
//object + array

let scores1 = 50;
let scores2 = 90;
let grade = "";

//ประกาศ function ชื่อ calculateGrade ที่มี parameter เป็น score
function calculateGrade(score) {
    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}
//arrow function
let calculateGrade = (score) => {
    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    return grade;
}


let student1 = calculateGrade(scores1);
let student2 = calculateGrade(scores2);
console.log("grade:", student1, student2);
*/

/*
//Array
let scores = [10, 20, 30, 40, 50];

for (let index = 0; index < scores.length; index++) {
    console.log(scores[index]);
}
for (let index = 0; index < scores.length; index++){
    scores[index] = scores[index] * 2;
}
*/

/*
scores[0] =scores[0] * 2;
scores[1] =scores[1] * 2;
scores[2] =scores[2] * 2;
scores[3] =scores[3] * 2;
scores[4] =scores[4] * 2;
*/

/*
scores.forEach((s) => {
    console.log(s);
});

//map ใช้สำหรับ loop ข้อมูลใน array และ return ค่าใหม่
scores.map((s) => {
    return s * 2;
});

//forEach ใช้สำหรับ loop ข้อมูลใน array และไม่ return ค่าใหม่
scores.forEach((s) => {
    console.log("socre:",s);
});
*/

/*
let scores = [10, 20, 30, 40];
//let newScores = [];


for (let index = 0; index < scores.length; index++) {
    console.log("Score",scores[index]);
    //if(scores[index] >= 30){
    //    newScores.push(scores[index]);
    //}
}

//filter ใช้สำหรับกรองข้อมูลใน array
let doublescore = scores.map((s) => {
    return s * 2;
});

scores.forEach((s) => {
    console.log("scores",s);
});

let newScores = scores.filter((s) => {
    return s >= 20;
});

newScores.forEach((ns) => {
    console.log("New score",ns);
});
*/

/*
//object function
let students = [
    {
        name: "John",
        score: 90,
        grade: "A",
    },
    {
        name: "Jane",
        score: 75,
        grade: "B",
    },
    {
        name: "Jim",
        score: 60,
        grade: "C",
    }
];

//find ใช้สำหรับหาข้อมูลใน array โดยใช้เงื่อนไข
let student = students.find((s) => {
    if (s.name == "Jane") {
        return true;
    }
});

let doublescore_student = students.map((s) => {
    return s.score = s.score * 2;
});

let Highscore_student = students.filter((s) => {
    return s.score > 80;
});



console.log('student:',student);
console.log('Highscore_student:',Highscore_student);
*/