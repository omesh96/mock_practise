
let updateobj={}

async function main(){
let res=await fetch(`http://localhost:8008/books`)
let data=await res.json()
console.log(data)
append(data)
}

main()

const append=async(data)=>{
 
    data.forEach(el => {
        let tr=document.createElement("tr")

        let td1=document.createElement("td")
        let img=document.createElement("img")
        img.src=el.image_url
        img.alt="logo"
    td1.append(img)

    let td2=document.createElement("td")
    td2.innerText=el.book_name

    let td3=document.createElement("td")
    td3.innerText=el.author

    let td4=document.createElement("td")
    td4.innerText=el.genre

    let td5=document.createElement("td")
    td5.innerText=el.edition

    let td6=document.createElement("td")
    td6.innerText=el.publisher

    let td7=document.createElement("td")
    td7.innerText=el.cost

    let td8=document.createElement("td")
    td8.innerText=el.borrowed

    let td9=document.createElement("td")
    td9.innerText="EDIT"
    td9.style.backgroundColor="green"
    td9.style.color="white"
    td9.addEventListener("click",()=>{
        updatefunc(el.id)
    })

    let td10=document.createElement("td")
    td10.innerText="DELETE"
    td10.style.backgroundColor="red"
    td10.style.color="white"
    td10.addEventListener("click",()=>{
        deletebook(el.id)
    })


      tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10)
      document.querySelector("tbody").append(tr)
    });
}

document.querySelector("form").addEventListener("submit",addData)
let formtag=document.querySelector("form")

function addData(){
    event.preventDefault()
 let url=formtag.url.value
 let name=formtag.name.value
 let author=formtag.author.value
 let genre=formtag.genre.value
 let edition=formtag.edition.value
 let publisher=formtag.publisher.value
 let price=Number(formtag.price.value)
 let borrowed=formtag.borrowed.value

 addBook(url,name,author,genre,edition,publisher,price,borrowed)
 
}

const addBook=async(url,name,author,genre,edition,publisher,price,borrowed)=>{
    fetch(`http://localhost:8008/books`,{
    method:"POST",
    body:JSON.stringify({
        image_url:url,
        book_name:name,
        author:author,
        genre:genre,
        edition:edition,
        publisher:publisher,
        cost:price,
        borrowed:borrowed
    }),
    headers: {
       "Content-type": "application/json"
   }
 })
 .then((res)=>{
    return res.json()
 })
 .then((res)=>{
    console.log(res)  //call append function here //
 })
 .catch((err)=>{
    console.log(err)
 })
}

function updatefunc(id){
    let popup=document.getElementById("popup")
    popup.innerHTML=null

    let idtext=document.createElement("h2")
    idtext.innerText=`Book Id ${id}`

    const image_url_input=document.createElement("input")
     image_url_input.placeholder="enter image url"
     image_url_input.setAttribute("id","update_url")
   

     let book_name_update=document.createElement("input")
     book_name_update.placeholder="enter book name"
     book_name_update.setAttribute("id","book_name_update")

    let btn=document.createElement("button")
    btn.innerText="Update"
    btn.addEventListener("click",()=>{
        closeupdate(id)
    })

    popup.append(idtext,image_url_input,book_name_update,btn)

    openmodal()

}



function openmodal(){
    //  console.log("open-modal")
      let popup=document.getElementById("popup")
      popup.classList.add("open-popup")
  
   }

    function closeupdate(id){
        let obj={}
    let image_url=document.getElementById("update_url").value
    let book_name=document.getElementById("book_name_update").value

    if(image_url.length>0){
        obj["image_url"]=image_url
    }
    if(book_name.length>0){
        obj["book_name"]=book_name
    }

     console.log(obj)

     fetch(`http://localhost:8008/books/${id}`,{
        method:"PATCH",
        body:JSON.stringify(obj),
        headers:{
            'Content-type': 'application/json'
        }
     })
     .then((res)=>{
        return res.json()
     })
     .then((res)=>{
        console.log(res)
     })
 

        closemodal()
    }
   function closemodal(){
    let popup=document.getElementById("popup")
    popup.classList.remove("open-popup")
   }

   function deletebook(id){
    fetch(`http://localhost:8008/books/${id}`,{
        method:"DELETE",
        headers:{
            'Content-type': 'application/json'
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
    })
   }