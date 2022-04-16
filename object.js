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