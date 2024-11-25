import axios from "axios";
document.addEventListener('DOMContentLoaded', () => {
    // Fetch the list of medicines when the DOM content is fully loaded
    fetchMedicines();

    const form = document.getElementById('medicine-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        try {
            const response = await axios.post('http://localhost:8000/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert(response.data.message); // Show a success message

            form.reset();
            fetchMedicines();
        } catch (error) {
            console.error('Error creating medicine:', error);
        }
    });

    const searchInput = document.getElementById('search-medicine');
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        filterMedicines(searchTerm);
    });
});

let allMedicines = [];

function fetchMedicines() {
    axios.get('http://localhost:8000/medicines')
        .then(response => {
            allMedicines = response.data.medicines; // Store the medicines
            displayAllMedicines(allMedicines); // Display all medicines initially
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayMedicine(medicine) {
    const medicinesList = document.getElementById('medicines-list');
    const medicineItem = document.createElement('div');
    medicineItem.classList.add('medicine-item');
    const priceDisplay = (typeof medicine.price === "number" && medicine.price >= 0)
        ? `$${medicine.price.toFixed(2)}` : 'Price Not Available';

    medicineItem.innerHTML = `
        <h2>${medicine.name}</h2>
        <p>Price: ${priceDisplay}</p>
        <button onclick="showOptions('${medicine.name}')">Options</button>
        <div id="options-${medicine.name}" style="display:none;">
            <button onclick="updateMedicine('${medicine.name}')">Update</button>
            <button onclick="deleteMedicine('${medicine.name}')">Delete</button>
        </div>
    `;
    medicinesList.appendChild(medicineItem);
}

function filterMedicines(searchTerm) {
    const medicinesList = document.getElementById('medicines-list');
    medicinesList.innerHTML = ''; // Clear the current list

    const filteredMedicines = allMedicines.filter(medicine =>
        medicine.name.toLowerCase().includes(searchTerm)
    );

    filteredMedicines.forEach(medicine => {
        displayMedicine(medicine); // Display filtered medicines
    });
}

function showOptions(name) {
    const optionsDiv = document.getElementById(`options-${name}`);
    optionsDiv.style.display = optionsDiv.style.display === 'none' ? 'block' : 'none';
}

function deleteMedicine(name) {
    const formData = new URLSearchParams();
    formData.append('name', name);

    axios.delete('http://localhost:8000/delete', {
        data: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        alert(response.data.message);
        fetchMedicines(); // Refresh the list after deletion
    })
    .catch(error => {
        console.error('Error deleting medicine:', error);
    });
}

function updateMedicine(name) {
    const price = prompt("Enter new price:");
    if (price) {
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('price', price);

        axios.post('http://localhost:8000/update', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            alert(response.data.message);
            fetchMedicines();
        })
        .catch(error => {
            console.error('Error updating medicine:', error);
        });
    }
}

function displayAllMedicines(medicines) {
    const medicinesList = document.getElementById('medicines-list');
    medicinesList.innerHTML = ''; // Clear any existing content

    medicines.forEach(medicine => {
        displayMedicine(medicine);
    });
}