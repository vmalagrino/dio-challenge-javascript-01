let name = "X"
let level = 10000
let rank

// solução gerada com IF, ELSE, ELSE IF
if (level <= 1000) {
   rank = "Ferro";
} else if (level <= 2000) {
    rank = "Bronze";
} else if (level <= 5000) {
    rank = "Prata";
} else if (level <= 7000) {
    rank = "Ouro";
} else if (level <= 8000) {
    rank = "Platina";
} else if (level <= 9000) {
    rank = "Ascendente";
} else if (level <= 10000) {
    rank = "Imortal";
} else {
    rank = "Radiante"
}

console.log("O herói " + name + " possui " + level + " pontos de experiência e está no nível " + rank)