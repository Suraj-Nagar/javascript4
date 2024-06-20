// Store items and their prices in an object
const store = {
    "apple": 1.00,
    "banana": 0.50,
    "cherry": 2.00,
    "date": 1.50,
    "elderberry": 3.00
};

// Exchange rate from USD to INR
const exchangeRate = 80;

// Function to convert prices to INR
function convertPricesToINR(items, rate) {
    // Convert the items to INR using map and fromEntries
    const convertedItems = Object.fromEntries(
        Object.entries(items).map(([item, price]) => [item, price * rate])
    );
    return convertedItems;
}

// Convert the store prices to INR
const storeInINR = convertPricesToINR(store, exchangeRate);

// Function to display items and prices
function displayItems(items, currency) {
    console.log(`Items and Prices in ${currency}:`);
    for (const [item, price] of Object.entries(items)) {
        console.log(`${item}: ${currency === 'INR' ? '₹' : '$'}${price}`);
    }
}

// Display the original prices in USD
displayItems(store, 'USD');

// Display the converted prices in INR
displayItems(storeInINR, 'INR');
