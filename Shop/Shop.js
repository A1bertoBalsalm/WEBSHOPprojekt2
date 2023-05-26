// Inget specillt bara visar knappen när kunden håller över produkten
function ItemExpand(id) {
    let x
    if (id === 0){
        x = document.getElementById('but0');
    }
    else if (id === 2){
        x = document.getElementById('but2');
    }
    else {
        x = document.getElementById('but1');
    }

    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }


}




