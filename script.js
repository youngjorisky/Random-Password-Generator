function randompassword(length, booleanlower, booleannumbers, booleansymbol, booleanupper){
    
    lowercasechar = 'abcdefghijklmnopqrstuvwxyz';
    uppercasechar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    symbolchar = '@#$%#$%&%^&$_)+';
    numberschar = '0123456789';

    let chosenchar = '';
    let password = '';

    chosenchar += booleanlower ? lowercasechar : '';
    chosenchar += booleanupper ? uppercasechar : '';
    chosenchar += booleannumbers ? numberschar : '';
    chosenchar += booleansymbol ? symbolchar : '';

    for(i=0; i<length; i++){
        const mathindex = Math.floor(Math.random() * chosenchar.length);
        password += chosenchar[mathindex];
    }
    return password;
}
const booleanlower = true;
const booleanupper = true;
const booleannumbers = true;
const booleansymbol = true;
const length = 12;

const password = randompassword(length, booleanlower, booleannumbers, booleanupper, booleansymbol);

console.log(`Generated password: ${password}`);

/*
step 1: Create a function to be initialized at the end of your
code with selection set in place.
step 2: Create your set of characters for each sect(ei. num, 
lower-case, upper-case and symnols)
step 3: Assign your 'chosenchar' to each set of characters for all
being true.
step 4: create a for loop per your length of password chosen. Randomize
the length of 'chosenchar' and assign it to password'
step 5: return password
step 6: Select which set to be chosen using the boolean operation.
step 7: Call function.
step 8: Console.log
*/
