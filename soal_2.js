// Soal 2
// GITS sedang bermain permainan arcade, dan dalam setiap permainan GITS ingin naik ke peringkat tertinggi dan juga ingin mengetahui setiap peringkat di setiap permainan. Dalam permainan ini menggunakan skema Dense Ranking​ dan memiliki aturan sebagai berikut:
// - Peringkat pertama dapat diraih oleh pemain yang memiliki skor tertinggi
// - Pemain yang memiliki skor yang sama memiliki peringkat yang sama.

// Contoh :
// - Empat pemain memiliki skor tertinggi sebagai berikut 100, 80, 80, dan 70, maka masing-masing pemain itu memiliki rangking 1,2,2 dan 3. Jika GITS memiliki skor 60, 70, 100 setelah pertandingan maka rangking yang didapatkan adalah 4, 3 dan 1.

// Sampel Input :
// 7
// 100 100 50 40 40 20 10 
// 4
// 5 25 50 120
// Sampel Output :
// 6 4 2 1
// Keterangan :
// - 7​ adalah bentuk bilangan bulat, angka yang menunjukkan pada jumlah pemain yang ikut serta.
// - 100 100 50 40 40 20 10 ​ adalah daftar skor yang diurutkan dari nilai terbesar ke nilai terkecil 
// (dalam bentuk array integer).
// - 4 ​adalah jumlah permainan yang diikuti oleh GITS, 5 25 50 120 ​adalah skor yang didapatkan oleh GITS.
// Soal:
// Buat fungsi yang digunakan untuk menyelesaikan permasalahan Dense Ranking!

function calculateDenseRanking(scores, gitsScores) {
    const ranks = [];

    for (let i = 0; i < gitsScores.length; i++) {
        const currentScore = gitsScores[i];
        let rank = 1;

        let oldScore = 0;
        for (const score of scores) {
            if (score !== oldScore) {
                if (currentScore >= score) {
                    break;
                }
                oldScore = score;
                rank++;
            }
        }

        ranks.push(rank);
    }

    return ranks;
}

function main() {
    const prompt=require("prompt-sync")({sigint:true});
    const n = prompt("Jumlah pemain: ");

    const scores = [];
    const getScores = () => {
        const scorePlayer = prompt("Masukkan skor pemain (dari terbesar ke terkecil): ");
        scores.push(parseInt(scorePlayer, 10));
        if (scores.length < n) {
            getScores();
        } else {
            const gameGits = prompt("Jumlah permainan GITS:  ");
            const m = parseInt(gameGits);

            const gitsScores = [];
            const getGitsScores = () => {
            const scoreGits = prompt("Masukkan skor permainan GITS: ");
            gitsScores.push(parseInt(scoreGits, 10));

            if (gitsScores.length < m) {
                getGitsScores();
            } else {
                const ranks = calculateDenseRanking(scores, gitsScores);
                console.log("Output: " + ranks.join(' '));
            }
            };
            getGitsScores();
        }
    };
    getScores();
}

main();
