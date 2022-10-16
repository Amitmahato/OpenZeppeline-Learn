// Run all the test with `truffle test`

// Load Dependencies
const { expect } = require("chai");

// Import utilities from OpenZeppelin Test Helpers
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

// Load compiled artifacts
const Box = artifacts.require("Box");

// Start test block
contract("Box", ([owner, other]) => {
  const value = new BN("8545");

  beforeEach(async () => {
    // Deploy a new Box contract for each test
    this.box = await Box.new({ from: owner });
  });

  it("retrieve returns a value previously stored", async () => {
    // Store a value
    await this.box.store(value, { from: owner });

    // Test if the returned value is the same one
    const storedValue = await this.box.retrieve();
    expect(storedValue).to.be.bignumber.equal(
      value,
      "Stored & Retrieved values mis-matched"
    );
  });

  it("storing a value emits an event", async () => {
    const receipt = await this.box.store(value, { from: owner });

    // Test that a ValueChanged event was emitted with the new value
    expectEvent(receipt, "ValueChanged", { value });
  });

  it("should not allow non owner to store value", async () => {
    // Test a transaction reverts - expects the reason of the revert to match
    await expectRevert(
      this.box.store(value, { from: other }),
      "Ownable: caller is not the owner"
    );
  });
});
