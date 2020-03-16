

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
