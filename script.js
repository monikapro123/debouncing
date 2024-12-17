

const input = document.getElementById("input");

function debounce(func,delay){
    
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            console.log("hello");
            func(...args);
          },delay);
    }
}

function myFunction(e){  
    const query= e.target.value;
    console.log(query);
    fetch(`https://fakestoreapi.com/products/category/${query}`)
            .then(res=>res.json())
            .then(json=>console.log(json))

}
input.addEventListener("input", debounce(myFunction,1000));



