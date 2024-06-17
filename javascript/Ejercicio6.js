const words = ["daniel", "juan", "ismael", "elena"];
const letter = "d";
let acc = 0;

for (let i = 0; i < words.length; i++){
    for (let j = 0; j < words[i].length; j++){
        if(letter === words[i][j]){
            acc = acc + 1
        }
    }
}
    console.log("la letra " + letter  + " ha aparecido " + acc + " veces");





    