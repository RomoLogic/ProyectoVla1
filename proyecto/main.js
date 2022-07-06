function Mostrar() {
    let url ="https://randomuser.me/api/"
    let contenido = document.getElementById("contenido")
    let name ;
    let imagen;
    let location;
    let email;
    let phone;
    let miinformacion 
        
    fetch(url)
    .then(response => response.json())
    .then(data => {
    name =data.results[0].name.first
    imagen = data.results[0].picture.large
    location = data.results[0].location.city
    email = data.results[0].email
    phone = data.results[0].phone
    
    miinformacion =` 
            <img src="${imagen}" alt="" class="img-fluid rounded-circle"> 
            <p>Name : ${name} </p> 
            <p>Location : ${location} </p> 
            <p>Email : ${email} </p> 
            <p>Phone : ${phone} </p>
            
        `
    
    contenido.innerHTML = miinformacion
       
    
    console.log(name)
    console.log(imagen)
    console.log(location) 
    console.log(email) 
    console.log(phone)
    
        
    })
    
    }
    function Tabla() {
        let contenidotabla =document.getElementById("contenidotabla")
        let misdatos ;
        let url2="https://jsonplaceholder.typicode.com/photos"
        fetch(url2)
        .then(response=> response.json())
        .then(data=>{
    
    
            data.forEach(element => {
               misdatos += ` 
              
               <tr> 
                        
                         <td>${element.id}</td>  
                         <td>${element.title}</td>
                         <td>${element.thumbnailUrl}</td>
                         
               </tr>
             `
                
            });
            contenidotabla.innerHTML = misdatos
        })
    
    }
