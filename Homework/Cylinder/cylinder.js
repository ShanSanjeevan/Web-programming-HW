function area()
{
    let r = parseFloat(document.getElementById("radius").value);
    let h = parseFloat(document.getElementById("height").value);
    const PI = (3.14);

    document.getElementById("area").value = (2*PI*r*r)+(2*PI*r*h);
}