//LA3 N1
let score = prompt("Enter your score:");

score = Number(score);

let grade = score >= 97 ? "1.00" :
            score >= 94 ? "1.25" :
            score >= 91 ? "1.50" :
            score >= 88 ? "1.75" :
            score >= 85 ? "2.00" :
            score >= 82 ? "2.25" :
            score >= 79 ? "2.50" :
            score >= 76 ? "2.75" :
            score >= 73 ? "3.00" :
            score >= 70 ? "3.25" :
            score >= 67 ? "3.50" :
            score >= 64 ? "3.75" :
            score >= 60 ? "4.00" : "5.00";


let remarks;
if (score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
    remarks = "AVERAGE PASS";
} else if (score >= 75) {
    remarks = "LOW PASS";
} else {
    remarks = "FAILED, Needs Improvement";
}
console.log(Enter your score: ${score});
console.log(Your equivalent Grade is "${grade}");
console.log(Final Remarks: ${remarks});
