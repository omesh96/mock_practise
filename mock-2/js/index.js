

let prevpage=document.getElementById("prev")
prevpage.addEventListener("click",()=>{
    prevfunc()
})

let nextpage=document.getElementById("next")
nextpage.addEventListener("click",()=>{
    nextfunc()
})

const prevfunc=()=>{
    let pagenum=document.getElementById("currentpage")
    console.log(pagenum.innerText)
    if(Number(pagenum.innerText)>1){
        let p=Number(pagenum.innerText)
        pagenum.innerText=p-1
        pagenum.value=p-1
       main(p-1)
    }
}

const nextfunc=()=>{
    let pagenum=document.getElementById("currentpage")
    console.log(pagenum.innerText)
    //if(Number(pagenum.innerText)>1){
        let p=Number(pagenum.innerText)
        pagenum.innerText=p+1
        pagenum.value=p+1
       main(p+1)
  //  }
}

function main(page=1){
    fetch(`https://www.balldontlie.io/api/v1/players?per_page=10&page=${page}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        append(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function append(data){
    let container=document.getElementById("container")
    container.innerHTML=null;
    data.forEach(el => {
        
        let box=document.createElement("div")
         box.setAttribute("id","playercardbox")

    //      let popdiv=document.createElement("div")
    // popdiv.setAttribute("class","popup")
    // popdiv.setAttribute("id","popup")

         let img=document.createElement("img")
         img.src="https://www.shutterstock.com/image-vector/soccer-player-ball-stadium-light-600w-731216308.jpg"
         img.alt="player"

         let p1=document.createElement("p")
         p1.innerText=`Name : ${el.first_name} ${el.last_name}`

         let p2=document.createElement("p")
         p2.innerText=`Position : ${el.position} `

         let btn=document.createElement("button")
         btn.setAttribute("id","teambtn")
         btn.innerText="Team Details"
         btn.addEventListener("click",()=>{
            teamdetails(el)
         })

         box.append(img,p1,p2,btn)
        
         container.append(box)
        });
}

const teamdetails=(el)=>{
    console.log(el)

    let popup=document.getElementById("popup")
    popup.innerHTML=null

   let img=document.createElement("img")
    img.src="https://www.shutterstock.com/image-vector/soccer-player-ball-stadium-light-600w-731216308.jpg"
   img.alt="player"

    let h2=document.createElement("h2")
    h2.innerText="Team Details"

    let p1=document.createElement("p")
    p1.innerText=`Team : ${el.team.name}`

    let p2=document.createElement("p")
    p2.innerText=`Abbr : ${el.team.abbreviation}`

    let p3=document.createElement("p")
    p3.innerText=`Conference : ${el.team.conference}`

    let p4=document.createElement("p")
    p4.innerText=`division : ${el.team.division}`

    let p5=document.createElement("p")
    p5.innerText=`City : ${el.team.city}`

    let btn=document.createElement("button")
    btn.innerText="OK"
    btn.addEventListener("click",closemodal)
    // popup.innerHTML=null
   popup.append(img,h2,p1,p2,p3,p4,p5,btn)
  openmodal()
}

function openmodal(){
  //  console.log("open-modal")
    let popup=document.getElementById("popup")
    popup.classList.add("open-popup")

 }

 function closemodal(){
    let popup=document.getElementById("popup")
    popup.classList.remove("open-popup")
 }


 function searchbyname(){
    let query=document.getElementById("search").value

    fetch(`https://www.balldontlie.io/api/v1/players?per_page=10&search=${query}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        append(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
   
 }