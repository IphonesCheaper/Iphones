// Fetch iPhone models and prices from your backend/API
fetch('https://your-backend-api.com/iphones')
    .then(response => response.json())
    .then(data => {
        // Assuming data is an array of iPhone objects
        data.forEach(iPhone => {
            let discountedPrice = calculateDiscountedPrice(iPhone.price); // Function to calculate 30% discount
            displayiPhone(iPhone.model, discountedPrice);
        });
    })
    .catch(error => console.error('Error fetching iPhones:', error));

function displayiPhone(model, price) {
    // Display iPhone model and price on your website
    const iPhoneList = document.getElementById('iphone-list'); // Assuming you have a <ul> or similar for listing iPhones
    const listItem = document.createElement('li');
    listItem.textContent = `${model} - $${price}`;
    iPhoneList.appendChild(listItem);
}

function calculateDiscountedPrice(originalPrice) {
    return (originalPrice * 0.7).toFixed(2); // Apply 30% discount
}
