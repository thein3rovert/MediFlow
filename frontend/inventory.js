document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8000/medicines')
        .then(response => response.json())
        .then(data => {
            displayMedicines(data.medicines);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function validateFetchedMedicine(medicine) {
    return {
        name: medicine.name || "Unknown Medicine",
        price: (typeof medicine.price === "number" && medicine.price >= 0)
            ? medicine.price : null
    };
}

function displayMedicines(medicines) {
    const medicinesList = document.getElementById('medicines-list');
    medicinesList.innerHTML = '';

// Display medicines in the UI
medicines.forEach(medicine => {
    const validMedicine = validateFetchedMedicine(medicine); // Validate the medicine data
    const medicineItem = document.createElement('div');
    medicineItem.classList.add('medicine-item'); // Add the class for styling
    // Prepare the price display
    const priceDisplay = validMedicine.price !== null ? `$${validMedicine.price.toFixed(2)}` : 'Price Not Available';

    // Set the inner HTML for the medicine item
    medicineItem.innerHTML = `
        <h2>${validMedicine.name}</h2>
        <p>Price: ${priceDisplay}</p>
        <button onclick="editMedicine('${validMedicine.id}', '${validMedicine.name}', ${validMedicine.price})">Edit</button>
        <button onclick="deleteMedicine('${validMedicine.id}')">Delete</button>

    `;


    // Append the medicine item to the list

    medicinesList.appendChild(medicineItem);

});

}
