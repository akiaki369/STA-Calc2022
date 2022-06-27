let hensu = 0;

function add(hikisu) {
    let element = document.getElementById('hyouji');
    if (hikisu == document.getElementById('kigou')) {
        
    } else {
        hensu *= 10;
        hensu += hikisu;
        element.textContent = hensu;
    }
}
