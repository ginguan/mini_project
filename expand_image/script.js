const body = document.querySelector("body");
console.log(body);
const panels = body.querySelectorAll(".panel");
console.log(panels);
panels.forEach((panel)=>{

    panel.addEventListener('click',()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
});

function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}