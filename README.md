# Fetch wrapper

## How to install
```bash
npm i @singah/fetchWrapper
```

## How to use
```bash
let fetchWrapper = require("@singah/fetchWrapper");
myFetch.get();
```
## With all
```bash
myFetch.init({
    address : "api adresse",
    key: "1234"
});
```
## for GET add
```bash
myFetch.get("underside")
    .then(result => {
		
    });
```

## for POST add
```bash
$(".userForm").on("submit", function(e){
    e.preventDefault();  
    let data = {
        name: this.name.value,
        role: this.role.value
    };  
    myFetch.post("underside", data)
       .then(result => {
            console.log(result);
       });
});
```
## for DELETE add
```bash
$(".userForm").on("submit", function(e){
    e.preventDefault();
    let data = {
        name: this.name.value,
        role: this.role.value
    };
    
    myFetch.del("underside")
        .then(result => {
            console.log(result);
        });
});
```
## for PUT add
```bash
$(".userForm").on("submit", function(e){
    e.preventDefault();
    
    let data = {
        name: this.name.value,
        role: this.role.value
    };
    
    myFetch.put("underside", data)
        .then(result => {
            console.log(result);
        });
});
```

## To see it in nodejs
```bash
myFetch.get("underside").then(result => console.log(result));
```

## Remember to install jquery
```bash
npm i jquery

<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
```