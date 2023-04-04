window.addEventListener('load', async () => {
});

// create a new Web3 object using the MetaMask provider
const web3 = new Web3(window.ethereum);
function connect() {
   // request access to the user's MetaMask account
   window.ethereum.request({ method: 'eth_requestAccounts' })
     .then(() => {
       console.log('Connected to MetaMask!');
     })
     .catch((error) => {
       console.error(error);
     });
}
// request access to the user's MetaMask account
window.ethereum.request({ method: 'eth_requestAccounts' })
  .then(() => {
    console.log('Connected to MetaMask!');
  })
  .catch((error) => {
    console.error(error);
  });

// interact with the Ethereum blockchain using the Web3 object
web3.eth.getAccounts()
  .then((accounts) => {
    console.log('Current account:', accounts[0]);
  })
  .catch((error) => {
    console.error(error);
  });


