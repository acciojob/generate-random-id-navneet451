function makeid(l) {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  let charactersLength = characters.length;
  
  for (let i = 0; i < l; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

// Example usage:
console.log(makeid(5));  // e.g., "K3f2G"
console.log(makeid(10)); // e.g., "aB9EfgT2X1"

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
