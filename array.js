var arr = [1, 2, 3, 4]
console.log(arr)

//spcific index
console.log(arr[1])

//add
arr[4] = 5
console.log(arr)

arr[14] = 5
console.log(arr)

//array traverse
var arr = [1,2,3,4,5,6,7,7,8,9]
for(var i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

//search value in array
var arr = [1,2,3,4,5,6,7]

var find = 1
for(var i=0; i<arr.length; i++){
    if(arr[i] === find){
        console.log(`Data found at: ` + i)
            break;}
    else{
        console.log(`Data is not found.`)
        break;
    }
}