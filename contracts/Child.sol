// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

import "./Parent.sol";

contract Child is Parent{
  string public childName;

  constructor(string memory _parentName, uint256 _parentBalance, string memory _childName) Parent(_parentName, _parentBalance){
    childName = _childName;
  }

  // constructor Child harus meneruskan parameter ke constructor Parent
  function getChildInfo()public view returns(string memory, string memory, uint256){
    return (childName, parentName, parentBalance);
  }

  function sayHello() public pure override returns(string memory){
    return "hello from child";
  }

}