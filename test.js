myFetch.init({
    address : "https://reqres.in/api/",
    key: "1234"
});
myFetch.get("users/")
    .then(result => {
        console.log(result);
        $(".spinner").toggle();
        result.data.forEach(person => {
            $(".person").append(`<ul class="aperson"><li>${person.first_name + " " + person.last_name}</li><li><img src="${person.avatar}" alt="${person.first_name + " " + person.last_name}"</li><li>${person.email}</li></ul>`);
        });
    });