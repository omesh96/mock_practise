
const container=document.querySelector(".container")

let limit=5
let page=1;
let postCount=0;

const main=async()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`)
    const data=await res.json()

    console.log(data)
    append(data)
}

function append(data){

    data.forEach(el => {
        const htmlData=`
        <div class="posts">
        <p class="post-id">${postCount++}</p>
        <h2 class="title" >${el.name}</h2>
        <p class="post-info" id="comment">${el.body}</p>
        </div>
        `;

        let posts=document.createElement("div")
        posts.setAttribute("class","posts")

        let post_id=document.createElement("p")
        post_id.setAttribute("class","post-id")
       post_id.innerText=postCount
       

       let title=document.createElement("h2")
       title.setAttribute("class","post-info")
       title.innerText=el.name

       let comments=document.createElement("p")
       comments.setAttribute("class","post-info")
       comments.innerText=el.body 
       comments.style.cursor="pointer"
       comments.addEventListener("click",()=>{
        modal(el)
       })
   
        // container.insertAdjacentHTML("beforeend",htmlData)
 
         posts.append(post_id,title,comments)
        container.append(posts)

     
    });

}

main()

 //  const body=document.getElementById("body")
   window.addEventListener("scroll",()=>{
 //   const {scrollHeight,scrollTop,clientHeight}= document.documentElement;
    const sh=document.documentElement.scrollHeight
    const st=document.body.scrollTop
    const ch=document.body.clientHeight
   // const ih=window.innerHeight
 //  console.log(sh,st,ch)
    if((st+ch) >= (sh)){
     console.log("i am at bottom")
     page++
     getmoredata()
    }
   
   })

   const getmoredata=()=>{
  
    main()
   }

   // modal //
   function modal(el){
    console.log("modal",el)

    let popup=document.getElementById("popup")
    popup.innerHTML=null

 let p1=document.createElement("p")
 p1.innerText=`Name : ${el.name}`

 let p2=document.createElement("p")
 p2.innerText=`email : ${el.email}`

 let p3=document.createElement("p")
 p3.innerText=`Comment - ${el.body}`

 let btn=document.createElement("button")
 btn.innerText="OK"
 btn.addEventListener("click",()=>{
    closemodal()
 })

 popup.append(p1,p2,p3,btn)

 openmodal()

   }

   const openmodal=()=>{
    let popup=document.getElementById("popup")
    popup.classList.add("open-popup")
   }

   const closemodal=()=>{
    let popup=document.getElementById("popup")
    popup.classList.remove("open-popup")
   }