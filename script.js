//your JS code here. If required.
const outputContainer = document.getElementById('output');

let arr = [1,2,3,4]; 
const pr  = new Promise((resolve,reject)=>{
	 
		resolve(arr);   
	 
}); 
 
pr.then((data)=>{
	return new Promise((rs,rj)=>{
		setTimeout(()=>{ 
		let val =data.filter(a=>a%2==0);
			outputContainer.innerText = val;
	rs(val); 
	},1000);  
	})
	
}).then((data)=>{
	// console.log(data);
	setTimeout(()=>{
		outputContainer.innerText =data.map(a=>a*2).join(' ');
	},2000)
		}).catch((err)=>outputContainer.innerText = err);  