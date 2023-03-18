// document.ready({
//
// })


$(function () {
    //  alert("dropdown")
    let dropbtn = document.getElementsByClassName("dropbtn");
    let x = document.getElementsByClassName("drop-down-con")

    for (let i = 0; i < 5; i++) {
        

        dropbtn[i].addEventListener('click',()=>{
                x[i].classList.toggle("onclick")
        })
        
    }

    
});

