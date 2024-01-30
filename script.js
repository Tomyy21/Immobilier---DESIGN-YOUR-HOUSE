function toggleBtn(){
    const btn = document.getElementById("btn");
    const span_light = document.getElementById("span_light");
    const Lumiere = document.getElementById("Lumiere");
    if (btn.className==="btn-light-off"){
        btn.classList.remove("btn-light-off");
        btn.classList.add("btn-light-on");

        span_light.classList.remove("span-light-off");
        span_light.classList.add("span-light-on");

        Lumiere.classList.remove("Lumiere_off");
        Lumiere.classList.add("Lumiere_on");

    } else {
        btn.classList.remove("btn-light-on");
        btn.classList.add("btn-light-off");

        span_light.classList.remove("span-light-on");
        span_light.classList.add("span-light-off");

        Lumiere.classList.remove("Lumiere_on");
        Lumiere.classList.add("Lumiere_off");
    }


    
}
