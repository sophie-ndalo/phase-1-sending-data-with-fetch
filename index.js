const formData = {
    name :"Steve",
    email :"steve@steve.com",
};
submitData = {
    method : "POST",
    headers :{
        "Content-Type" : application/jason,
        Accept : application/json,
 },
    body : JSON.stringify(formData)

}
fetch('http://localhost:3000/users')
.then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error){
    alert("very unfortunate!");
    console.log(error.message);
  });
  console.log(submitData);