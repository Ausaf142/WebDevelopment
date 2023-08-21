let marks_class_12 = [91,85,88,79,false,"not prsent"]
console.log(marks_class_12)
marks_class_12[6]=66    //added here so now it will show the result 
marks_class_12[0]=99    //we can update the value

console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) //undefined bcz not present index 6 element
//but we can add array like
console.log(marks_class_12)

let arr=["adeeb","hareem",5,8]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}


