let myFetch = require("./umd.js");

// myFetch.get();

myFetch.init({
	address: "https://reqres.in/api/users/",
	key: "1234"
});

myFetch.get("1").then(result => console.log(result));