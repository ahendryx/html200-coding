function userOption() {
let input = prompt('What would you like to do?');

/*
while (input !== 'q') {
input++;
}
*/

  if (input === 'w') {
    prompt('How much would you like to withdraw?');
    }
    else if (input === 'd') {
    prompt('How much would you like to deposit?');
    }
    else if (input === 'b') {
    alert('Your account balance is $100.');
    }
    else if (input === 'q') {
    alert('Your transaction is complete. Thank you for banking with us today!');
    }
    else {
    alert('Invalid entry. Please try again.');
    }

}
