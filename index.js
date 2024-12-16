
const clearBtn = document.querySelector('.clear-btn .btn');
clearBtn.addEventListener('click', () => {
    const invoiceTableCells = document.querySelectorAll(' .invoice-table tbody td:nth-child(5), .invoice-table tbody td:nth-child(6)');
    invoiceTableCells.forEach(cell => {
        cell.textContent = '0';
    });

    const gstCells = document.querySelectorAll('.payment-gst + td');
    gstCells.forEach(cell => {
        cell.textContent = '0';
    });

    const totalCell = document.querySelector('.invoice-table tfoot td:last-child');
    totalCell.textContent = '0';

    
    const taxTableCells = document.querySelectorAll('.invoice-second tbody td:nth-child(2), .invoice-second tbody td:nth-child(3),.invoice-second tbody td:nth-child(4),.invoice-second tbody td:nth-child(5), .invoice-second tbody td:nth-child(6), .invoice-second tbody td:last-child');
    taxTableCells.forEach(cell => {
        cell.textContent = '0';
    });

    
    const taxAmountWords = document.querySelector('.tax-details p strong:last-child');
    if (taxAmountWords) taxAmountWords.textContent = 'INR Zero Only';

    const amountInWords = document.querySelector('.amount-in-words .amount-text p strong');
    if (amountInWords) amountInWords.textContent = 'INR Zero Only';
});
