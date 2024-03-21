//your JS code here. If required.
const outputContainer = document.getElementById('output');

let arr = [1,2,3,4]; 
const pr  = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(arr.filter(a=>a%2==0));
	},3000);
});

pr.then((data)=>{
	outputContainer.innerText =data.map((a)=>a*2);
	}).catch((err)=>outputContainer.innerText = err);  