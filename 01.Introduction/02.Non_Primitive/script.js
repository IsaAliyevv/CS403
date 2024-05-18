//string,number,bigint,Boolean,Symbol,null,undefined-primitive
//Object öz daxilində bölünür
// Array.Object.Error.Date.etc

const usr ={
    firstName:" Isa",
    lastName:"Aliyev",
    age:"18",
    info:{
        adress:"Baku",
        city:"Baku",
        country:"Baku",
    },
    edu: {
        uni:"none",
        point:"0",
    },
    work: {
            company:"ema mmc",
            exper:"4",
        }
    }
console.log(usr.firstName,usr.lastName,usr.age,usr.info.adress,usr.info.city,usr.info.country);
console.log(usr);