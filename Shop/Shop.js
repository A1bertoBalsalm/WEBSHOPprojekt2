// En Array med object för alla producter
let products = [
    {
        "id": "1",
        "product": "Forca Bruta (Colored Vinyl) Vinyl LP",
        "artist": "Jorge Ben",
        "category": "Vinyl",
        "price": "400",
        "img": "../GlobalImg/Products/jorgeben-forca-coloredvinyl-1_1000x1000.webp"
    },
    {
        "id": "2",
        "product": "Lift Your Skinny Fists Like Antennas To Heaven Vinyl 2LP",
        "artist": "Godspeed You! Black Emperor",
        "category": "Vinyl",
        "price": "246",
        "img": "../GlobalImg/Products/godspeedyoublack_1000x1000.webp"
    },
    {
        "id": "3",
        "product": "Selected Ambient Works 85-92 Vinyl 2LP",
        "artist": "Aphex Twin",
        "category": "Vinyl",
        "price": "246",
        "img": "../GlobalImg/Products/aphextwin-selectedamby_1000x1000.webp"

    },

]

let cartItemCountElement = document.getElementById('Total-Items')
let Price = document.getElementById('Price');





// Skapar localstorage eller om du har redan en
var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || {
    items: []
};

ShoppingCartUpadate();
TotalItems()
TotalPris()





// Pushar producten till items array och sparar den i localstorge
function ShoppingCartAdd(id)
{
    shoppingCart.items.push(products[id]);
    ShoppingCartUpadate();
    saveCartToLocalStorage();
    TotalItems()
    TotalPris()
}


function ShoppingCartRemove(i) {
    console.log(i)

    if (i > -1) {
        shoppingCart.items.splice(i, 1);
        ShoppingCartUpadate();
        saveCartToLocalStorage();
        TotalItems()
        TotalPris()


    }
}


// Kollar bara längden
function TotalItems() {
    cartItemCountElement.textContent = shoppingCart.items.length;

}

// En loop för priset
function TotalPris() {
    let total = 0;
    for (var i = 0; i < shoppingCart.items.length; i++) {
        total += parseInt(shoppingCart.items[i].price);
    }
    Price.textContent = total;
}

// Sparar ändringar till local storage
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

// Uppdadterar kundvagenen
function ShoppingCartUpadate() {
    // Själva toppen av listan
    var cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';


    // Loop för varje produkt vald som tar från items array och lägger till infot från varje object
    for (let i = 0; i < shoppingCart.items.length; i++) {


        var item = shoppingCart.items[i];
        var listItem = document.createElement('li');
        listItem.className = 'cart-item';

        var removeButton = document.createElement('removeButton');
        removeButton.textContent = 'X';
        removeButton.addEventListener("click", () => {
            ShoppingCartRemove(i);

        });
        removeButton.className = "cart-remove"
        listItem.appendChild(removeButton);

        var image = document.createElement('img');
        image.src = item.img;
        image.alt = "";
        // barn till li
        listItem.appendChild(image);
        image.className = 'cart-image'


        var itemDetails = document.createElement('span');
        itemDetails.textContent = item.product + '  ' + item.price+'kr';
        listItem.appendChild(itemDetails);



        // Barn till ul
        cartItemsElement.appendChild(listItem);
    }
}



// Inget specillt bara visar knappen när kunden håller över produkten
function ItemExpand(id) {
    if (id === 0){
        var x = document.getElementById('but0');
    }
    else if (id === 2){
        var x = document.getElementById('but2');
    }
    else {
        var x = document.getElementById('but1');
    }

    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }


}

function openMenu() {
    var sideMenu = document.getElementById('ShoppingCart');
    sideMenu.classList.add('open');
}

function closeMenu() {
    var sideMenu = document.getElementById('ShoppingCart');
    sideMenu.classList.remove('open');
}



