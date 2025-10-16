// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract Parent{
    string public parentName;
    uint256 public parentBalance;

    constructor(string memory _name, uint256 _balance){
        parentName = _name;
        parentBalance = _balance;
    }

    function getParentInfo() public view returns (string memory, uint256){
        return (parentName, parentBalance);
    }

    function sayHello()public pure virtual returns(string memory){
        return "Hello from Child!";
    }

}