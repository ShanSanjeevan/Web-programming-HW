function add()
{
    let fn = parseFloat(document.getElementById("fnumber").value);
    let sn = parseFloat(document.getElementById("snumber").value);

    document.getElementById("cal").value = fn + sn;
}

function sub()
{
    let fn = parseFloat(document.getElementById("fnumber").value);
    let sn = parseFloat(document.getElementById("snumber").value);

    document.getElementById("cal").value = fn - sn;
}

function mul()
{
    let fn = parseFloat(document.getElementById("fnumber").value);
    let sn = parseFloat(document.getElementById("snumber").value);

    document.getElementById("cal").value = fn * sn;
}

function div()
{
    let fn = parseFloat(document.getElementById("fnumber").value);
    let sn = parseFloat(document.getElementById("snumber").value);

    document.getElementById("cal").value = fn / sn;
}