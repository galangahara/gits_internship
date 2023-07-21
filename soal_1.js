// Soal 1
// Buatlah sebuah program dengan output sebagai berikut. Input bisa dinamis yang menghasilkan output yang berbeda-beda sesuai input yang dimasukan. Gunakan rumus A000124 of Sloane’s OEIS.

// Contoh: 
// - Input 7
// - Output : 1-2-4-7-11-16-22
// Soal: 
// Buat fungsi untuk menyelesaikan rumus A000124 of Sloane’s OEIS!

// Jawaban:

function rumusA000124(n) {
    let result = "";

    let currentNumber = 1;
    let increment = 1;

    for (let i = 1; i <= n; i++) {
        result += currentNumber;

        if (i !== n) {
            result += "-";
        }

        currentNumber += increment;
        increment++;
    }

    return result;
}

function main() {
    const prompt=require("prompt-sync")({sigint:true});
    const consoleInput = prompt("Input: ")

    const n = parseInt(consoleInput);
    const output = rumusA000124(n);
    console.log("Output: " + output);

}

main();