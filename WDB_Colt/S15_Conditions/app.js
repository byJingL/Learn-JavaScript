//alert, promot can be used in Chrome JS Console or connect with html
alert("Hello from JS!");

// Concole
console.log("Hello");
console.log(parseInt('105.9'));
console.log(parseInt('101hkjdhfl'));


let num = Math.random();
if (num < 0.3) {
    console.log("Random number is less than 0.3!");
    console.log(num);
} else if (num < 0.5) {
    console.log("Random number is greater than 0.3 but less than 0.5!");
    console.log(num);
} else { 
    console.log("Random number is greater than 0.5!");
    console.log(num);
};


// Nest conditions
// Password must be 6+ characters, can not include space

const password = prompt('Enter your new password pls:');

if (password.length >= 6) {

    let spaceIndex = password.indexOf(' ');
    if (spaceIndex === -1) {
        console.log(`New password is ${password}!`);
    } else { 
        console.log("Password can not include space!")
    };

} else {
    console.log("Password must be 6+ characters!");
};

// Falsy
if (NaN) {
    console.log('Truthy');
} else { 
    console.log('Falsy');
};

if (null) {
    console.log('Truthy');
} else {
    console.log('Falsy');
};

if (0) {
    console.log('Truthy');
} else {
    console.log('Falsy');
};