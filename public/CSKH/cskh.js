document.addEventListener("DOMContentLoaded", function() {
    // Sample data - replace this with your actual data
    let requestData = [
        { id: 1, customerId: 913722860, requestType: "Complaint", description: "Issue with product delivery", status: "waiting" },
        { id: 2, customerId: 910229999, requestType: "Inquiry", description: "Product information needed", status: "waiting" },
        { id: 3, customerId: 910336777, requestType: "Feedback", description: "Suggestion for improvement", status: "waiting" }
    ];

    const tableBody = document.querySelector("#requests-table tbody");
    const statusHeader = document.querySelector("#requests-table th:nth-child(5)");

    let sortAscending = true;

    // Function to populate table rows
    function populateTable() {
        tableBody.innerHTML = "";
        requestData.forEach(request => {
            const row = document.createElement("tr");
            const statusCell = document.createElement("td");
            statusCell.dataset.status = request.status;
            statusCell.textContent = getStatusText(request.status);
            statusCell.classList.add(request.status);
            row.innerHTML = `
                <td>${request.id}</td>
                <td>${request.customerId}</td>
                <td>${request.requestType}</td>
                <td>${request.description}</td>
            `;
            row.appendChild(statusCell);
            tableBody.appendChild(row);
        });
    }

    // Get status text based on status value
    function getStatusText(status) {
        switch (status) {
            case "waiting":
                return "Waiting";
            case "in-progress":
                return "In Progress";
            case "responded":
                return "Responded";
            default:
                return "Unknown";
        }
    }

    // Function to sort the table
    function sortTable() {
        requestData.sort((a, b) => {
            if (a.status < b.status) return sortAscending ? -1 : 1;
            if (a.status > b.status) return sortAscending ? 1 : -1;
            return 0;
        });
        sortAscending = !sortAscending;
        populateTable();
    }

    // Populate table initially
    populateTable();

    // Event listener to toggle status on click for status column only
    tableBody.addEventListener("click", function(event) {
        const targetCell = event.target;
        if (targetCell.tagName === "TD" && targetCell.dataset.status !== "responded" && targetCell.cellIndex === 4) {
            let currentStatus = targetCell.dataset.status;
            let newStatus;
            switch (currentStatus) {
                case "waiting":
                    newStatus = "in-progress";
                    targetCell.classList.remove("waiting");
                    targetCell.classList.add("in-progress");
                    break;
                case "in-progress":
                    newStatus = "responded";
                    targetCell.classList.remove("in-progress");
                    targetCell.classList.add("responded");
                    break;
            }
            targetCell.dataset.status = newStatus;
            targetCell.textContent = getStatusText(newStatus);

            // Update the status in the requestData array
            const rowIndex = Array.from(tableBody.children).indexOf(targetCell.parentElement);
            requestData[rowIndex].status = newStatus;
        }
    });

    // Event listener to sort table on status header click
    statusHeader.addEventListener("click", sortTable);
});
