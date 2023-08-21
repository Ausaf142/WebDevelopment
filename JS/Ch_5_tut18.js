
/*DELETE*/

// let arr =[1,2,3,4,5,6,7,8,9]
// console.log(arr.length)
// delete arr[0]   //item del hota hai per uski jagah khali rahti hai,<Empty item> isliye length change ni hota hai
// // arr[0]=5        //add kr skte hai--self change bs no rzn
// console.log(arr)
// console.log(arr.length)

/*CONCAT*/
// let a1 = [1,2,3]
// let a2 = [4,5,6]
// let a3 = [9,8,7]

// let newArr=a1.concat(a2,a3);//New array banalo,but jo ban chuki hai wo waise hi hai--islye console print kia hu
// console.log(newArr)
// console.log(a1,a2,a3)//same jo hai waisa hi -with no any change

/*SORT METHODS */
// let arry=[9,15,77,100,1,6,4]//-->100 sabse barda hai but hai second position per sorting ke bad(bcz alphabatically it is working-----ONE<TWO<THREE-first letter of numerical in words)
// arry.sort()         //-ye small capital k base pe nahi/ye alphabatical change krta hai like one,two th
// console.log(arry)   //-Existing array ko change krta hai --ALERT

/*is masle ka hal ye aya ke ap ek function r mtd banaye */
// let Compare=(a,b)=>{
//     return a-b
// }
// let arry=[9,15,77,100,1,6,4]//-->100 sabse barda hai but hai second position per sorting ke bad(bcz alphabatically it is working-----ONE<TWO<THREE-first letter of numerical in words)

// // arry.sort(Compare)         //-ye small capital k base pe nahi/ye alphabatical change krta hai like one,two th
// console.log(arry)    

// /*REVERSE */            //Simply it reverse the array existing
// arry.reverse()
// console.log(arry)

/*SPLICE AND SLICE*/
let arry=[9,15,77,100,1,6,4]
arry.splice(2,3,1021,1022,1023,777,78778,8998)  //-->2 index se start ho,3 item ADD kro,I1,I2,I3)
console.log(arry)

