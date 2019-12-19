(function(root, factory) {
    // AMD
    if(typeof define === "function" && define.amd){
        define(["jquery"], factory); //  define(["jquery", "bootstrap"], factory);
    // CommonJS
    }else if(typeof exports === "object"){
        module.exports = factory(require("jquery"));  //factory(require("jquery"), require("bootstrap"))
    // Browser context
    }else {
        root.myFetch = factory(root.jquery);  //factory(root.jquery, root.bootstrap)
    }
}(this, function(jQuery){ // kan også skrive $
    // vores egen del af modulet
    function init(options){
        this.APIAddress = options.address;
        this.APIKey = options.key;
        return this;
    }
//------------------------------------------------get
async function get(resource){
    try{
        if(typeof fetch === "function"){
            let response = await fetch(this.APIAddress + resource ,{
                headers: {
                    "Authorization": this.APIKey
                }
            }); 
            return await response.json();
        }else if(typeof fetch === "function"){
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", this.APIAddress + resource, true);
            xhttp.send();
            return await new Promise(function(resolve, reject){
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        resolve(JSON.parse(xhttp.responseText));
                    }
                };
            });
        }else{
        }
    }catch(error){
        throw error;
    }
}
//------------------------------------------------post
async function post(resource, data){
    try{
        if(typeof fetch === "function"){
            let response = await fetch(this.APIAddress + resource, {
                headers :{
                    "Authorization": this.APIKey,
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(data)
            });
            return await response.json();
        }else{ //if(typeof fetch === "function"){
            let xhttp = new XMLHttpRequest();
            xhttp.open("POST", this.APIAddress + resource, true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.setRequestHeader("Authorization", this.APIKey);
            xhttp.send(JSON.stringify(data));
            return await new Promise(function(resolve, reject){
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 201) {
                        resolve(JSON.parse(xhttp.responseText));
                    }
                };
            });
        } //else{}
    }catch (error){
        throw error;
    }
}

//------------------------------------------------put

async function put(resource, data){
    try{
        if(typeof fetch === "function"){
            let response = await fetch(this.APIAddress + resource, {
                headers :{
                    "Authorization": this.APIKey,
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify(data)
            });
            return await response.json();
        }else{ //if(typeof fetch === "function"){
            let xhttp = new XMLHttpRequest();
            xhttp.open("PUT", this.APIAddress + resource, true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.setRequestHeader("Authorization", this.APIKey);
            xhttp.send(JSON.stringify(data));
            return await new Promise(function(resolve, reject){
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        resolve(JSON.parse(xhttp.responseText));
                    }
                };
            });
        } //else{}
    }catch (error){
        throw error;
    }
}

//------------------------------------------------delete
async function del(resource){
    try{
        if(typeof fetch === "function"){
            let response = await fetch(this.APIAddress + resource ,{
                headers: {
                    "Authorization": this.APIKey
                },
                method: "DELETE"
            });
            return await new Promise(function(resolve, reject){
                resolve(response.status);
            });
        }else{  //if(typeof fetch === "function"){
            let xhttp = new XMLHttpRequest();
            xhttp.open("DELETE", this.APIAddress + resource, true);
            xhttp.send();
            return await new Promise(function(resolve, reject){
                xhttp.onreadystatechange = function() {
                    resolve(xhttp.status);
                };
            });
        } //else{}
    }catch(error){
        throw error;

    }
}

return {
    init, 
    get,
    post,
    put,
    del        
}

}));