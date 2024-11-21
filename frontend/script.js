/**
 * Fetching the list of medicines
 * once the DOM content is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:8000/medicines')
        .then(response => response.json())
        .then(data => {
            displayAllMedicines(data.medicines);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// Functipn to validate fetched medicine 
function validateFetchedMedicine(medicine) {
    return {
        name: medicine.name || "Unknown Medicine",
        price: (typeof medicine.price === "number" && medicine.price >= 0)
            ? medicine.price : null
    };
}


function displayAllMedicines(medicines) {
    const medicinesList = document.getElementById('medicines-list');
    medicinesList.innerHTML = ''; // Clear any existing content

    /**
    * Renders a list of medicines to the DOM.
    * Each medicine is displayed with its name and price.
    */
    medicines.forEach(medicine => {
        const validMedicine = validateFetchedMedicine(medicine);
        const medicineItem = document.createElement('div');
        medicineItem.classList.add('medicine-item');

        //const name = medicine.name || 'Unknown Medicine';
        //const price = medicine.price !== null ? `$${medicine.price.toFixed(2)}` : 'Price Not Available';

        const priceDisplay = validMedicine.price  !== null ?  `$${validMedicine.price.toFixed(2)}` : 'Price Not Available'; 
        
        medicineItem.innerHTML = `
            <h2>${validMedicine.name}</h2>
            <p>Price: ${priceDisplay}</p>
        `;

        medicinesList.appendChild(medicineItem);
    });
}