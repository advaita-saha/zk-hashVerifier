const { groth16 } = require("snarkjs");
const circomlibjs = require("circomlibjs");

async function generateProof(value){

    const poseidon = await circomlibjs.buildPoseidon();
    const hash = poseidon.F.toString(poseidon([10]));

    const { proof, publicSignals } = await groth16.fullProve(
        { in: value, hash: hash },
        "./circuits/build/circuit_js/circuit.wasm",
        "./circuits/build/keys/circuit_0000.zkey"
    );
    console.log("-------------- Public Signals (pp) ------------------");
    console.log(publicSignals);
    console.log("---------------- Proof (pi) ----------------");
    console.log(proof);

    return { proof, publicSignals };
}

module.exports = { generateProof };