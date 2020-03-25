/*
  Copyright 2020 Swap Holdings Ltd.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

pragma solidity 0.5.12;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";


contract ERC20TokenFaucet {
  uint256 public maxWithdraw;
  address payable public owner;

  IERC20 public erc20token;
  event RequestToken(address requestedAddress);

  modifier onlyOwner {
    require(msg.sender == owner, "ONLY OWNER");
    _;
  }

  constructor(uint256 _maxWithdraw, IERC20 _faucetToken) public {
    maxWithdraw = _maxWithdraw;
    erc20token = _faucetToken;
    owner = msg.sender;
  }

  function requestToken() external {
    require(erc20token.balanceOf(msg.sender) < maxWithdraw);
    // send over maxWithdraw
    require(erc20token.transferFrom(owner, msg.sender, maxWithdraw));
    emit RequestToken(msg.sender);
  }

  function destruct() external onlyOwner {
    selfdestruct(owner);
  }
}
