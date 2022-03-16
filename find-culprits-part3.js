// Fix the code to get the largest of three.

// Code:
console.log('Fix the code to get the largest of three.');
aa = (f,s,t) => {
    if(f>s &&f>t) console.log(f)
    else if(s>f && s>t) console.log(s)
    else console.log(t)
}
aa(1,2,3);


// — — — — — — — — — — — — — — — — — — — — — — — — —
// Fix the code to Sum of the digits present in the number

// Code:
console.log('\nFix the code to Sum of the digits present in the number');
let n = 123;
console.log(add(n));
function add(n){
    let sum = 10;
    for(var i=0;i<n.length;i++)sum+=n[i]
    return sum;
}

// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to Sum of all numbers using IIFE function

// Code:
console.log('\nFix the code to Sum of all numbers using IIFE function');
var arr = [9,8,5,6,4,3,2,1];
(function(arr) {
 let sum = 0;
 for (var i = 0; i < arr.length; i++) sum += arr[i];
 console.log(sum);
})(arr);

// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to gen Title caps.

// Code:
console.log('\nFix the code to gen Title caps.');
arr = ['guvi', 'geek', 'zen', 'fullstack'];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);

// Fix the code to return the Prime numbers

// Code:

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
    if(num === 1)return true;
    else if(num === 0) return false;
    else if(num === 2) return true;
    for(let i=2; i<=Math.ceil(num/2); i++){
        if(num%i===0) return false;
        if(i===Math.ceil(num/2)) return true;
    }
});
console.log(myPrime);

// Fix the code to sum the number in that array

// Code:
console.log('\nFix the code to sum the number in that array');
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const adder = (a, b) => a + b
const sum = num.reduce(adder)
console.log(sum);

// Fix the code to rotate an array by k times and return rotated array using IIFE function

// Code:
console.log('\n Fix the code to rotate an array by k times and return rotated array using IIFE function');
arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function(arr) {
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);
})(arr);


// Fix the code to gen Title caps.

// Code:
console.log('\nFix the code to gen Title caps.');

var arr = ['guvi', 'geek', 'zen', 'fullstack'];(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();

// print all odd numbers in an array using IIFE function

// Code:
console.log('\nprint all odd numbers in an array using IIFE function');
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})(arr);

// Fix the code to reverse.

// Code:
console.log('\nFix the code to reverse.');
(function(str){
 str1 = str.split('').reverse().join('');
 console.log(str1); 
})('abcd');

// Fix the code to remove duplicates.

// Code:
console.log('\nFix the code to remove duplicates.');
var res = function(arr){
  console.log(Array.from(new Set(arr)));
}

res(['guvi','geek','guvi','duplicate','geeK']);


// Fix the code to give the below output:

// Expected Output:

// [
// {firstName: 'Vasanth', lastName: 'Raja', age: 24, role: 'JSWizard'},
// {firstName: 'Sri', lastName: 'Devi', age: 28, role: 'Coder'}
// ]

// Code:
console.log('\nFix the code to give the below output:');
var array =[[['firstname','vasanth'],['lastname','Raja'],['age',24],['role','JSWizard']],[['firstname','Sri'],['lastname','Devi'],['age',28],['role', 'Coder']]];
var final=[]
for(let i of array){
    let temp = {}
    temp[`${i[0][0]}`] = i[0][1];
    temp[`${i[1][0]}`] = i[1][1];
    temp[`${i[2][0]}`] = i[2][1];
    temp[`${i[3][0]}`] = i[3][1];
    final.push(temp);
}

console.log(final);


// Fix the code to give the below output:

// Sum of odd numbers in an array

// Code:


var as=[12,34,5,6,2,56,6,2,1];
// var as=[3, 4, 5];
var s=as.reduce(function(a,c){
 if(c%2!==0) return a+c;
 return a+0;
}, 0);
console.log(s);


// Fix the code to give the below output:

// Swap the odd and even digits

// Code:
console.log('\nSwap the odd and even digits');
aa = data=>{
    var a=data;
    var l='';
    for(i=0;i<a.length-1;i++){
        var s=a[i+1]
        var b=a[i]
        l+=s
        l+=b
        i=i+1
    }
    if((a.length%2)!=0){
        l+=a[a.length-1]
    }
    console.log(l);
}
aa('1234');