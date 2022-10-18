const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const AdminBox = artifacts.require("AdminBox");

module.exports = async function (deployer) {
  // admin address
  await deployProxy(AdminBox, ["0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1"], {
    deployer,
    initializer: "initialize", // not necessarily needed since it will by default take the same value, required only if the name to initialize function is different
  });
};
