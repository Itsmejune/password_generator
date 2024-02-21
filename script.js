document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('myRange');
    const lengthDisplay = document.getElementById('lengthDisplay');
    const passwordDisplay = document.getElementById('passwordDisplay');
    const generateButton = document.getElementById('generate');
    const copyButton = document.getElementById('copy');
  
    slider.oninput = function() {
      lengthDisplay.textContent = this.value;
    }
  
    generateButton.onclick = function() {
      passwordDisplay.value = generatePassword(slider.value);
    }
  
    copyButton.onclick = function() {
      navigator.clipboard.writeText(passwordDisplay.value);
    }
  
    function generatePassword(length) {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
      let retVal = '';
      for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
  });