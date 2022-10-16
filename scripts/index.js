// Execute the script with `truffle exec --network development ./scripts/index.js` from root directory of the project

module.exports = async function main(callback) {
  try {
    // Direct interaction with the local blockchain network
    // const accounts = await web3.eth.getAccounts();
    // console.log(accounts);

    // Getting an instance of the deployed Box contract
    const Box = artifacts.require("Box");
    const box = await Box.deployed();

    // Send a transaction by calling the store(uint256) function of the deployed Box contract
    await box.store("8545");

    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log("Box value is", value.toString());

    callback(0); // exit code 0 - returns without any error
  } catch (e) {
    console.error(e);
    callback(1); // non-zero exit code - returns with some error
  }
};
