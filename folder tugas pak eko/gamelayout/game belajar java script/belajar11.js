let nilai = 85;
let grade = "";

if (nilai >= 90 && nilai <= 100) {
    grade = "A";
} else if (nilai >= 80 && nilai <= 89) {
    grade = "B";
} else if (nilai >= 70 && nilai <= 79) {
    grade = "C";
} else {
    grade = "D";
}

console.log("Nilai Anda: " + grade);