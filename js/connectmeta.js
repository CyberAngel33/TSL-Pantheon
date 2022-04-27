const initialize = () => {
    //Basic Actions Section
    const onboardButton = document.getElementById('connectButton');
    const isMetaMaskInstalled = () => {
      const { ethereum } = window;
      return Boolean(ethereum && ethereum.isMetaMask);
    };
  
    //------Inserted Code------\\
    const MetaMaskClientCheck = () => {
      if (!isMetaMaskInstalled()) {
        onboardButton.innerText = 'Click here to install MetaMask!';
      } else {
        onboardButton.innerText = 'Connect';
      }
    };
    MetaMaskClientCheck();
  };