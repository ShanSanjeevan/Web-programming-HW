function result()
{
    
    let l1 = parseFloat(document.getElementById("leg1").value);
    let l2 = parseFloat(document.getElementById("leg2").value);
    
    document.getElementById("result").value = Math.sqrt((l1*l1)+(l2*l2));
    
    
}