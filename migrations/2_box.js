const Box = artifacts.require("Box.sol");
module.exports = async function (_deployer) {
  await _deployer.deploy(Box);
};
