//This is the solution for the Next smallest palindrom for the given positive number.

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Input positive number, to find next smallest palindrome number:\n", function(inputNum) { 
        var num = inputNum.split("").map(Number); 
        var n = num.length;     
        generateNextPalindrome(num,n);
        rl.close();
});

function AreAll9s(num, n)
{
    for(var i = 0; i < n; ++i ){
            if(num[i]!=9){
                return false;
            }
        }
    return true;
}

function generateNextPalindromeNon9s(num, n) { 
    var mid = parseInt(n/2,10);      
    var leftsmaller = false;  
    var i = parseInt(mid - 1,10);  
    var j = (n % 2)? (mid + 1) : mid; 
    while (i >= 0 && num[i] === num[j]){
        i--,j++;        
    } 
    if ( i < 0 || num[i] < num[j]){
        leftsmaller = true;
    }  
    while (i >= 0)
    {
        num[j] = num[i];
        j++;
        i--;
    }  
    if (leftsmaller == true){
        var carry = 1;
        i = mid - 1; 
        if (n%2 == 1){
            num[mid] += carry;
            carry = parseInt(num[mid] / 10,10);
            num[mid] %= 10;
            j = mid + 1;
        }
        else
            j = mid; 
        while (i >= 0){
            num[i] += carry;
            carry = parseInt(num[i] / 10,10);
            num[i] %= 10;
            num[j++] = num[i--];  
        }
    }
}  
function generateNextPalindrome(num, n ){
    var i; 
    if(AreAll9s(num, n))    { 
        var result = '';
        result = '1';
        for( i = 1; i < n; i++ ){ 
            result += '0';
        }
        result +='1';
        return console.log('Next smallest palindrome number\n' + result);
    } 
    else{ 
        generateNextPalindromeNon9s(num, n); 
        console.log('Next smallest palindrome number\n' + num.toString().replace(/,/g,''));
    }
}