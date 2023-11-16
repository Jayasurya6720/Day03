//anonymous function 

// Question 1. Print odd numbers in an array

//let oddnumber = function(array){
//    for(let i=0;i<array.length;i++){
//        if(array[i]%2!=0){
//            console.log(array[i])
//        }
//    }
// }
//oddnumber([1,2,3,4]);

// Output :-
// 1
// 3

// --------------------------------------------------------------------------


// Question 2. Convert all the strings to title caps in a string array

//let string = function(str){
//    for(let  i=0;i<str.length;i++){
//       if(str[i] ){
//        var str1 = str[i][0].toUpperCase();
//        var str2 = str[i].slice(1);
//        console.log(str1.concat(str2));
//        }
//    }
//}
//string(["apple","banana","grapes",]);

// Output :-
// Apple
// Banana
// Grapes

//-----------------------------------------------------------------------------

// Question 3. Sum of all numbers in an array


//let sum = function(number){
//   var num1 =0;
//   for(let i=0;i<number.length;i++){
//    num1+=number[i];
//    }console.log(num1);
//}
//sum([1,2,3,4,5]);

//Output :-
//15

//-----------------------------------------------------------------------------

// Question 4. Return all the prime numbers in an array


//let oddnumber = function(array){
//      for(let i=0;i<array.length;i++){
//           if(array[i]%2 !=0){
//               console.log(array[i]);
//           }
//       }
//    }
//    oddnumber([1,2,3,4,5,6,7,8,9,10]);
//

//Question 5. Return all the palindromes in an array

//var a = function(array){
//    var b = '';
//   for(var i=array.length -1;i>=0;i--){
//    b += array[i];
//   }
//   if(b == array){
//    console.log(` ${array} array is palindromes`);
//  }else{
//   console.log(` ${array} array is not palindromes`);
// }
//}
//a("level");
//
//Output :- 
//
//level array is palindromes

//-----------------------------------------------------------------------------


// Question 6.Return median of two sorted arrays of the same size.

//var num = function(array,array1){
//    let a = "";
//    let b = "";
//     var sum = array + "," + array1;
//     for(var i=0;i<sum.length;i++){
//        if(sum[i] != ","){
//            a += sum[i];
//         }
//        };
//        b = [...a];   
//        let c = b.sort();   
//        let val1 = c[array.length -1];
//        let val2 = c[array.length];
//        let sumof = parseInt(val1) + parseInt(val2);
//        console.log(`${sumof} is the median of two sorted arrays`);
//    
//}
//num([1,3,5,7],[2,4,6,8]);
//
//Output :-
//
//9 is the median of two sorted arrays

//-----------------------------------------------------------------------------

// Question 7. Remove duplicates from an array

//let duplicate = function(array){
//    let a = [...new Set(array)]
//    console.log(a);
//}
//duplicate("array");
//
//Output:- 
// 
// ['a', 'r', 'y']

//-----------------------------------------------------------------------------

// Question 8.Rotate an array by k times

//let rotate = function(array,k){
//    let a = [...array[0]];
//    for(let i=0;i<k;i++){
//      let b = a.pop();
//      a.unshift(b);
//      }console.log(a);
//}rotate(["array"],[2]);

//Output:- 
// 
//['a', 'y', 'a', 'r', 'r']

