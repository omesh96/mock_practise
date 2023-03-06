
let orderarr=JSON.parse(localStorage.getItem("buy")) || []
let container=document.getElementById("order-container")
let total_price=document.getElementById("order-total")
let coupen=document.getElementById("applycoupen")
let coupencount=0;

 function getcoupen(){
    if(coupen.value==="Masai30" && coupencount<1){
        coupencount++
        total_price.innerText=Math.floor(Number(total_price.innerText)*0.7)
    } else{
        alert("Wrong Coupen Code")
    }
 }



orderarr.forEach(el => {
     let current_qty=1;
     let priceCount=0;

     let ordercard=document.createElement("div")
     ordercard.setAttribute("class","order-card")

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

         let btndiv=document.createElement("div")
         btndiv.setAttribute("class","btndiv")

         let currentbtn=document.createElement("button")
         currentbtn.innerText=`${current_qty}`
         currentbtn.setAttribute("class","current-qty")

         let prevbtn=document.createElement("button")
         prevbtn.innerText="-"
         prevbtn.addEventListener("click",()=>{
           if(current_qty>1){
          current_qty--;
        currentbtn.innerText=current_qty

       // priceCount=el.price*current_qty
        total_price.innerText=Number(total_price.innerText)-el.price
       }
         })

        

         let nextbtn=document.createElement("button")
         nextbtn.innerText="+"
         nextbtn.addEventListener("click",()=>{
            current_qty++;
            currentbtn.innerText=current_qty
            console.log("price-count",priceCount)

          //  priceCount+=el.price
            total_price.innerText=Number(total_price.innerText)+el.price
         })
         

         btndiv.append(prevbtn,currentbtn,nextbtn)

         let cancelbtn=document.createElement("button")
         cancelbtn.innerText="Cancel"
         cancelbtn.addEventListener("click",()=>{
            deleteitem(el)
         })

         ordercard.append(img,title,desc,price,btndiv,cancelbtn)

         


     container.append(ordercard)

    
     
     priceCount=el.price*current_qty
     total_price.innerText=Number(total_price.innerText)+priceCount // first time update jb hoga automatic wala
});

const deleteitem=(el)=>{
  let filtered=  orderarr.filter((elem)=>{
        return elem!==el
    })

    localStorage.setItem("buy",JSON.stringify(filtered))
    alert("Your Item is Deleted Successfully !")
    window.location.reload()
}

