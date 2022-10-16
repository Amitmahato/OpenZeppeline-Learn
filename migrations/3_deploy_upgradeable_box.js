const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const Box = artifacts.require("Box");

module.exports = async function (_deployer) {
  await deployProxy(Box, [8545], { deployer: _deployer, initializer: "store" });
};
