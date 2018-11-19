var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);

var numbers = [1, 2, 3, 4];
var booleans = [true, false, true];
var functionList = [
    function apple() {
        console.log("apple");
    }
];

var mixed = [       // dont use performance issue
    "apples",
    3,
    undefined,
    true,
    function apple() {
        console.log("apple");
    }
];

var list2 = [
    ["tiger", "cat", "bear", "bird"]
];

console.log(list2[0][2]);

list.shift();
a= list.pop();
console.log(a);
list.push("Edith");
console.log(list);
list = list.concat(["bee", "deer"]);

console.log(list);

