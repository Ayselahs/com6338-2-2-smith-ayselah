// Your code here
function greet() {
    let name = prompt("What is your name?");
    alert("Hello, "  + name);
    let age = prompt("How old are you?");
    age = parseInt(age);
    let conBirthday = confirm("Did you have your birthday this year yet?");
    currentYear = new Date().getFullYear();
    if (conBirthday === true) {
            birthday = currentYear - age;
            alert("Your birth year is " + birthday);
    } else {
            birth = currentYear - (age + 1);
            alert("Your birth year is " + birth);
    }
}

