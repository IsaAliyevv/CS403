

// toUpperCase-böyüdür
// slice-müəyyən hissəni kəsir çıxsarır(user.slice)


const students = [{
    name:"Elmir",
    age: 19,
    gender:"male"
},{
    name:"Ibrahim",
    age: 12,
    gender:"male"
},{
    name:"Narmin",
    age: 16,
    gender:"female"
},{
    name:"Orxan",
    age: 23,
    gender:"male"
},{
    name:"Samir",
    age:25,
    gender:"male"
}
]
// 1
console.log(students.map((student)=>student.age)); 
// 2
console.log(students.map((student)=>student.gender));
// 3
console.log(students.map((student)=>student.name));
// 4
console.log(students.filter((student) => student.age>=20));
// 5
console.log(students.filter((gender) => gender.gender=="female"));
// 6
console.log(students.filter((start)=>start.name.startsWith('N') ));
// 7
console.log(students.filter((includes)=>includes.name.includes("a")));
// 8
console.log(students.filter((odd)=>odd.age%2!==0));
// 9
console.log(students.filter((even)=>even.age%2!==0));
// 10
console.log(students.map((item,index)=>index));
//11 
const students = [
    
]
console.log(students.map(student) => a += student.age));
console.log(a);