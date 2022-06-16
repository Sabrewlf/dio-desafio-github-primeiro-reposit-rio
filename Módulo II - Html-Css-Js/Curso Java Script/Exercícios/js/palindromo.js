
/*function verificaPalindromo(string)
{
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo(""));*/

//Solução 2

function verificaPalindromo(string)
{
    if(!string) return "String inexistente";

    for(let i =0; i < string.length / 2; i++)
    {
        if(string[i] !== string.length -1 -i)
        {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo("abba"));