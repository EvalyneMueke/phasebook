function getData(){
    fetch("http://localhost:3000/messages")
    .then(response => response.json())
    .then(jsonData => displayData(jsonData))
}
function displayData(data){
   // console.log(data);
    for(item of data){
        const card =document.createElement('div')
       const cardDetails=`
            <img src ="${item.image}" alt ="Student image">
            <p> ${item.message}</p>
            <h4>${item.name}</h4>
       `
       card.innerHTML=cardDetails
       const container=document.getElementById('data_container') 
       container.appendChild(card)
    }
}
getData()