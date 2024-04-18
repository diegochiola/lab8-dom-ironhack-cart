// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');
  
  // Extracting the values
  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);
  const subTotalValue = priceValue * quantityValue;

  //mandar el subtotal al DOM
  subTotal.innerHTML = subTotalValue;
  
  //... your code goes here
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });

  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  let total = 0;
  
  for (let i = 0; i < products.length; i++) {
    const subtotal = updateSubtotal(products[i]);
    total += subtotal; 
  }
  //console.log(total);
  //mandar el subtotal al DOM
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
  // ITERATION 3
  //... your code goes here

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
