$(document).ready(function () {
    $(".getStuff").on("click", function () {
        $.get("/wantUsers").then(function (r) {
            console.log(r);
        })

    })

    // send thing from client back to server !!!!
    // in this case, send obj back to server
    $(".postStuff").on("click", function () {
        var obj = {
            name: "Amanda",
            age: 32,
            isDeveloper: true
        };

        $.post("/posty", obj).then(function (r) {
            console.log(r);
        })

    })
})