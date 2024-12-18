
// ====== RESUME SECTION ======== 
function downloadResume() {
    window.print();
}


// ====== COVERLETTER SECTION ======== 
function downloadCV() {
    window.print();
}
// Function to format date as "DD/MM/YYYY"
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
document.getElementById('date').textContent = formatDate(new Date());