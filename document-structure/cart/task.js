const quantityControls = document.querySelectorAll('.product__quantity-control');

const addToCartButtons = document.querySelectorAll('.product__add');

const cartProducts = document.querySelector('.cart__products');

quantityControls.forEach(control => {
    control.addEventListener('click', () => {
        const product = control.closest('.product');
        const quantityElement = product.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityElement.textContent);

        if (control.classList.contains('product__quantity-control_inc')) {
            quantity = Math.min(quantity + 1, 10);
        }
        else if (control.classList.contains('product__quantity-control_dec')) {
            quantity = Math.max(quantity - 1, 1);
        }

        quantityElement.textContent = quantity;
    });
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const quantityElement = product.querySelector('.product__quantity-value');
        const quantity = parseInt(quantityElement.textContent);

        const productId = product.dataset.id;

        const existingProduct = document.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingProduct) {
            const existingQuantityElement = existingProduct.querySelector('.cart__product-count');
            let existingQuantity = parseInt(existingQuantityElement.textContent);
            existingQuantity += quantity;
            existingQuantityElement.textContent = existingQuantity;
        } else {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;

            const productImage = document.createElement('img');
            productImage.classList.add('cart__product-image');
            const productImageSource = product.querySelector('.product__image').src;
            productImage.src = productImageSource;
            cartProduct.appendChild(productImage);

            const productCount = document.createElement('div');
            productCount.classList.add('cart__product-count');
            productCount.textContent = quantity;
            cartProduct.appendChild(productCount);
            cartProducts.appendChild(cartProduct);
        }
    });
});
