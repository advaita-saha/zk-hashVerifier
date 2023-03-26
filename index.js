const { groth16 } = require("snarkjs");
const { generateProof } = require("./gen_proof.js");
const { verify } = require("./verify.js");

async function main() {
    const { proof, publicSignals } = await generateProof(10);
    await verify(proof, publicSignals);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });