const mainDisplay = document.querySelector('main');
const asideCart = document.querySelector('aside');


// Array of objects 
// namegiving - a = array, o = object(s)
const aoShoes = [
    {
        img:'img/Nike-orange.jpg',
        name:'Nike Air Max 720',
        description:`Opfrisk din swoosh-stil med disse herre Air Max 720 trainers.`,
        alt: 'Nike Air Max med orange sål, hælen er en orange farvet gennemsigtig plast bobbel imellem sål og sko. og sort top parti.',
        price: 1550,
        id: 0
    },
    {
        img: 'img/Nike-aqua.jpg' ,
        name: 'Nike Air Max 200',
        description: 'Bølgede linjer er inspireret af strømmen af lava og havets rytmiske bølger.',
        alt: 'Nike Air Max med hvid og aqua blå sål, samt en mindre gennemsigtig plastbobbel på siden af hælen, sort Nike logo på siden, coral rød kant hvide snørebånd samt et sort, aqua og cyan farvet pattern.',
        price: 998,
        id: 1
    },
    {
        img: 'img/Nike-aquamarine.jpg',
        name: 'Nike Air Max 90 HYP Womens',
        description: 'Opfrisk din swoosh-stil med disse kvinde Air Max 90 trainers - special color edition.',
        alt: 'Nike Air Max med cyan farvet sål, cyan farvet gennemsigtig plast bobbel imellem sål og sko. Nike logo på siden. Glidende overgang fra cyan til marineblå.',
        price: 1550,
        id: 2
    },
    {
        img: 'img/Nike-bauhaus.jpg',
        name: 'Nike Air Max 200',
        description: 'Bølgede linjer er inspireret af strømmen af lava og havets rytmiske bølger.',
        alt: 'Nike Air Max med hvid og skyblue sål, samt en mindre gennemsigtig pink plastbobbel på siden af hælen, sort Nike logo på siden, lyse violet kant pink snørebånd samt et okker gult, grønt og hvidt farvet pattern.',
        price: 1200,
        id: 3
    },
    {
        img:'img/Nike-blackwhite.jpg',
        name:'Nike Air Max 200 BW',
        description:'Vi har længe vidst at denne silhuet var på trapperne, og er glade for at den kom.',
        alt: 'Nike Air Max med hvid og sort sål, samt en mindre knapt gennemsigtig sort plastbobbel på siden af hælen, sort Nike logo på siden, grøn og coral rød kant, sorte snørebånd samt et sort og hvidt farvet pattern.',
        price: 1200,
        id: 4
    },
    {
        img:'img/Nike-greenyellow.jpg',
        name:'Nike Air Max Retro Future(GS)',
        description:'High Voltage 720. Fremtid og fortid i perfekt match.',
        alt: 'Nike Air Max med lysegrøn farvet sål, lysegrøn farvet gennemsigtig plast bobbel imellem sål og sko. Glidende overgang fra lysegrøn til sort med et pixeleret pattern. Sorte snørebånd.',
        price: 1899,
        id: 5
    },
    {
        img:'img/Nike-pastel.jpg',
        name:'Nike Air Max 270 Phantom',
        description:'Nike Air Max 270 Phantom releaser d. 3. juli, så sid klar ved tasterne, hvis du vil have fat i et par.',
        alt: 'Nike Air Max med hvid forparti og sort bagparti på sål, gult farvet gennemsigtig plast bobbel imellem sål og sko. sort Nike logo på siden, tildels dækket af coral rød, baby blå og hvidt pattern. Bright gul kant og hvide snørebånd.',
        price: 1100,
        id: 6
    },
    {
        img:'img/Nike-whitered.jpg',
        name:'Nike Air Max Older Kids',
        description:'Opfrisk din swoosh-stil med disse herre Air Max 720 trainers.',
        alt: 'Hvid og mørkerøde Nike Air Max sko. Med rød plasthæl. Et lille rødt Nike logo på snude af skoen og et større rødt på siden af skoen. Hvide snørrebunder. Skoen har åndehuller.',
        price: 1200,
        id: 7
    },
    {
        img:'img/Nike-rainbow.jpg',
        name:'Nike Air Max Metallic Pink',
        description:'Opfrisk din swoosh-stile med disse here Air Max 720 trainers.',
        alt: 'Regnbue farvet Air Max sko med hvide hæle, 4 små gennemsigtige air bubbles på siden af hælen. Farverne orange, lyserøde, lilla, blå og hvid fordeler sig smoothly udover et strippet pattern.',
        price: 1200,
        id: 8
    },
    // template for adding more shoes later
    // {
    //     img:'',
    //     name:'',
    //     description:'',
    //     alt: '',
    //     price:,

    // },
];

let aoShoesIdInBasket = [];

// SHOES 

// function that creates and renders shoe elements in browser
function createShoesDisplay() {
    aoShoes.forEach(shoe => {
        const shoeHTML = `
        <article class="card">
            <img src="${shoe.img}" alt="${shoe.alt}">
            <h2>${shoe.name}</h2>
            <p>${shoe.description}</p>
            <div>
                <h3>${shoe.price} kr</h3>
                <input type="submit" value="+ Tilføj til kurv" id="${shoe.id}" class="btnAddToCart">
            </div>
        </article>
        `;
        // turns string into a DOM element
        const shoeFragment = document.createRange().createContextualFragment(shoeHTML);
        mainDisplay.append(shoeFragment);
    })
}

// Function that creates the cart
function createCart() {
    const cartHTML = `
        <article id="cart">
            <h1>Kurv</h1>
            <div id="basket">
            </div>
            <h2>Total: 0</h2>
            <input type="submit" value="Gå til betaling">
        </article>
    `;
    const cartFragment = document.createRange().createContextualFragment(cartHTML);
    asideCart.append(cartFragment);
}

// Function to create the shoes html for cart 
function createShoesForCart(shoe) {
    window.localStorage.setItem('item', JSON.stringify(aoShoesIdInBasket));
    const shoeHTML = `
        <img src="${shoe.img}" alt="${shoe.alt}">
        <div>
            <h2>${shoe.name}</h2>
            <h5>Antal: </h5>
        </div>   
        <div>
             
        </div>
    `;
    const cartFragment = document.createRange().createContextualFragment(shoeHTML);
    basket.append(cartFragment);
}



// Function handling buttonClick
function handleBuyButtonClick(e) {
    aoShoesIdInBasket.push(aoShoes[e.currentTarget.id])
   console.log(e.currentTarget.id);
   createShoesForCart(aoShoes[e.currentTarget.id]);
}


// Runs when window is fully loaded.
window.addEventListener('load', (event) => {
    createShoesDisplay();
    createCart();
    let itemsInBasket = JSON.parse(window.localStorage.getItem('item'));
    console.log(itemsInBasket);
    const basket = document.querySelector('#basket');
    const btnAddToCart = document.querySelectorAll('.btnAddToCart');
    btnAddToCart.forEach(function(buyButton) {
        buyButton.addEventListener('click', handleBuyButtonClick); 
    });    
});


