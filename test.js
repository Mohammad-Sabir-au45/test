// Q.2 You are given an array of length N (1 < N <= 100) and a number K. Print the array after K rotations in clockwise direction.
// E.g. 
// N = 10, K = 3
// Arr = [1,2,3,4,5,6,7,8,9,10]
// after K rotations
// Arr = [4,5,6,7,8,9,10,1,2,3]

// Please mention use of any in-built javascript function is not allowed like shift, unshift, substr etc.

// Arr = [4,5,6,7,8,9,10,1,2,3]

Arr = [1,2,3,4,5,6,7,8,9,10]


function rotateArr(arr,k){

    let newArr=[];

    for(let i=k; i<arr.length; i++){
       
       newArr.push(arr[i])
    }

    for(let i=0; i<k; i++){
        console.log(arr[i])
        newArr.push(arr[i])
     }


      console.log(newArr)

}


rotateArr(Arr,9)



