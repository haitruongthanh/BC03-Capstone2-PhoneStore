import { renderList } from "./phoneController.js";

const BASE_URL = "https://6271e18825fed8fcb5ec0d68.mockapi.io/phone-store";
const CART_LIST_LOCAL = "CART_LIST_LOCAL";

let productList = [];
let cart = [];

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
  console.log(id);
  let index = cart.findIndex((item) => {
    return item.id === id;
  });

  if (index === -1) {
    let newPhoneCart = { ...productList[id - 1], quantity: 1 };
    cart.push(newPhoneCart);
  } else {
    cart[index].quantity++;
  }
  renderCartQuantity();
  saveToLocal();
};

const saveToLocal = () => {
  let cartListJson = JSON.stringify(cart);
  localStorage.setItem(CART_LIST_LOCAL, cartListJson);
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

renderCartQuantity();

window.renderByType = renderByType;
window.addToCartList = addToCartList;
window.renderCartQuantity = renderCartQuantity;
window.callFromLocal = callFromLocal;
