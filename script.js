
//https://www.youtube.com/watch?v=LbXffTjfkHM&list=PLfZsWIHsTcfv7QvuPpbpgLOeEWB4L97TT&index=28
// Sum
let a=[1,2,3,4,5,6,7,8,9,10]

let y = a.reduce((acc,val) =>{
    console.log('acc',acc,'--------','val',val)
    return acc + val
});

//console.log(y)

//Array
let a1=[1,2,3,4,5,6,7,8,9,10]

let y1 = a1.reduce((acc,val,i,{length:len}) =>{
    console.log('acc',acc,'--------','val',val)
    return i==len-1 ? (acc + val)/len : acc+val
});

//console.log(y1)

//flat
let a2= [1,2,3,[3,4,5],[6]]
let y2= a2.reduce((acc,val)=> acc.concat(val),[])
//console.log(y2)

//transform
let a3 =[{id:1,name:'siva'},{id:2,name:'naga'},{id:3,name:'raju'}]
let y3 = a3.reduce((acc,val)=>{
return {...acc,[val.id]:val}
},{})
//console.log(y3)

//count
let a4=['a','b','v','a','a','b']
let y4= a4.reduce((acc,val) => {

    acc[val] ? acc[val]=acc[val]+1:acc[val]=1
    return acc;
},{} )

console.log(y4)


//pizza price
let discount =(price)=>(price)/2;
let tax =(price)=>(price)*0.2;
let giftwrap =(price)=>(price)+5;
let delivery =(price)=>(price)+10;

let total = [discount,tax,giftwrap,delivery]
let finalprice = total.reduce((price,fn)=> price=fn(price),10)
console.log(finalprice)

//Array.of

let a5= Array.of(10)
console.log(a5)

let a6 = Array(50)
console.log(a6)

//fill
const a7=[1,2,3,4,5,6,7,8,9]
a7.fill(999)
console.log(a7)


//Set
const names=new Set()
names.add('siva')
names.add('naga')
names.add('raju')
names.has('kovvuri')

console.log(names.size)
names.clear()


//remove duplicates
let a8=[1,1,1,1,2,2,2,3,3,3,3,3]
let a9= [...new Set(a8)]
console.log(a9)


var arr = [1,2,3,4]
for(var i=0;i<arr.length; i++){
    setTimeout( () => {
        console.log("Index is: ", i)
    })
}

let a10=[1,2,2,3]
let b10=[...new Set(a10)]
console.log(b10)


//slice
let a11=[1,2,3,4,5]
console.log(a11.slice(-1))
//splice
//insert an elemet at index 2
let  a12=[7,8,9]
console.log(a12.splice(1,0,999))
console.log(a12)
;