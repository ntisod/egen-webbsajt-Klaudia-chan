function newInput(str) {
    document.getElementById("inputten").value += str;
}
function calculate(){
    var inputten = String(document.getElementById("inputten").value);
    inputten=inputten.replace(/\^/g, "**");
    inputten=inputten.replace(/√/g, "math.sqrt");
    console.log(inputten);
    document.getElementById("inputten").value = eval(inputten);
}
function oldInput(){
    document.getElementById("inputten").value = "";
}