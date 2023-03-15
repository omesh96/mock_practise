 

 // url = https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products
 // filter= https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=women/men/kids/homedecor
// sorting=https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?sort=price&order=desc
// pagination =https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=5&page=1

 let  main=async()=>{
  try{
 let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
 let data=await res.json()
 console.log(data)
  }
  catch(err){
    console.log(err)
  }
}
main()