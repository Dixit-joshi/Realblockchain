const {Web3} = require('web3');
const PropertyContract = require('./build/contracts/PropertyContract.json');

const rpcServer = 'HTTP://127.0.0.1:7545'; // Ganache RPC server address
const web3 = new Web3(new Web3.providers.HttpProvider(rpcServer));

const contractAddress = '0x62b6305EB9115A240b9F6942094285BC6ffc0B18'; // Address of deployed contract
const contractInstance = new web3.eth.Contract(PropertyContract.abi, contractAddress);

// Example: Set property data
async function setPropertyData() {
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.setProperty(1000, 3, 2, true, true).send({ from: accounts[0] });
    console.log('Property data set successfully.');
}

// Example: Get property data
async function getPropertyData() {
    const accounts = await web3.eth.getAccounts();
    const propertyData = await contractInstance.methods.getProperty().call({ from: accounts[0] });
    console.log('Property data:', propertyData);
}

setPropertyData();
getPropertyData();
