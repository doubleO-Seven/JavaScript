var point = {}
point.x = 20
console.log(point)

//object literal
var a = {
    x: 10,
    y: 20
}

a.z = 100
console.log(a)

//obj constructor

var obj = Object()
obj.a = 14

console.log(obj)

var obj2 = new Object()
obj2.b = 78
console.log(obj2)


//accessing obj
var a = {
    x: 10,
    y: 20,
    z: 45
}
console.log(a.x)
console.log(a.z)

//sum
console.log(a.x + a.y)

//update any value
var a = {
    x: 10,
    y: 20,
    z: 45
}

a.x = 66
console.log(a)

// detele

delete a.x
console.log(a)

//comapare 2 obj
var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 20
}
console.log(obj1 === obj2)

if(obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true)
} else {
    console.log(false)
}