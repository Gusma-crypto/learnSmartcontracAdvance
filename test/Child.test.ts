import { expect } from "chai";
import { network } from "hardhat";

// inisialisasi ethers dari network
const { ethers } = await network.connect();

describe("Child Contract (Inheritance Test)", function () {
  it("Should deploy and store data correctly", async function () {
    // deploy kontrak Child dengan argumen ParentName, balance, dan ChildName
    const child = await ethers.deployContract("Child", ["ParentOne", 1000n, "ChildOne"]);
    await child.waitForDeployment();

    // verifikasi data tersimpan dengan benar
    expect(await child.parentName()).to.equal("ParentOne");
    expect(await child.parentBalance()).to.equal(1000n);
    expect(await child.childName()).to.equal("ChildOne");
  });

  it("Should return correct parent info", async function () {
    const child = await ethers.deployContract("Child", ["ParentTwo", 2000n, "ChildTwo"]);
    await child.waitForDeployment();

    const [name, balance] = await child.getParentInfo();
    expect(name).to.equal("ParentTwo");
    expect(balance).to.equal(2000n);
  });

  it("Should return correct child info", async function () {
    const child = await ethers.deployContract("Child", ["ParentX", 3000n, "ChildX"]);
    await child.waitForDeployment();

    const [childName, parentName, parentBalance] = await child.getChildInfo();
    expect(childName).to.equal("ChildX");
    expect(parentName).to.equal("ParentX");
    expect(parentBalance).to.equal(3000n);
  });

  it("Should override sayHello() correctly", async function () {
    const child = await ethers.deployContract("Child", ["ParentHello", 999n, "ChildHello"]);
    await child.waitForDeployment();

    const msg = await child.sayHello();
    expect(msg).to.equal("hello from child");
  });
});
