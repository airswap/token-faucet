pragma solidity 0.5.11;

import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

contract ERC20TokenFaucet {

	uint256 public maxWithdraw;
	address payable public owner;

	IERC20 public erc20token;

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
	}

	function destruct() external onlyOwner {
	    selfdestruct(owner);
	}

}