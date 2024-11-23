document.addEventListener('DOMContentLoaded', () => {
    // Fetch the list of medicines when the DOM content is fully loaded
    fetchMedicines();

    // Add event listener for form submission
    const form = document.getElementById('medicine-form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form); // Create a FormData object from the form

        try {
            const response = await fetch('http://localhost:8000/create', {
                method: 'POST',
                body: formData, // Send the FormData directly
            });

            if (!response.ok) {
                throw new Error('Network response was not ok couldnt create');
            }

            const result = await response.json();
            alert(result.message); // Show a success message

            // Reset the form
            form.reset();
            fetchMedicines(); // Optionally refresh the list of medicines
        } catch (error) {
            console.error('Error creating medicine:', error);
        }
    });
});

// Function to fetch and display all medicines
function fetchMedicines() {
    fetch('http://localhost:8000/medicines')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayAllMedicines(data.medicines);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display a single medicine
function displayMedicine(medicine) {
    const medicinesList = document.getElementById('medicines-list');
    const medicineItem = document.createElement('div');
    medicineItem.classList.add('medicine-item');
    const priceDisplay = (typeof medicine.price === "number" && medicine.price >= 0)
        ? `$${medicine.price.toFixed(2)}` : 'Price Not Available';
    medicineItem.innerHTML = `
        <h2>${medicine.name}</h2>
        <p>Price: ${priceDisplay}</p>
    `;

    medicinesList.appendChild(medicineItem);
}

function displayAllMedicines(medicines) {
    const medicinesList = document.getElementById('medicines-list');
    medicinesList.innerHTML = ''; // Clear any existing content

    medicines.forEach(medicine => {
        displayMedicine(medicine);
    });
}