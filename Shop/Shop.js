let varor=[];
let priser=[];
let varukorg=[];

var json = JSON.parse()

function add(id)
{

    varor.push(varu_nam);
    priser.push(varu_pis);

    let vara={
        namn:varu_nam,
        pris:varu_pis
    }
    varukorg.push(vara);
    window.localStorage.setItem("nyckel",JSON.stringify(variabel));
    varukorg = JSON.parse(window.localStorage.getItem("nyckel"));
}

function addshoppingcart(varu_id)
{


    const productId = 2;
    const product = products.find(p => p.id === productId);
    const price = product.price;


}




function ItemExpand() {
    var x = document.querySelector('.Item-button');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
}




 