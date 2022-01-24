console.log("Hello there")
let count = 0;
let value = document.getElementById("value");
let btn = document.querySelectorAll(".btn");
Array.from(btn).forEach(function(element){
    element.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("increase"))
        {
            count++;
        }
        else if(styles.contains("decrease"))
        {
            count--;
        }
        else{
            count = 0;
        }
        value.innerHTML = count;
        if(count < 0)
        {
            value.style.color = "red";
        }
        else if(count > 0)
        {
            value.style.color = "green";
        }
        else if(count === 0)
        {
            value.style.color = "black";
        }
    })

})