function showProductData() {
    // Get all elements with class "product"
    const products = document.querySelectorAll('.product');

    let output = "";

    // Loop through each product div and read data attributes
    products.forEach((product, index) => {
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        const color = product.getAttribute('data-color');

        output += `Product ${index + 1}: ${name}, Price: $${price}, Color: ${color}<br>`;
    });

    // Display the collected info
    document.getElementById('output').innerHTML = output;
}
