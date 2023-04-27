// var h5 = document.querySelector("h5")
// var btn = document.querySelector("button")

// var flag = 0

// btn.addEventListener("click" , function(){
//     if(flag == 0){
// console.log("clicked")
// h5.innerHTML="Friends"
// h5.style.color="green"
// btn.innerHTML="Remove friend"

// flag=1
//     }else{
//         console.log("clicked again")
// h5.innerHTML="Stranger"
// h5.style.color="red"
// btn.innerHTML="Add friend"

// flag=0
//     }
// });

var h5 = document.querySelector("h5")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener ("click" , function(){
    if (flag==0 ){
        console.log("clicked")
        btn.innerHTML="Remove friend"
        h5.innerHTML="Friends"
        h5.style.color="green"
        flag=1
    } else{
        console.log("clicked again")
        btn.innerHTML="Add friend"
        h5.innerHTML="Stranger"
        h5.style.color="Red"
        flag=0
    }
} )