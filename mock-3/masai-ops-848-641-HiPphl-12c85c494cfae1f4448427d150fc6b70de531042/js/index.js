 const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`;
 let filterarr=[]
 let cartarr=JSON.parse(localStorage.getItem("buy")) || []
 
const main=async()=>{
 try{
 let res=await fetch(url)
 let data=await res.json()
 console.log(data)
 filterarr.push(...data.data)
 console.log(filterarr)
 
 append(data.data)
 }
 catch(err){
    console.log(err)
 }
}

main()

// appendatiom  //
function append(data){
    let container=document.getElementById("menu-container")
    container.innerText=null

    data.forEach(el => {
         let card=document.createElement("div")
         card.setAttribute("class","menu-card")

         let img=document.createElement("img")
         img.src=el.image
         img.alt="menu"

         let title=document.createElement("p")
         title.innerText=el.title
         title.style.color="red"

         let desc=document.createElement("p")
         desc.innerText=el.description

         let price=document.createElement("p")
         price.innerText=`Rs ${el.price}`
         price.style.color="red"

         let alerts=document.getElementById("alert")
        let btn=document.createElement("button")
        btn.innerText="BUY"
        btn.addEventListener("click",()=>{
           if(mycart(el.id)===true){
            alerts.innerHTML=null
              alerts.innerText="Successfully placed order"
              alerts.style.color="green"
              cartarr.push(el)
              localStorage.setItem("buy",JSON.stringify(cartarr))
           } else{
            alerts.innerText="Already Placed Order"
            alerts.style.color="red"
           }
        })

         card.append(img,title,desc,price,btn)

         container.append(card)
    });
}

// add coffee data to localstorage //



   
    function  mycart(dataid){
       
        let filtered= cartarr.filter(function(elem){   
             return elem.id==dataid 
         })
         if(filtered.length>0){
             return false
         } else{
             return true
         }
           }
  



// filtering //
function filteration(){
    let from_price=document.getElementById("lower").value
    let to_price=document.getElementById("upper").value
    let x=  filterarr.filter((el)=>{
        return el.price>=from_price && el.price<=to_price
    })
append(x)
}

// sorting //

let sorting=document.getElementById("sort")
sorting.addEventListener("change",()=>{
    sortfunc()
})

const sortfunc=async()=>{
    let value=sorting.value
    console.log(value)
 try{
 // new Promise(async(resolve,reject)=>{
    let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?sort=price&order=${value}`)
   let data=await res.json()
  // if(data){
  //  resolve()  // yha pe promise isliye use kiya q ki jb api fetch hogi to response aane me time lgega lekin 
    console.log(data) // tab tak agli line append call ho jaygi response k aane ka bina wait kiye
   append(data.data)
  // } else{
  //  reject()
  // }
// })
 }
 catch(err){
    console.log(err)
 }
}
