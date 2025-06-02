// script.js

document.getElementById('new-ticket').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const customerName = document.getElementById('customer-name').value;
    const issueDescription = document.getElementById('issue').value;
    
    const ticketItem = document.createElement('li');
    ticketItem.textContent = `${customerName}: ${issueDescription}`;
    
    document.getElementById('tickets').appendChild(ticketItem);
    
    this.reset();
});
