const mobiles = document.querySelector("#mobiles");
const cart = document.querySelector(".cart");

const goods = [
  {name: "samsung", price: 1000, quantity: 1, id: 1 },
  {name: "LG", price: 3000, quantity: 1, id: 2 },
  {name: "Artel", price: 600, quantity: 1, id: 3 },
  {name: "Apple", price: 1300, quantity: 1, id: 4 },
];

let korzina = [];
const addGood =(id, name, price, quantity) => {
  const findItem = korzina.findIndex(el=> el.id == id);

  if(findItem < 0) {
    const newItem = {
      id,
      name,
      price,
      quantity
    };
    korzina = [...korzina, newItem];
    console.log(korzina);
  } else {
    const newItems = korzina.map(elem=> {
      if(elem.id == id) {
        return {
          ...elem,
          quantity: elem.quantity + 1,
        }
      } else {
        return elem
      }
    });
    korzina = newItems;

    console.log(korzina);
  } 
  cart.innerHTML = korzina.map (elem => {
    return `<div class="good" ><b>${elem.name}</b>
    <span> ${elem.price}$</span>
    x<span>${elem.quantity}=${elem.price*elem.quantity}$</span>
    <div>
    <button class="btn btn-success">+</button>
    <button class="btn btn-warning">-</button>
    </div>
    <button class="btn btn-danger">delete</button>
    </div>`
  })
};

const goodsList = goods.map(
  ({id, name, price, quantity}) => 
  ` <div class="col-md-4 text-center col-sm-6 col-xs-6">
  <div class="thumbnail product-box">
      <img src="assets/img/dummyimg.png" alt="" />
      <div class="caption">
          <h3><a href="#">${name}</a></h3>
          <p>Price : <strong>${price}</strong>  </p>
          <p><a href="#">Ptional dismiss button </a></p>
          <p>Ptional dismiss button in tional dismiss button in   </p>
          <p>
              <buttom  class="btn btn-success" role="button" onClick="addGood(${
                id}, '${name}', ${price}, ${quantity})"
    
                >Add To Cart</
                buttom>
          </p>
      </div>
  </div>
</div>`
);

mobiles.innerHTML = goodsList;

const showCart = document.querySelector("#showCart");
const cartShadow = document.querySelector(".cartShadow");
showCart.addEventListener("click",  () => {
  cartShadow.style.display = "flex";
});

cartShadow.addEventListener("click", () => {
  cartShadow.style.display = "none";
});