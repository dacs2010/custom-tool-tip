function showDiv() {
    document.addEventListener("click", function(){
        console.log(event.srcElement)
    })
}


showDiv();
