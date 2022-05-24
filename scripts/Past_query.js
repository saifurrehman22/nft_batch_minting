const Web3 = require('web3')
const web3 = new Web3("https://rinkeby.infura.io/v3/54864fd661734a288da4dcdda1ad2f7c");
const nftAddress = "0xB9469d01Ed9D8a3aA98D64c35AaE2B26Bd7F2A43";

const nftBuild = require('../build/contracts/NFT.json')
const nftContract = new web3.eth.Contract(nftBuild.abi, nftAddress);

const START_BLOCK = 0;
const END_BLOCK =100000000000;
nftContract.getPastEvents("allEvents",        // allEvents            // Transfer
    {                               
        fromBlock: START_BLOCK,     
        toBlock: END_BLOCK // You can also specify 'latest'          
    })                              
.then(events => console.log(events))
.catch((err) => console.error(err));

//main()