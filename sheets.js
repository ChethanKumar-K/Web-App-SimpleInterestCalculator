
function updateRate(){
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
}
function compute()
{
    const x=document.getElementById("principal").value;
    if(x<=0 || typeof(x)==NaN){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate/100;
    var amount = principal+interest;
    var yearInFuture = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML=
        "If you deposit <mark>"+principal+"</mark>,<br />"+
        "At an interest of <mark>" + rate + "</mark>,<br />" +
        "You will recieve an amount of <mark>"+ interest +"</mark>,<br />" +
        "in the year <mark> " + yearInFuture + "</mark>,<br />";
    }
    
}