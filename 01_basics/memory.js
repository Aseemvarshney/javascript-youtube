// there are two types of memory 
// 1. stack(primitive ) -> copy & 2. heap(non-primitive)

let myname = "aseem"

let anthername  = myname
anthername = "kartik"


let userone = {
    email : "aseem@gmail.com",
    upi : "gyidabda"
}
let usertwo = userone
usertwo.email = "asbjhbd@gadna.com"
console.log(userone);
console.log(usertwo);



