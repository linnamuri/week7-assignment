/*1) Sum Zero
Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.*/

//  Time Complexity: O(n^2)
//  Space Complexity: Linear Space - O(n)

arr1=[1,2,3,-3,-2];


console.log("The input array has a sum of two number that adds up to 0: "+addToZero([1,2,3,-2]));

function addToZero(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
           if(arr[i]+arr[j]===0)
           {
            return true;
           }
        }
     }
    
        return false;
}

/* 2) Unique Characters
Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.*/

//  Time Complexity: O(n^2)
//  Space Complexity: Linear Space - O(n)

console.log("The input string has unique character: "+hasUniqueChars('mondaytuessfrt'));

function hasUniqueChars(string)
{
    var is_unique=true;
    for (let i = 0; i < string.length; i++)
	{
		for (let j = i + 1; j < string.length; j++)
		{
			// if a character is repeated
			if (string[i] == string[j])
			{
				// set boolean variable to false
				is_unique = false ;
				return is_unique ;
			}
		}
	}
    return is_unique ;
}


/*
3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.*/

//  Time Complexity: O(n)
//  Space Complexity: Linear Space - O(n)

console.log("Is the sentence a pangram?: "+pangram('The quick brown fox jumps over the lazy dog'));

function pangram(string)
{
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetArr = alphabetString.split('');
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){
        let eachLetter = string[i];
        let alphabetStringIndex = alphabetArr.indexOf(eachLetter);
        if(alphabetStringIndex !== -1){
            alphabetArr.splice(alphabetStringIndex, 1);
        }
     }
     if(alphabetArr.length==0)
     {return true;}
     else
     {return false;}
}

/*
4)Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
*/

//  Time Complexity: O(n)
//  Space Complexity: Linear Space - O(n)

console.log("Longest word of the array is: "+longestWord(["JavaScript", "JavaScriptTest", "Hello"]));

function longestWord(wordArray)
{
    let longestWordIndex, longestWordLength;
    for(let i=0; i<wordArray.length; i++)
    {
        if(i==0)
        {
            longestWordLength=wordArray[i].length
            longestWordIndex=i
        }
        if(i!=0 && wordArray[i].length>longestWordLength)
        {
            longestWordLength=wordArray[i].length
            longestWordIndex=i
        }
    }
    return wordArray[longestWordIndex]
}



