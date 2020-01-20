function userOption() {
  
let input = prompt('What would you like to do?');

  while (input !== 'q') {
      if (input === 'w') {
          prompt('How much would you like to withdraw?');
          break;
          }
          else if (input === 'd') {
          prompt('How much would you like to deposit?');
          break;
          }
          else if (input === 'b') {
          alert('Your account balance is $100.');
          break;
          }
          else {
          alert('Invalid entry. Please try again.');
          break;
          }
   }
   while (input === 'q') {
      alert('Your transaction is complete.');
      break;
   }

userOption();

}
