/**
 * Fetching medicines once
 * the DOM content is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  fetchAveragePrice(); // Fetch total price on load
  fetch('http://localhost:8000/medicines')
    .then(response => response.json())
    .then(data => {
      displayAllMedicines(data.medicines);
      fetchAveragePrice(); // Fetch total price after medicines are loaded
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});

// validate fetched medicine 
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


  //Renders a list of medicines to the DOM.

  medicines.forEach(medicine => {
    const validMedicine = validateFetchedMedicine(medicine);
    const medicineItem = document.createElement('div');
    medicineItem.classList.add('medicine-item');

    // Only display the name of the medicine
    medicineItem.innerHTML = `
            <h2>${validMedicine.name}</h2>
        `;
    medicinesList.appendChild(medicineItem);
  });
}

// Fetch and display the total price of medicines
function fetchAveragePrice() {
  fetch('http://localhost:8000/average-price')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const totalPriceElement = document.getElementById('average-price');
      totalPriceElement.textContent = `$${data.average_price.toFixed(2)}`; // Format to 2 decimal places
    })
    .catch(error => {
      console.error('Error fetching total price:', error);
    });
}
