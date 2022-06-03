const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.001"),
  });

  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
  console.log("Account balance: ", accountBalance.toString());
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
