import {
  renderCartList,
  renderList,
  findIndexCartItem,
  saveToLocal,
} from "./phoneController.js";

const BASE_URL = "https://6271e18825fed8fcb5ec0d68.mockapi.io/phone-store";
export const CART_LIST_LOCAL = "CART_LIST_LOCAL";

let productList = [];
export let cart = [];

const getPhoneList = async function () {
  await axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      productList = res.data;
      renderList(productList);
    })
    .catch((err) => {
      console.log("err", err);
    });
};
getPhoneList();

callFromLocal();

const renderByType = () => {
  let phoneType = document.getElementById("phoneType").value;
  let iphoneList = [];
  let samsungList = [];
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      res.data.forEach(function (item) {
        if (item.type) {
          iphoneList.push(item);
        } else {
          samsungList.push(item);
        }
      });

      if (phoneType == 1) {
        renderList(samsungList);
      } else if (phoneType == 2) {
        renderList(iphoneList);
      } else {
        renderList(productList);
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

let addToCartList = (id) => {
  let index = findIndexCartItem(id);

  if (index === -1) {
    let newPhoneCart = { ...productList[id - 1], quantity: 1 };
    cart.push(newPhoneCart);
  } else {
    cart[index].quantity++;
  }
  renderCartQuantity();
  saveToLocal();
  renderCartList(cart);
};

const renderCartQuantity = () => {
  let count = document.getElementsByClassName("count-number");
  let quantityArr = cart.map(function (item) {
    return item.quantity;
  });

  let quantity = 0;
  if (cart.length) {
    quantity = quantityArr.reduce((a, b) => {
      return a + b;
    });
  }

  for (let index = 0; index < count.length; index++) {
    count[index].innerHTML = quantity;
  }
};

function callFromLocal() {
  let cartListJson = localStorage.getItem(CART_LIST_LOCAL);
  if (cartListJson) {
    cart = JSON.parse(cartListJson);
  }
}

if (cart.length) {
  renderCartList(cart);
}

export const removeCartItem = (id) => {
  let index = findIndexCartItem(id);
  cart.splice(index, 1);
  saveToLocal(cart);
  renderCartList(cart);
  renderCartQuantity();
};

export const increaseQuantity = (id, value) => {
  let index = findIndexCartItem(id);
  if (index !== -1) {
    cart[index].quantity += value;
  }
  cart[index].quantity === 0 && cart.splice(index, 1);
  saveToLocal(cart);
  renderCartList(cart);
  renderCartQuantity();
};

const checkout = () => {
  cart.splice(0, cart.length);
  saveToLocal(cart);
  renderCartList(cart);
  renderCartQuantity();
};

renderCartQuantity();

window.renderByType = renderByType;
window.addToCartList = addToCartList;
window.renderCartQuantity = renderCartQuantity;
window.callFromLocal = callFromLocal;
window.removeCartItem = removeCartItem;
window.increaseQuantity = increaseQuantity;
window.checkout = checkout;
