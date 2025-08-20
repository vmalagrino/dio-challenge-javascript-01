let name = "X"
let level = 10000
let rank

// Solução gerada com SWITCH CASE
switch (true) {
    case (level <= 1000):
        rank = "Ferro";
        break;
    case (level <= 2000):
        rank = "Bronze";
        break;
    case (level <= 5000):
        rank = "Prata";
        break;
    case (level <= 7000):
        rank = "Ouro";
        break;
    case (level <= 8000):
        rank = "Platina";
        break;
    case (level <= 9000):
        rank = "Ascendente";
        break;
    case (level <= 10000):
        rank = "Imortal";
        break;
    default:
        rank = "Radiante";
}

console.log("O herói " + name + " possui " + level + " pontos de experiência e está no nível " + rank)