const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await hre.ethers.getContractFactory("Token");
  // console.log("Deploying Token...");
  
  const token = await Token.deploy();
  
  // console.log("Waiting for deployment...");
  // await token.waitForDeployment();

  const tokenAddress = await token.getAddress();
  console.log("Token deployed to:", tokenAddress);

  const totalSupply = await token.totalSupply();
  console.log("Total token supply:", totalSupply.toString());
  console.log(process.env.SEPOLIA_PRIVATE_KEY.length)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });