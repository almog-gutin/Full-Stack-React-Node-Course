const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

const addRowToTable = (firstName, lastName, age) => {
    const tr = document.createElement('tr');
    const tdFirstName = document.createElement('td');
    const tdLastName = document.createElement('td');
    const tdAge = document.createElement('td');

    tdFirstName.innerText = firstName;
    tdLastName.innerText = lastName;
    tdAge.innerText = age;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdAge);

    tbody.appendChild(tr);
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = document.getElementById('age').value;

    if (firstName === '' || lastName === '' || age === '') {
        return;
    }

    addRowToTable(firstName, lastName, age);
});
