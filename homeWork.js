//with .bind
for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {
        console.log(i);
    }.bind(null, i), 1000)
}
setTimeout(function () {
    console.log("====================");
}, 1000)

// 1. with let
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}


    setTimeout(function () {
        console.log("====================");
    }, 1000)



//with Immediately Invoked Function Expression (IIFE)
for (var j = 0; j < 10; j++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(j);
}

setTimeout(function () {
    console.log("====================");
}, 1000)