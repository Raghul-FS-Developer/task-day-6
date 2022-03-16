// Write a code to print the numbers in the array
console.log('\nWrite a code to print the numbers in the array');
// Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

// Write a code to print the numbers in the array
console.log('\nWrite a code to print the numbers in the array');
// Output: 1,2,3,4,5,6,7,8,9,10,11

numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
new_string = '';
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] + ',' 
}
console.log(new_string);

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// Output: 11 10 9 8 7 6 5 4 3 2 1
console.log('\nlast to first with spaces');
new_string = '';
 
for (var i = numsArr.length-1; i >= 0; i-- ) {
 new_string += numsArr[i] + ' '
}
console.log(new_string.trim());


// Write a code to replace the array value — If the number is even, replace it with ‘even’.

// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
console.log('\nIf the number is even, replace it with ‘even’.');
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = 'even'
 }
}
console.log(numsArr);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
console.log('\n If the index is even, replace it with ‘even’.');
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if((i+1) %2 == 0 )
 {
 numsArr[i] = 'even'
 }
}
console.log(numsArr);


// Write a code to add all the numbers in the array

// Output: 66
console.log('\nWrite a code to add all the numbers in the array');
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=10; i++) {
    sum += numsArr[i]
}
console.log(sum);


// Write a code to add the even numbers only
// Output: 30
console.log('\nWrite a code to add the even numbers only');
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0) sum += numsArr[i]
}
console.log(sum);

// Write a code to add the even numbers and subract the odd numbers
// Output: 6
console.log('\nWrite a code to add the even numbers and subract the odd numbers');
numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0)sum += numsArr[i];
 else sum -= numsArr[i];
}
console.log(sum);

// Write a code to print inner arrays
// Output:
console.log('\nWrite a code to print inner arrays');
// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log( numsArr[i])
}

// Write a code to print elements in the inner arrays
// Output: 1234567891011
console.log('\nWrite a code to print elements in the inner arrays');
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all='';
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=`${inner_array[j]}`
}
console.log(str_all);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
console.log('\nWrite a code to replace the array value ');
numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
      if(numsArr[i][j] %2 == 0 )numsArr[i][j] = 'even'
}
console.log(numsArr);


// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
console.log('\nWrite a code to print elements in the inner arrays in reverse');
numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
str_all='';
for (var i = numsArr.length-1; i >= 0 ; i-- ) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ; j-- )
     str_all +=`${inner_array[j]} `
}
console.log(str_all.trim());


// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30
console.log('\nWrite a code to add elements in the inner arrays based on odd or even values');
numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for(var j = 0 ; j < inner_array.length;j++ ){
        if(numsArr[i][j]%2!==0) sum_odd += numsArr[i][j]
        else sum_even += numsArr[i][j]
    }
}
console.log(sum_odd);
console.log(sum_even);