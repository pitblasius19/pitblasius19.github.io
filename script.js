// Sample data: list of cars
const cars = [
    { name: 'Mini Clubman', isAvailable: true },
    { name: 'Porsche 944', isAvailable: true },
    { name: 'BMW 330D', isAvailable: false },
    { name: 'Skoda', isAvailable: true },
];


// Function to render the car list
function renderCarList() {
    const carList = document.getElementById('carList');
    carList.innerHTML = ''; // Clear the list

    cars.forEach((car, index) => {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = car.name;

        // Button to change availability
        const button = document.createElement('button');
        button.textContent = car.isAvailable ? 'Available' : 'Unavailable';
        button.className = car.isAvailable ? 'available' : 'unavailable';
        button.onclick = () => toggleAvailability(index);

        li.appendChild(button);
        carList.appendChild(li);
    });
}

// Function to toggle the availability
function toggleAvailability(index) {
    cars[index].isAvailable = !cars[index].isAvailable;
    renderCarList(); // Re-render the list
}

// Initial render of the car list
renderCarList();
