# cmdtl
Generate api_key at https://fourtytwowords.herokuapp.com and store it in .env file.

1. Word Definitions

            node defn <word>

Display definitions of a given word.

2. Word Synonyms

            node syn <word>

Display synonyms of a given word. 

3. Word Antonyms

            node ant <word>

Display antonyms of a given word. Note that not all words would have Antonyms (End point: /relatedWords). Example words with antonyms: single, break, start.

4. Word Examples

            node ex <word>

Display examples of usage of a given word in a sentence. 

5. Word Full Dict

            node index.js <word>

Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a given word.

6. Word of the Day Full Dict

            node index.js

Display Word Definitions, Word Synonyms, Word Antonyms & Word Examples for a random word.

7. Word Game

            node play

The command should display a definition, a synonym or an antonym and ask the user to guess the word. 

Rules:

- If the correct word is entered, show success message
- Any synonyms of the word(expected answer) should be also be accepted as a correct answer.
- If incorrect word is entered, user should be given 3 choices:
    - (1) Try again
    
        Let the user try again.
    - (2) Hint
    
        Display a hint, and let the user try again. Hints could be:
        
            1. Displays the word randomly jumbled (cat => atc, tac, tca)
            
            2. Displays another definition of the word
            
            3. Displays another antonym of the word
            
            4. Displays another synonym of the word
    - (3) Quit
    
           Displays the Word, Word Full Dict , and quit.
