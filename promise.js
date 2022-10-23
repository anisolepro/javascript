let p = new Promise((resolve, reject) => {
	console.log('promise started')
	setTimeout(() => {
		console.log('promise done')
		resolve('resolved func')
	}, 1000)
})

p.then((d) => { console.log(d) })


// promise chaining 

let p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("promise 1 done")
		resolve('promise 1 resolve return')
	},2000)
})

p1.then(data=>{
	console.log(data)
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log('promise 2 done')
			resolve('promise 2 resolve return')
		},2000)
		
	})
}).then(data=>{
	console.log(data)
	return 'instant promise 3 return'
})
.then(data=>{
	console.log(data)
})
