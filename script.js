let products ={
    data:[{
        productsName:"Bacon, Sausage & Egg Wrap",
        category:"sandwich",
        price:"70.LE",
        Image:"./Images/images/cold drink/Bacon, Sausage & Egg Wrap.webp",
    },
    {
        productsName:"Blended Strawberry Lemonade",
        category:"cold-drink",
        price:"50.LE",
        Image:"./Images/images/cold drink/Blended Strawberry Lemonade.webp",
    },
    {
        productsName:"Caffè Misto",
        category:"Hot-drink",
        price:"50.LE",
        Image:"./Images/images/cold drink/Caffè Misto.webp",
    }
    ,
    {
        productsName:"Cappuccino",
        category:"cold-drink",
        price:"50.LE",
        Image:"./Images/images/cold drink//Cappuccino.webp",
    }
    ,
    {
        productsName:"Caramel Frappuccino® Blended Beverage",
        category:"cold-drink",
        price:"50.LE",
        Image:"./Images/images/cold drink/Caramel Frappuccino® Blended Beverage.webp",
    }
    ,
    {
        productsName:"Caramel Ribbon Crunch Frappuccino® Blended Beverage",
        category:"cold-drink",
        price:"50.LE",
        Image:"./Images/images/cold drink/Caramel Frappuccino® Blended Beverage.webp",
    },
    {
        productsName:"Salted Almond Chocolate Bites",
        category:"dessert",
        price:"50.LE",
        Image:"./Images/images/cold drink/Salted Almond Chocolate Bites.webp",
    },
    {
        productsName:"Spinach, Feta & Egg White Wrap",
        category:"sandwich",
        price:"50.LE",
        Image:"./Images/images/cold drink/Spinach, Feta & Egg White Wrap.webp",
    },

],
};
for(let i of products.data){
    //create card
    let card = document.createElement("div");
    card.classList.add("card","i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image =document.createElement("img");
    image.setAttribute("src",i.Image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer)
    let container =document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5")
    name.classList.add("product-name");
    name.innerText = i.productsName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);
   let price = document.createElement("h6");
   price.classList.add("price");
   price.innerText = i.price.toUpperCase();
   price.innerText = i.price;
   container.appendChild(price);
    document.getElementById("products").appendChild(card)
}