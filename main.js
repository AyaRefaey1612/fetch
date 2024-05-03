let mainDiv=document.querySelector(".Data");
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>(response.json()))
.then((repositores)=>{
    console.log(repositores)

    repositores.forEach(repose => {
        let subDiv=document.createElement("div");
        subDiv.className="repos-box";
        let title=document.createElement("h2");
        let tileText=document.createTextNode(`${repose.title}:-`);
        title.appendChild(tileText);
        let body=document.createElement("p");
        let bodyText=document.createTextNode(repose.body);
        body.appendChild(bodyText);
        let id=document.createElement("span");
        let idText=document.createTextNode(repose.id);
        id.appendChild(idText) 
        
        
        subDiv.appendChild(title);
        subDiv.appendChild(body);
        subDiv.appendChild(id);
        mainDiv.appendChild(subDiv);

        
    });
})

