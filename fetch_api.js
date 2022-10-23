// get

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
	  console.log(response.status)    // to check status code like 200 or 403 or 404
	  return response.text()
  })
  .then(data => console.log(data))

