

function authorDialog(){
    alert('Klaudia K skapade den här sidan år 2020')
}
function myFunction(){
    document.getElementById("vanligText").innerHTML = "Klaudia K";
}
function mat(sw){
    var pic;
    if (sw == 0){
        pic = "sushi.jpg"
    } else {
        pic = "kebab.jpg"
    }
    document.getElementById('matbild').src = pic;
}
function getName(){
    var x, text;
    x = document.getElementById("name").value;

    text = "hej " + x + "!";
    document.getElementById("demo").innerHTML = text;
}
function math(){
    var x1 = parseFloat(document.getElementById("num1").value);
    var x2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("svar").value = x1 + x2;
}
function math1(){
    var x1 = parseFloat(document.getElementById("num12").value);
    var x2 = parseFloat(document.getElementById("num22").value);
    document.getElementById("svar2").value = x1 - x2;
}
function math2(){
    var x1 = parseFloat(document.getElementById("num13").value);
    var x2 = parseFloat(document.getElementById("num23").value);
    document.getElementById("svar3").value = x1 / x2;
}
function math3(){
    var x1 = parseFloat(document.getElementById("num14").value);
    var x2 = parseFloat(document.getElementById("num24").value);
    document.getElementById("svar4").value = x1 * x2;
}