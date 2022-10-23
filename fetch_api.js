// get
	// must use fetch api in the place of AJAX when it comes to GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
	  console.log(response.status)    // to check status code like 200 or 403 or 404
	  return response.json()
  })
  .then(data => console.log(data))

// POST

const data = {
	"name": "morpheus",
	"job": "leader"
}

const options = {
	method: 'POST',
	body: JSON.stringify(data),
	headers: {
		'Content-Type': 'application/json'
	}
}
fetch('https://reqres.in/api/users')
	.then(response => {
		console.log(response.status)
		return response.json()
	})
	.then(response => console.log(response))
