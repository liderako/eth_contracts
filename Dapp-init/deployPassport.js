/*
* for geth
*/

function deployPassport() {
	var abi = [{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserLastName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserFirstName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"firstName","type":"string"},{"name":"lastName","type":"string"},{"name":"age","type":"uint8"}],"name":"registrationNewUseR","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getTrueUser","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserAge","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_amountId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
	var bin = "0x608060405234801561001057600080fd5b50610925806100206000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806326a34c59146100885780632b956ff7146101445780632c757ff61461019b5780635bb4e62714610257578063b6f7d92514610313578063d3ab8dfb1461036e578063ef284404146103cb575b600080fd5b34801561009457600080fd5b506100c9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103f6565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101095780820151818401526020810190506100ee565b50505050905090810190601f1680156101365780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015057600080fd5b50610185600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104da565b6040518082815260200191505060405180910390f35b3480156101a757600080fd5b506101dc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610526565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561021c578082015181840152602081019050610201565b50505050905090810190601f1680156102495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561026357600080fd5b50610311600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803560ff16906020019092919050505061060a565b005b34801561031f57600080fd5b50610354600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061069b565b604051808215151515815260200191505060405180910390f35b34801561037a57600080fd5b506103af600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106ea565b604051808260ff1660ff16815260200191505060405180910390f35b3480156103d757600080fd5b506103e0610743565b6040518082815260200191505060405180910390f35b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b50505050509050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301549050919050565b6060600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105fe5780601f106105d3576101008083540402835291602001916105fe565b820191906000526020600020905b8154815290600101906020018083116105e157829003601f168201915b50505050509050919050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1660ff1614158015610671575060008160ff1614155b1561067b57600080fd5b60016000808282540192505081905550610696838383610749565b505050565b600080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015414159050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff169050919050565b60005481565b610751610828565b6080604051908101604052808581526020018481526020018360ff168152602001600054815250905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190805190602001906107d6929190610854565b5060208201518160010190805190602001906107f3929190610854565b5060408201518160020160006101000a81548160ff021916908360ff1602179055506060820151816003015590505050505050565b6080604051908101604052806060815260200160608152602001600060ff168152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061089557805160ff19168380011785556108c3565b828001600101855582156108c3579182015b828111156108c25782518255916020019190600101906108a7565b5b5090506108d091906108d4565b5090565b6108f691905b808211156108f25760008160009055506001016108da565b5090565b905600a165627a7a72305820ec3e7377795ac32521fc8ed2f9d0017515c0b6a3b6702823b7571835a4271a850029";
	var contract = web3.eth.contract(abi);
	var gasPrice = '4700000';

	console.log("Please unlock account coinbase. Default eth.account[0]");
	web3.personal.unlockAccount(eth.coinbase);

	var passport = contract.new(
		{
			from: eth.coinbase,
			data: bin,
			gas: gasPrice},
		function(e, contract) {
			if (e) {
				console.log(e);
			} 
			else {
				if (contract.address) {
					console.log ("mined " + contract.address);
				}
			}
		});
	return (passport)
}
