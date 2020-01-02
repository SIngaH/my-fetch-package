# Fetch wrapper

## Why use this Fetch wrapper?
This fetch wrapper makes it easier to fetch things from an api. 
In this fetch you can use get, post, put or del(stands for delete).

If fetch is unavailable, it will check for an XMLHttpRequest and if neither of those are present it can also use node-fetch.
This wrapper already has a try catch that console.logs the error.

___

## How to install
To install you open your terminal and write:
```
npm i @singah/fetchwrapper
```

In your html you link to theese two
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="   crossorigin="anonymous"></script>

<script src="https://unpkg.com/@singah/fetchwrapper@0.1.4/umd.js"></script>

```
And when you link to your own js file, it should look something like this
```html
<script type="module" src="example.js"></script>
```

But if you are only going to use the node-fetch ypu only need to write
```javascript
const myFetch = require("@singah/fetchwrapper");
```

___

## How to use 
When you have written all things needed in your html, the next thing you need to do is write

```javascript
myFetch.init({
    address : "https://theApiAdressHere/",
    key: "1234"
});
```
Then you need to write a function for get, post, put or del(stands for delete), depending on what you are going to use this package for.

### Get example
```javascript
myFetch.get("subpageHere/")
    .then(result => {
        $(".MyClassName").text(result.WhatToGet);
    });
```
