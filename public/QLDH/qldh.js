// Function to sort table by column
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        let aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
        let bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

        // Convert to number if possible
        if (!isNaN(aColText)) {
            aColText = Number(aColText);
            bColText = Number(bColText);
        }

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
}

// Add event listeners for sorting
document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});

// Add event listeners for editing cells
// Add event listeners for editing cells
document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", () => {
        const row = button.parentElement.parentElement;
        const cells = row.querySelectorAll(".editable");
        cells.forEach(cell => {
            if (cell.isContentEditable) {
                // If the cell is currently editable, make it non-editable and remove the highlight
                cell.contentEditable = false;
                cell.style.backgroundColor = ""; // Remove background color
            } else {
                // If the cell is currently non-editable, make it editable and add the highlight
                cell.contentEditable = true;
                cell.style.backgroundColor = "#ffe0e0"; // Highlight editable cells
            }
        });
    });
});


// Add event listeners for deleting rows
// document.querySelectorAll(".delete-btn").forEach(button => {
//     button.addEventListener("click", (event) => {
//         // Prevent default action of button click
//         event.preventDefault();

//         // Show confirmation dialog
//         const confirmed = confirm("Bạn có chắc chắn muốn xóa dòng này không?");
//         if (confirmed) {
//             const row = event.target.parentElement.parentElement;
//             row.parentNode.removeChild(row);
//         }
//     });
// });

// Add event listener for adding new row
// Add event listener for adding new row
// Add event listener for adding new row
document.getElementById("add-row-form").addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Retrieve values from input fields
    const cusId = document.getElementById("new-cusId").value.trim();
    const transactionId = document.getElementById("new-transactionID").value.trim();
    const transactionDay = document.getElementById("new-transactionDay").value.trim();
    const numberProductCategory = document.getElementById("new-numberProductCategory").value.trim();
    const productQuantity = document.getElementById("new-productQuantity").value.trim();
    const totalPriceTransaction = document.getElementById("totalPriceTransaction").value.trim();

    // Check if any field is empty
    if (!cusId || !transactionId || !transactionDay || !numberProductCategory || !productQuantity || !totalPriceTransaction ) {
        alert("Thông tin không hợp lệ.");
        return;
    }

    // Check if ID already exists in the table
    const existingIds = Array.from(document.querySelectorAll(".table-sortable tbody tr td:first-child"), td => td.textContent.trim());
    if (existingIds.includes(cusId)) {
        alert("ID đã tồn tại. Thông tin không hợp lệ.");
        return;
    }

    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td class="editable">${cusId}</td>
    <td class="editable">${transactionId}</td>
    <td class="editable">${transactionDay}</td>
    <td class="editable">${numberProductCategory}</td>
    <td class="editable">${productQuantity}</td>
    <td class="editable">${totalPriceTransaction}</td>
    <td class="action-buttons">
        <button class="edit-btn">Sửa</button>
        <button class="delete-btn">Xóa</button>
    </td>
    `;

    // Append the new row to the table body
    document.querySelector(".table-sortable tbody").appendChild(newRow);

    // Clear input fields after adding the row
    document.getElementById("add-row-form").reset();
    
    // Add event listeners to the new row's buttons
    newRow.querySelector(".edit-btn").addEventListener("click", () => {
        const cells = newRow.querySelectorAll(".editable");
        cells.forEach(cell => {
            cell.contentEditable = true;
            cell.style.backgroundColor = "#ddd"; // Highlight editable cells
        });
    });

    newRow.querySelector(".delete-btn").addEventListener("click", () => {
        // Show confirmation dialog
        const confirmed = confirm("Bạn có chắc chắn muốn xóa dòng này không?");
        if (confirmed) {
            newRow.remove(); // Remove the row if confirmed
        }
    });

    // newRow.querySelector(".delete-btn").addEventListener("click", (event) => {
    //     // Prevent default action of button click
    //     event.preventD-efault();

    //     // Show confirmation dialog
    //     const confirmed = confirm("Bạn có chắc chắn muốn xóa dòng này không?");
    //     if (confirmed) {
    //         const row = event.target.parentElement.parentElement;
    //         row.parentNode.removeChild(row);
    //     }
    // });
});

// Add event listener for deleting rows within the table body
document.querySelector(".table-sortable tbody").addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        // Prevent default action of button click
        event.preventDefault();

        // Show confirmation dialog
        const confirmed = confirm("Bạn có chắc chắn muốn xóa dòng này không?");
        if (confirmed) {
            const row = event.target.parentElement.parentElement;
            row.parentNode.removeChild(row);
        }
    }
});
// Add this to your JavaScript
document.getElementById("id-search").addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll(".table-sortable tbody tr");
    rows.forEach(row => {
        const idCell = row.querySelector("td:first-child");
        const idText = idCell.textContent.toLowerCase();
        row.style.display = idText.includes(searchValue) ? "" : "none";
    });
});
