function matchString(sentence, char){
        let count = 0;
    
        for (let i = 0; i < sentence.length; i++) {
    
            // check if the character is at that position
            if (sentence.charAt(i) == char) {
                count += 1;
            }
        }
        return count;
    }
    
    //prompt
    const name1 = prompt('Enter a name: ');
    const match = "matches";
    const name2 = prompt('Enter a name to match: ');
    
    //passing parameters and calling the function
    const result = countString(sentence, name2);
    
    // displaying the result
    console.log(result);