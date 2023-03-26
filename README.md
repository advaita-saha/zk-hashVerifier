# A simple zero-knowledge proof project to verify ownership of a hash for a particular data

This project is a simple implementation of a zero-knowledge proof to verify ownership of a hash for a particular data. The proof is based on the Poseidon hash function.

The proof is a proof of knowledge of a hash for a particular data. The prover proves that he knows a hash for a particular data without revealing the data itself. The verifier verifies that the prover knows a hash for a particular data.
The proof is based on the Poseidon hash function

### Run the following commands to run the project

- Install rust
```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```
- Install circom
```bash
git clone https://github.com/iden3/circom.git
cd circom
cargo build --release
cargo install --path circom
```
- Install snarkjs
```bash
npm install -g snarkjs
```
- Clone this repository and then run the following commands
```bash
cd zk-hashVerifier
npm i
npm run build
npm run setup
npm run verify
```
- To clean the existing build files
```bash
npm run clean
```
