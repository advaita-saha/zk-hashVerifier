const fs = require("fs");
const { groth16 } = require("snarkjs");

async function verify(proof, publicSignals) {

    const vKey = JSON.parse(fs.readFileSync("./circuits/build/keys/verification_key.json"));
    const res = await groth16.verify(vKey, publicSignals, proof);

    if (res === true) {
        console.log("Verification OK");
      } else {
        console.log("Invalid proof");
    }
}


module.exports = { verify };