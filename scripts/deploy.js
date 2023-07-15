const { ethers, upgrades } = require("hardhat");
require('dotenv').config()

async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Collection = await ethers.getContractFactory("PersonalNFTs");
    const collection = await upgrades.deployProxy(Collection, []);
    await collection.deployed();
    //await collection.transferOwnership(process.env.OWNER);
    await collection.transferOwnership(deployer.address);
    await collection.owner();
    console.log("Collection address:", collection.address);
    console.log("Collection owner:", await collection.owner());
}
  
main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});
