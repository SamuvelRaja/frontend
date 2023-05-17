const apiUrl = "https://jsonplaceholder.typicode.com/users";

const promise = fetch(apiUrl,{
    method:"GET",
});
//console.log(promise);
promise
.then(function(res){
//console.log(res);
if(res.status === 200) return res.json();
else 
throw new Error("something failed 404 error");  //it will create and throw error if link is wrong
})
.then(function(data){
console.log(data);
console.log(data[1]);
})
.catch(function(err){
console.log(err.message);//err.message prints the error
});