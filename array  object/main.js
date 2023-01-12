//object
let obj={
  name:"siva",
  age:19,
  lastname:null,
  // village:message(),
  submitt:confirm(),
  course:["html","css","js","react"],
  section:{
    sub:"object1",
    class:"A",
  },
  creat:()=>console.log("hello every one"),
}
console.log(obj);
console.log(typeof(obj.name));
console.log(typeof(obj.age));
console.log(typeof(obj.lastname));
console.log(obj.lastname);
console.log(obj.village);
console.log(obj.submitt);
console.log(typeof(obj.submitt));
console.log(typeof(obj.course));
console.log(obj.creat());


//function
let person = {
  firstName: "pavoor",
  lastName: "chathiram",
  pincode:627808,
  fullName : function() {
    return this.firstName +  this.lastName;
  }
};

console.log(person.fullName());


//uptate

let uptate={};

uptate.name="siva";
uptate.corseName="frent-end developer";
uptate["village-name"]="pavoorchathiram"
uptate.age=19,
console.log(uptate);


// let head={};

// let n=parseInt(prompt("enter the index"));

// for(i=0;i<=n;i++){
//     let a =prompt("enter the index");
//     let c=prompt("enter the name");
//     head[a]=c ;
    
// }
// console.log(head)

//edit

let edit={
  name:"siva",
  corseName:"frent-end developer",
  age:19,
}

edit.corseName="full stack developer";
console.log(edit)

//delete

let del={
  name:"siva",
  corseName:"frent-end developer",
  age:19,
}

delete del.corseName;
console.log(del);

let a="4"+7+8;

console.log(a);

let x=(2,3);

console.log(x);















// let ex={
//   name:"siva",
//   department:"fent-end developer",
//   age:19,
// }
// function eddit(){
//     let b=ex[0]
//     b=prompt("enter the name");
//     let c=prompt("enter the name");

//     ex[b]=c;
//     console.log(ex);
// }

  //refrence

  //Array

  // let arr=["hello","mam","I am","siva"]
  // console.log(arr);
  // console.log(typeof(arr));


  // let bje={
  //   name:"siva",
  //   age:19,
  //   course:"frent-end developer"
  // }

  // console.log(bje);
  // console.log(typeof(bje));

  



//   counter = false; 
// console.log(typeof(counter));

// // let value1=parseInt (prompt("enter the value 1"));
// // let value2=parseInt (prompt("enter the value 1"));
// // if (value1<value2) {
// //       console.log("true");
// // }
// // else {
// //        console.log("false");
// // }
// //let y=BigInt(1000000000000000000000000);
// console.log(y)
// console.log(typeof(y))
