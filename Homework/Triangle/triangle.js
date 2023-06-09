function calculate()
{
    let b = parseFloat(document.getElementById("Lbase").value);
    let h = parseFloat(document.getElementById("Lheight").value);

    document.getElementById("area").value = 1/2*b*h;
}