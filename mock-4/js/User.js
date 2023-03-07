
async function main(){
    let res=await fetch(`http://localhost:8008/books`)
    let data=await res.json()
    console.log(data)
   append(data)
    }
    
    main()

    function append(data){
        let container=document.getElementById("userdiv")
        container.innerHTML=null

        data.forEach(el => {
            let usercard=document.createElement("div")
            usercard.setAttribute("class","usercard")
       
            let img=document.createElement("img")
            img.src=el.image_url
            img.alt="logo"

            let author=document.createElement("p")
            author.innerText=el.author

            let genre=document.createElement("p")
            genre.innerText=el.genre

            let cost =document.createElement("div")
            cost.innerText=`Rs ${el.cost}`

            let btn=document.createElement("button")
            btn.innerText="Borrow"
            btn.addEventListener("click",()=>{
                modal(el)
            })

            usercard.append(img,author,genre,cost,btn)

            container.append(usercard)
        });
    }

     let filtering=document.getElementById("filter")   // select tag ki id
    document.getElementById("filter").addEventListener("change",()=>{
        filterfunc()
    })

   async function filterfunc(){
        let value=filtering.value
        console.log("filter",value)

 let res=await fetch(`http://localhost:8008/books?genre=${value}`)
 let data=await res.json()
  console.log(data)
  append(data)
    }

    let sorting=document.getElementById("sort")
    sorting.addEventListener("change",sortfunc)

   async function sortfunc(){
 let value=sorting.value
 console.log(value)

 let res=await fetch(`http://localhost:8008/books?_sort=cost&_order=${value}`)
 let data=await res.json()
 console.log(data)
    append(data)
 
    } 

    function modal(el){
        let popup=document.getElementById("popup")

        let img=document.createElement("img")
        img.src=el.image_url

        let closebtn=document.createElement("button")
        closebtn.innerText="CLOSE"
        closebtn.addEventListener("click",closemodal)

         let borrowbtn=document.createElement("button")
         borrowbtn.innerText="BORROW"
         borrowbtn.addEventListener("click",()=>{
            borrowfunc(el.id)
         })        
     
        popup.append(img,closebtn,borrowbtn)

        openmodal()
    }

    function openmodal(){
        let popup=document.getElementById("popup")
        popup.classList.add("open-popup")
    }
    function closemodal(){
        let popup=document.getElementById("popup")
        popup.classList.remove("open-popup")
    }
    function borrowfunc(id){
        closemodal()
        fetch(`http://localhost:8008/books/${id}`,{
            method:"PATCH",
            body:JSON.stringify({
                borrowed:true
            }),
            headers: {
               "Content-type": "application/json"
           }
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res)
        })
    }
