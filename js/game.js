const samples = [
    {
    sampleNumber: 1,
    knownOrigin: "human",
    words: 43,
    difficulty0to5: 4.994712,
    sampleText:"Companies and insurers sections cars to be crash (and repair) friendly. Many new developments exist in the design of auto parts and components. New materials — including ultra-high-strength steel — help make vehicles safer. New challenges continue to present themselves, says Ford expert."
    },
    {
    sampleNumber: 2,
    knownOrigin: "human",
    words: 46,
    difficulty0to5: 4.91857,
    sampleText: "Stuntman Monte Perlin has broken \"almost everything\" in his 25-year career. His films include \"Spider-Man,\" \"Star Trek, \"Terminator 3: Rise of the Machines\" One motorbike stunt involved jumping 70 feet at 60 mph into open car of moving train. Remotely controlled, burning ambulance flipped and barely missed him."
    }
];

const playerAnswer ="human";
const isCorrect = playerAnswer === samples[0].knownOrigin;
let score;

if (isCorrect) {
    console.log("Correct!");
    score = 1;

} else {
    console.log("Incorrect!");
    score = 0;
}

console.log(score)