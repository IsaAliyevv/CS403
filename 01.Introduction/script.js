//var-eynni dəyişən istifadə olunur.
//let-fərqli fərqli dəyişən istifadə olunur.---dəyişmə ehtimal olunursa let lə yazılır.
//const-dəyişməyən constat dəyərlər

//var-keyword
//user-variable
//'Isa'-value
//////////////////////////////////////////////////////////////////////////////////

//1.camelCase
//2.PascaCase
//3.snake_case
//4.kebab-case

//1. let firstName ='Isa'
//console.log(firstName)
//2. let FirstName ='Isa'
//console.log(FirstName)
//3. let first_name ='Isa'
//console.log(first_name)
//4. let firstName ='Isa'
//console.log(firstName)
//console.log(firstName)

//let firstName='Isa'
//let lastName="Aliyev"
//let fullName= `${firstName} ${lastName}`
//console.log(fullName)
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// Math operators
//*_vurma
//+_toplama
//-_çıxma
//**_üstü
// /_bölür
// %_faiz
// ''-string

// || - or
// && - and

//////////////////////////////////////////////////////////////////////////////////

//falsy-0   undefined   null    NaN     false


//Primitiv data tipee
//string,number,bigInt,Boolean,Symbol,null,undefind - primitive
//Object-non-primitive (by referance)
//Object-
// const obj1 = new Object() //constractor
// const obj2 = {} // literal

// const obj2 = structuredClone(obj1) //deep copy
// const obj2 = JSON.parse(JSON.stringify(obj1)) //deep copy
  
// const obj2=obj1 // shallow copy
// const obj2 = { ...obj1 } //deep copy (but not nested)

//Array,Object,Error,Date

//const obj1={
    // 'firstName':'Isa',
    // 'lastName':'Aliyev',
    // age:18,
    // info:{
        // adress:'Qarayev',
        // city:'Baku',
    // }
// }
// const obj2={...obj1}
// obj1["first-name"]='asi'
// obj2.lastName='alizade'

// console.log('obj1',obj1)
// console.log('obj2',obj2)


// const arr2 = [1, 3, 5, 8, true, undefined, null, false, 'ulfat', 7, 9, 0, 'h', false, 'Ayxan', 'Elshen']
// console.log(arr2[arr2.length - 2]);   arxadan saymağa başlayır
// console.log(arr2.at(1));
// console.log(arr2[1]);
//////////////////////////////////////////////////////////////////////////////////

//if-başda verilir şərtdi.müəyyən şərtlərin doğru olub olmadığını yoxlayır.
// else -if əmri doğru olmadığı zaman else əmri işə düşür.yəni bütün şərtlər ödənilməsə else.
// else if - if ifqadəsi doğru olmadığı halda başqa bir əmrin idarəsi üçün else if istifadə edilir.
//Object- məlumatların bir araya yığılması üçün istifadə eilir.İçində birdən çox məlumat toplana bilər.
// iç içə object-
// pop-sondan silməyə başlayır
// shift-əvvəldən silir
// unshift-əlavə edir
// push-sona əlavə edir
// deep copy-