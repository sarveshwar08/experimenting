let div1= document.querySelector(".div1")
let div2= document.querySelector(".div2")

div1.addEventListener('click',()=>{
        div1.style.display='none'
        div2.style.display='block'
        
        console.log("done div1")
    })
div2.addEventListener('click',()=>{
    
        div1.style.display='block'
        div2.style.display='none'
     
        console.log("done div2")
        
    })

    //agrani verma