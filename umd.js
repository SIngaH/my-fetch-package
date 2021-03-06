/**
 * Init function
 * @param {any} options
 */
function init(options){
    this.APIAddress = options.address;
    this.APIKey = options.key;
    return this;
}

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
}(this, function(jQuery){ // kan også skrive $ i stedet for jQuery
    // vores egen del af modulet
    init
//------------------------------------------------get
/**
 * Get function
 * @async 
 * @function get
 * @param {*} resource 
 * @returns {Response}
 */
async function get(resource){
    try{
        if(typeof fetch === "function"){
            let response = await fetch(this.APIAddress + resource ,{
                headers: {
                    "Authorization": this.APIKey
                }
            }); 
            return await response.json();
        }else if(typeof XMLHttpRequest === "function"){
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
            const nodeFetch = require("node-fetch");
				let response = await nodeFetch(this.APIAddress + resource, {
					headers: {
						"Authorization": this.APIKey
					}
				});
            return await response.json();
        }
    }catch(error){
        throw error;
    }
}
//------------------------------------------------post
/**
 * Post function
 * @async 
 * @function post
 * @param {*} resource 
 * @param {*} data 
 * @returns {Response}
 */

async function post(resource, data){
    try{
        if(typeof fetch === "function"){
            let response = await fetch(this.APIAddress + resource, {
                headers :{
                    "Authorization": this.APIKey
                }
            });
            return await response.json();
        }else if(typeof XMLHttpRequest === "function"){
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
        }else{
            const nodeFetch = require("node-fetch");
				let response = await nodeFetch(this.APIAddress + resource, {
					headers: {
						"Authorization": this.APIKey
					}
				});
				return await response.json();
        }
    }catch (error){
        throw error;
    }
}

//------------------------------------------------put
/**
 * Put function 
 * @async 
 * @function put
 * @param {*} resource 
 * @param {*} data 
 * @returns {Response}
 */
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
        }else if(typeof XMLHttpRequest === "function"){
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
        }else{
            const nodeFetch = require("node-fetch");
				let response = await nodeFetch(this.APIAddress + resource, {
					headers: {
						"Authorization": this.APIKey
					}
				});
				return await response.json();
        }
    }catch (error){
        throw error;
    }
}

//------------------------------------------------delete
/**
 * Delete function called del
 * @async
 * @function del 
 * @param {*} resource 
 * @returns {Response}
 */
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
        }else if(typeof XMLHttpRequest === "function"){
            let xhttp = new XMLHttpRequest();
            xhttp.open("DELETE", this.APIAddress + resource, true);
            xhttp.send();
            return await new Promise(function(resolve, reject){
                xhttp.onreadystatechange = function() {
                    resolve(xhttp.status);
                };
            });
        }else{
            const nodeFetch = require("node-fetch");
				let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIKey
                    },
                    method: "DELETE"
				});
				
                return await new Promise(function(resolve, reject){
					resolve(response.status);
				});
        }
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

}))