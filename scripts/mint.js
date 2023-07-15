async function main() {
    const [deployer] = await ethers.getSigners();

    const ipfs_url = process.env.IPFS_URL;

    if (!ipfs_url || ipfs_url.length < 64) {
      console.error("missing valid NFT IPFS_URL");
      process.exit(1);
    }
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Collection = await ethers.getContractFactory("PersonalNFTs");
    const collection = await Collection.attach(process.env.CONTRACT_ADDRESS);
    
    console.log('Owner:', await collection.owner());

    await collection.safeMint(deployer.address, ipfs_url);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});
