const save=document.getElementById("save");
const Name=document.getElementById("name");
const age=document.getElementById("age");

save.addEventListener("cick",function(e){
    
    const user ={
        username: Name,
        userage:age
    };
    localStorage.setItem("user",JSON.stringify(user) );
    const saveuser= JSON.parse(localStorage.getItem("user"))
   
    document.getElementById("output").innerHTML=
    "Name: "+ saveuser.username + ", Age: "+ saveuser.userage;


})