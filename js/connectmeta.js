async function connect() {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // const account = accounts[0];
    //Get the current MetaMask selected/active wallet
    const walletAddress = ethereum.selectedAddress;
    console.log(`Wallet: ${walletAddress}`);

  } else {
    console.log("No wallet");
    window.web3 = new Web3(window.ethereum);
    const account = web3.eth.accounts;
  }
}
window.onload = function () {
  wallet = document.getElementById("connectWallet").firstChild;
  if(!window.ethereum){
    wallet.innerHTML = "Connected";
    wallet.disabled;
  }
}