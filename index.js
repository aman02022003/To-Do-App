const inputbox=document.getElementById('input-box');
const listitem=document.getElementById('listcontainer');
const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputbox.value;
        listitem.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
})

listitem.addEventListener("click",(e)=>{
      if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        savedata();
      }
      else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
      }
},false);

function savedata(){
    localStorage.setItem("data",listitem.innerHTML);

}

function showtast(){
    listitem.innerHTML=localStorage.getItem("data");
}
showtast();