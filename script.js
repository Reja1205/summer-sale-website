const applyBtn = document.getElementById("button-apply");

const promoCode = document.getElementById("promo-code");
const inputCoupon = document.getElementById("input-coupon");

const discountElement = document.getElementById("discount-element");
const purchaseBtn = document.getElementById("purchase-btn");

const grandTotal = document.getElementById("grand-total");
let totalPrice = 0;

const addToCart = (target) => {
  const selectedItem = document.getElementById("cart-items");
  const cartItem = target.childNodes[3].childNodes[3].innerText;
  console.log(cartItem);

  const li = document.createElement("li");
  li.innerHTML = cartItem;

  selectedItem.appendChild(li);
  const priceStr = target.childNodes[3].childNodes[5].innerText;
  const price = parseFloat(priceStr.slice(1));

  totalPrice += price;
  // console.log(totalPrice);
  const totalUpdatedPrice = document.getElementById("total-price");
  totalUpdatedPrice.innerText = totalPrice.toFixed(2);
  grandTotal.innerText = totalPrice.toFixed(2);

  //apply coupon

  //enable apply Button and enable Make parchase Button
  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    applyBtn.removeAttribute("disabled");
  }
};
applyBtn.addEventListener("click", () => {
  console.log(inputCoupon);

  if (inputCoupon.value === "summer200") {
    const discountedPrice = totalPrice * 0.2;
    discountElement.textContent = discountedPrice.toFixed(2);

    const finalPrice = totalPrice - discountedPrice;

    grandTotal.innerText = finalPrice.toFixed(2);
  } else {
    const div = document.getElementById("div");
    const p = document.createElement("p");
    p.innerText = "Wrong coupon code";
    p.style.color = "red";

    div.appendChild(p);
  }
});
