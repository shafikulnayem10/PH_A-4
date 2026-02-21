let interviewList = [];
let rejectedList = [];
//count total jobs
let total = document.getElementById('total');
const allCardSection = document.getElementById('allCards');
function calculateCount() {
    const totalJobs = allCardSection.children.length;
    total.innerText = totalJobs;
}
calculateCount();