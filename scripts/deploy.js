async function main() {
    const POK = await ethers.getContractFactory("ProofOfKnowledge");
 
    // Start deployment, returning a promise that resolves to a contract object
    const pok = await POK.deploy();
    console.log("Contract deployed to address:", pok.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });