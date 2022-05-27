let car =  {
    company:"Hyundai",
    model:"EON", 
    color:"White"
}
    
    let small = Object.create(car);
    
    let verySmall = Object.create(small);
    verySmall.name = "D-lite";
    
    console.log(verySmall);