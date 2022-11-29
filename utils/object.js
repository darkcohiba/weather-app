const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// product.salePrice = (product.price * 0.8).toFixed(2);

const {label:productLabel, price, stock, rating = 5} = product;

// console.log(productLabel);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);