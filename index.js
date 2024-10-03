// Function to add a new row
function addRow() {
    const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Add cells with input fields for each column
    for (let i = 0; i < 6; i++) {
        const cell = newRow.insertCell(i);
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Column ${i + 1}`;
        cell.appendChild(input);
    }

    // Add Delete button in the last column
    const actionCell = newRow.insertCell(6);
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        deleteRow(this);
    };
    actionCell.appendChild(deleteBtn);
}

// Function to delete a row
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Function to refresh the table (removes all rows except the header)
function refreshTable() {
    const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
}




