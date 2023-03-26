const { groth16 } = require("snarkjs");

async function generateProof(value){
    const { proof, publicSignals } = await groth16.fullProve(
        { in: value },
        "./circuits/build/circuit_js/circuit.wasm",
        "./circuits/build/keys/circuit_0000.zkey"
    );
    
    console.log(publicSignals);
    console.log("--------------------------------");
    console.log(proof);

    return { proof, publicSignals };
}

module.exports = { generateProof };

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });