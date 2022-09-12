async function connect() {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // const account = accounts[0];
    //Get the current MetaMask selected/active wallet
    const walletAddress = ethereum.selectedAddress;
    // console.log(`Wallet: ${walletAddress}`);
  }
  else {
    console.log("No wallet");
    window.web3 = new Web3(window.ethereum);
    const account = web3.eth.accounts;
  }
  // Change();  
}
window.onload = function () {
  Change();
}
function Change() {
  let wall = document.getElementById("connectWall").firstElementChild;
  if (ethereum.selectedAddress != null) {
    wall.innerHTML = "Connected";
    document.getElementById("connectWall").firstElementChild.style.cursor = "not-allowed";
  }
  else {
    wall.innerHTML = "Connect Wallet";
    wall.style.cursor = "pointer";
  }
}

function openWallet() {
  document.querySelector("#WalletModal").classList.add("show");
  document.querySelector("#WalletModal").style.display = "block";
}
function closeWallet() {
  document.querySelector("#WalletModal").classList.add("show");
  document.querySelector("#WalletModal").style.display = "none";
}

connector.on("connect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];
});