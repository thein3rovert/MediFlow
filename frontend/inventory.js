document.addEventListener('DOMContentLoaded', () => {
    fetchMedicines();

    const form = document.getElementById('medicine-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault(); 
        /*
        ==================
        Filter Medicine
        ==================
        */
        const formData = new FormData(form);

        try {
            const response = await fetch('http://localhost:8000/create', {
                method: 'POST',
                body: formData, // Send the FormData directly
            });

            if (!response.ok) {
                throw new Error('Network response was not ok unable to creare medicine');
            }

            const result = await response.json();
            alert(result.message); // Show a success message


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
    fetch('http://localhost:8000/medicines')
        .then(response => {
            if (!response.ok) {
                throw new Error('Internal Server Error, unable to fetch medicine');
            }
            return response.json();
        })
        .then(data => {
            allMedicines = data.medicines;
            displayAllMedicines(allMedicines); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
/*
==================
Function to display all medicine
==================
*/
function displayMedicine(medicine) {
    const medicinesList = document.getElementById('medicines-list');
    const medicineItem = document.createElement('div');
    medicineItem.classList.add('medicine-item');
    const priceDisplay = (typeof medicine.price === "number" && medicine.price >= 0)
        ? `$${medicine.price.toFixed(2)}` : 'Price Not Available';


    /*    
    ==================
    New medicine element for managing update and delete
    ==================
    */
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

/*
==================
Filter Medicine
==================
*/
function filterMedicines(searchMedicine) {
    const medicinesList = document.getElementById('medicines-list');
    medicinesList.innerHTML = ''; 

    const filteredMedicines = allMedicines.filter(medicine =>
        medicine.name.toLowerCase().includes(searchMedicine)
    );

    filteredMedicines.forEach(medicine => {
        displayMedicine(medicine);
    });
}

function showOptions(name) {
    const optionsDiv = document.getElementById(`options-${name}`);
    optionsDiv.style.display = optionsDiv.style.display === 'none' ? 'block' : 'none';
}

function deleteMedicine(name) {
    const formData = new URLSearchParams();
    formData.append('name', name);
    fetch('http://localhost:8000/delete', {
        method: 'DELETE',
        body: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok unable to update medicine');
            }
            return response.json();
        })
        .then(data => {
            alert(data.message);
            fetchMedicines();
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
        fetch('http://localhost:8000/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok unaboel to delete medicine');
                }
                return response.json();
            })
            .then(data => {
                alert(data.message);
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
