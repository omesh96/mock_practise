
// pagination //

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
    let page=Number(pagenum.innerText)

    if(Number(pagenum.innerText)>1){
    
        pagenum.innerText=(Number(pagenum.innerText))-1
       main(page-1)

    }
}
const nextfunc=()=>{
        let pagenum=document.getElementById("currentpage")
        console.log(pagenum.innerText)
        let page=Number(pagenum.innerText)
        pagenum.innerText=(Number(pagenum.innerText))+1
        main(page+1)

  
}

// https://www.balldontlie.io/api/v1/games?season=2015
function main(page=1){
    fetch(`https://www.balldontlie.io/api/v1/games?per_page=10&page=${page}`)
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

    // const team1=new Promise(async(resolve,reject)=>{
    //     try{
    //  let res=await fetch(``)
    //     }
    //     catch(err){
    //         console.log(err)
    //         reject()
    //     }
    // })
}
main()

function append(data){
    let container=document.getElementById("container")
    container.innerHTML=null

    data.forEach(element => {
       let middlebox=document.createElement("div")
       middlebox.setAttribute("id","middlebox")
       let vsimg=document.createElement("img")
         vsimg.src="https://previews.123rf.com/images/microone/microone2209/microone220900244/193520292-vs-logo-blue-neon-versus-glowing-letters-vector-illustration.jpg"
         vsimg.alt="vs"
         middlebox.append(vsimg)


        let box1=document.createElement("div")
        box1.setAttribute("id","gamecards")

        let imgbox1=document.createElement("div")
        imgbox1.setAttribute("id","imgbox")
        
        let img1=document.createElement("img")
        img1.src="https://thumbs.dreamstime.com/z/football-soccer-ball-4796264.jpg"
        img1.alt="phot"

        let res1=document.createElement("h1")
        if(element.home_team_score>element.visitor_team_score){
            res1.innerText="WON"
            res1.style.color="green"
        } else{
            res1.innerText="LOST"
            res1.style.color="red"
        }

        imgbox1.append(img1,res1)

        let name1=document.createElement("h1")
        name1.innerText=element.home_team.name

        let date=document.createElement("p")
        date.innerText=element.date

        let season=document.createElement("p")
        season.innerText=`Season: ${element.season}`

        let status=document.createElement("p")
        status.innerText=`Status: ${element.status}`

        let home_team_score=document.createElement("p")
        home_team_score.innerText=`Home_Team_Score : ${element.home_team_score}`

        let division=document.createElement("p")
        division.innerText=`Division: ${element.home_team.division}`


        box1.append(imgbox1,name1,date,season,status,home_team_score,division)

        let box2=document.createElement("div")
        box2.setAttribute("id","gamecards")

        let imgbox2=document.createElement("div")
        imgbox2.setAttribute("id","imgbox")

        let img2=document.createElement("img")
        img2.src="https://thumbs.dreamstime.com/z/football-soccer-ball-4796264.jpg"
        img2.alt="phot"

        let res2=document.createElement("h1")
        if(element.home_team_score<element.visitor_team_score){
            res2.innerText="WON"
            res2.style.color="green"
        } else{
            res2.innerText="LOST"
            res2.style.color="red"
        }

        imgbox2.append(img2,res2)

        let name2=document.createElement("h1")
        name2.innerText=element.visitor_team.name

        let date2=document.createElement("p")
        date2.innerText=element.date

        let season2=document.createElement("p")
        season2.innerText=`Season: ${element.season}`

        let status2=document.createElement("p")
        status2.innerText=`Status: ${element.status}`

        let visitor_team_score=document.createElement("p")
        visitor_team_score.innerText=`visitor_team_score : ${element.visitor_team_score}`

        let division2=document.createElement("p")
        division2.innerText=`Division: ${element.visitor_team.division}`


        box2.append(imgbox2,name2,date2,season2,status2,visitor_team_score,division2)

        


       
       

        container.append(box1,middlebox, box2)
    });
}

document.querySelector("form").addEventListener("submit",mysearch)
let formtag=document.querySelector("form")
function mysearch(){
    event.preventDefault()
   
    let start_date=formtag.start_date.value
    let end_date=formtag.end_date.value
    console.log(start_date,end_date)
    searchbydates(start_date,end_date)
}

function searchbydates(start_date,end_date){
    let dataarray=[]

    let findby_start_date=new Promise(async(resolve,reject)=>{
         try{
            let res=await fetch(`https://www.balldontlie.io/api/v1/games?start_date=${start_date}&per_page=5`)
          let data = await res.json()
          console.log(data)
          dataarray.push(...data.data)
          resolve()
         }
         catch(err){
            reject()
            console.log(err)
         }
    })

    let findby_end_date=new Promise(async(resolve,reject)=>{
        try{
           let res=await fetch(`https://www.balldontlie.io/api/v1/games?end_date=${end_date}&per_page=5`)
         let data = await res.json()
         console.log(data)
         dataarray.push(...data.data)
         resolve()
        }
        catch(err){
           reject()
           console.log(err)
        }
   })

   Promise.all([findby_start_date,findby_end_date])
   .then(()=>{
    console.log(dataarray)
    append(dataarray)
   })
   .catch((err)=>{
  return   console.log(err)
   })

}

