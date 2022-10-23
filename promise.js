let p = new Promise((resolve, reject) => {
	console.log('promise started')
	setTimeout(() => {
		console.log('promise done')
		resolve('resolved func')
	}, 2000)
})

p.then((d) => { console.log(d) })
