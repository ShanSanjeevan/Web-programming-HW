function perimeter() {
    let r = parseFloat(document.getElementById("radius").value);
    document.getElementById("perimeter").value = 2*(22/7)*r;

}

function area() {
    let r = parseFloat(document.getElementById("radius").value);
    document.getElementById("area").value = (22/7)*r*r;

}