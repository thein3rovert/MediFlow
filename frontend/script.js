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

function displayMedicines(medicines) {
    const medicinesList = document.getElementById('medicines-list');
    medicinesList.innerHTML = ''; // Clear any existing content

    medicines.forEach(medicine => {
        const medicineItem = document.createElement('div');
        medicineItem.classList.add('medicine-item');

        const name = medicine.name || 'Unknown Medicine';
        const price = medicine.price !== null ? `$${medicine.price.toFixed(2)}` : 'Price Not Available';

        medicineItem.innerHTML = `
            <h2>${name}</h2>
            <p>Price: ${price}</p>
        `;

        medicinesList.appendChild(medicineItem);
    });
}