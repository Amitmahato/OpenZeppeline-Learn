// Run all the test with `truffle test`

// Load Dependencies
const { expect } = require("chai");

// Load compiled artifacts
const Box = artifacts.require("Box");

// Start test block
contract("Box", () => {
  beforeEach(async () => {
    // Deploy a new Box contract for each test
    this.box = await Box.new();
  });

  it("retrieve returns a value previously stored", async () => {
    const value = 8545;
    // Store a value
    await this.box.store(value);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    const storedValue = parseInt((await this.box.retrieve()).toString());
    expect(storedValue).to.equal(
      value,
      "Stored & Retrieved values mis-matched"
    );
  });
});
