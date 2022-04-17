// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score < 80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty)




const scores2 = [
    { name: 'A', score: 85 },
    { name: 'L', score: 88 },
    { name: 'M', score: 70 },
    { name: 'E', score: 40 },
    { name: 'M', score: 75 },
    { name: 'J', score: 90 },
]


const scoresGreaterEighty2 = scores2.filter((scores2) => scores2.score < 70)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty2)