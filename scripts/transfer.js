async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Collection = await ethers.getContractFactory("MachineDrops");
    const collection = await Collection.attach("0xeA4849eff6373c7EEb894e7C55c7e2E5fD5aCDa2");
    
    console.log('Owner:', await collection.owner());

    await collection.safeMint(deployer.address, 'ipfs://bafkreiffb7cys7zao7hy7qfwpdye6shq2kfhdr5dhq7ubvd6xazqcawe4e');
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});