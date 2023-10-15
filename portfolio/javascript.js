function open1(name){
    var a1=document.getElementsByClassName("tab");
    var b=document.getElementsByClassName("container");
    for(tu of a1){
        tu.classList.remove("activelink");
    }
    for(ty of b){
        ty.classList.remove("first");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(name).classList.add("first");
}