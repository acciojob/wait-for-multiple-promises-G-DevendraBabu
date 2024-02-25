//your JS code here. If required.


const random_number1=Math.floor(Math.random()*3)  * 1000;
const random_number2=Math.floor(Math.random()*3)  * 1000;
const random_number3=Math.floor(Math.random()*3)  * 1000;

const p1=new Promise((resolve,reject)=>{

	
	setTimeout(()=>{
			resolve("promise1 resolved")
	},random_number1)
	
})

const p2=new Promise((resolve,reject)=>{

	
	setTimeout(()=>{
			resolve("promise2 resolved")
	},random_number2)
	
})

const p3=new Promise((resolve,reject)=>{

	
	setTimeout(()=>{
			resolve("promise3 resolved")
	},random_number3)
	
})

const promiseAll=promise.all([p1,p2,p3]);
promiseAll.then((values)=>{console.log(values)})
let total seconds=random_number1 +random_number2 + random_number3;

let table=document.createElement("table");
let tr1=document.createElement("tr");
let td1=document.createElement("td").innerHTML="promise1";
let td12=document.createElement("td").innerHTML=random_number1;
tr1.appendChild(td1);
tr1.appendChild(td12);

let tr2=document.createElement("tr");
let td2=document.createElement("td").innerHTML="promise2";
let td22=document.createElement("td").innerHTML=random_number2;
tr2.appendChild(td2);
tr2.appendChild(td22);



let tr3=document.createElement("tr");
let td3=document.createElement("td").innerHTML="promise3";
let td32=document.createElement("td").innerHTML=random_number3;
tr3.appendChild(td3);
tr3.appendChild(td32);

let tr4=document.createElement("tr");
let td4=document.createElement("td").innerHTML="Total";
let td42=document.createElement("td").innerHTML=;
tr4.appendChild(td4);
tr4.appendChild(td42);



