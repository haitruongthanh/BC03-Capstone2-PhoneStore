import {
  removeCartItem,
  cart,
  CART_LIST_LOCAL,
  increaseQuantity,
} from "./main.js";

export function findIndexCartItem(id) {
  return cart.findIndex((item) => {
    return item.id === id;
  });
}

export const renderList = (phoneList) => {
  let contentHTML = "";
  phoneList.forEach(function (item) {
    var contentLi = /* html */ `
        <li class="wc-block-grid__product product-grid">
            <div class="loop-image-wrap botiga-add-to-cart-button-layout2 botiga-quick-view-button-layout2">
                <a href="#" class="wc-block-grid__product-link">
                <div class="wc-block-grid__product-image">
                    <img
                    width="420"
                    height="504"
                    src=${item.img}
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                    alt=""
                    loading="lazy"
                    sizes="(max-width: 420px) 100vw, 420px"
                    />
                </div>
                </a>
                <a
                href="#"
                class="button botiga-quick-view-show-on-hover botiga-quick-view botiga-quick-view-layout2"
                >
                Quick View
                </a>
            </div>
            <a
                href="#"
                class="wc-block-grid__product-link"
            >
                <div class="wc-block-grid__product-title">
                ${item.name}
                </div>
            </a>
            <div class="wc-block-grid__product-price price">
                <ins>
                <span class="woocommerce-Price-amount amount">
                    <span class="woocommerce-Price-currencySymbol">$</span>${item.price}
                </span>
                </ins>
            </div>
            <div class="loop-button-wrap button-layout2">
                <div class="wp-block-button wc-block-grid__product-add-to-cart">
                <a
                    class="wp-block-button__link add_to_cart_button ajax_add_to_cart"
                    onclick = "addToCartList(${item.id})"
                >
                    Add to cart
                </a>
                </div>
            </div>
            </li>
`;
    contentHTML += contentLi;
  });
  document.getElementById("phoneListRender").innerHTML = contentHTML;
};

export const renderCartList = (cartList) => {
  let contentHTML = "";
  let totalAmout = 0;
  cartList.forEach(function (item) {
    let contentLi = /* html */ `
        <li class="woocommerce-mini-cart-item mini_cart_item">
            <a
                href="#"
                class="remove remove_from_cart_button"
                aria-label="Remove this item"
                onclick="removeCartItem(${item.id})"
                >×</a
            >
            <a
                href="#"
                class="plus remove_from_cart_button"
                aria-label="Add this item"
                onclick="increaseQuantity(${item.id},1)"
                >+</a
            >
            <a
                href="#"
                class="minus remove_from_cart_button"
                aria-label="Decrese this item"
                onclick="increaseQuantity(${item.id},-1)"
                >-</a
            >
            <a
                href="#"
            >
                <img
                width="420"
                height="504"
                src=${item.img}
                class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                alt=""
                sizes="(max-width: 420px) 100vw, 420px"
                />${item.name}
            </a>
            <span class="quantity"
                >${item.quantity} ×
                <span class="woocommerce-Price-amount amount"
                ><bdi
                    ><span
                    class="woocommerce-Price-currencySymbol"
                    >$</span
                    >${item.price}</bdi
                ></span
                ></span
            >
            </li>
        `;
    contentHTML += contentLi;
    totalAmout += item.price * 1 * item.quantity;
  });
  document.getElementById("listCartUl").innerHTML = contentHTML;
  document.getElementById("totalAmount").innerHTML = `$ ${totalAmout}`;
};

export const saveToLocal = () => {
  let cartListJson = JSON.stringify(cart);
  localStorage.setItem(CART_LIST_LOCAL, cartListJson);
};
