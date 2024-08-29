// let promise=  new Promise((res,   )=>{
//     let reason='barish'
//     if(reason==='barish'){
//         res()

//     }
//     else{

//     }
//     res()

// })

// console.log(promise,"helloo");
// let promise=  new Promise((res,  rej )=>{
//     let reason='barish'
//     if(reason==='barish'){
//         rej('errr')

//     }
//     else{

//     }
//     res('resolve')

// })

// promise.than((a))=>{
//     console.log(a);
// }.catch((err)=>{

// })

let step1= function(){
    return new Promise((res,rej  )=>{
        setTimeout(()=>{
            res('photo select')
        },4000)
    })

}
let step2= function(){
    return new Promise((res, rej )=>{
        setTimeout(()=>{
            res('filteradddd')
        },3000)
    })
}
step1().then((data)=>{
    console.log(data);
    return step2().then((data)=>{
console.log(data);
    })
})

