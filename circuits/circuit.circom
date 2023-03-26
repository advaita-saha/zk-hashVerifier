pragma circom 2.1.5;

include "node_modules/circomlib/circuits/poseidon.circom";

template PoseidonHasher() {
    signal input in;
    signal output out;

    component hasher = Poseidon(1);
    hasher.inputs[0] <== in;
    out <== hasher.out;
}

component main = PoseidonHasher();