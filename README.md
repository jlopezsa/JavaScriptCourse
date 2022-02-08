
<!--(https://www.youtube.com/watch?v=oxaH9CFpeEE)-->

# Introducition
Example code to learn some function in JavaScript.

## Strings
Comparing a character into string
```js
const str = "Los elefantes son enormes";
function countingEs(str){
    var counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'e') {
            counter = counter + 1;
        }
    }
    return counter;
}
```

Using <code>replace(,)</code> function to replace a specific character into string.
```js
for (const i in str) {
        switch (str[i]) {
            case 'a':
                str = str.replace('a','4');                    
                break;
            case 'e':
                str = str.replace('e','3');                    
                break;
            case 'i':
                str = str.replace('i','1');                    
                break;
            case 'o':
                str = str.replace('o','0');                    
                break;
            default:
                break;
        }
    }
```

Changing the first letter of the message words to capital letter. Functions used:
* <code>.split()</code>
* <code>.push()</code>
* <code>.replace()</code>
* <code>.toUpperCase</code>
* <code>.join()</code>
```js
function capitalizar(str){              // Function used to capitalizar a string
    vec_str = str.split(" ");           // Split function divides the string into a vector. Each vector position in a word of the string
    vec_upper = [];
    for (let i = 0; i < vec_str.length; i++) {
        vec_upper.push(vec_str[i].replace(vec_str[i][0],vec_str[i][0].toUpperCase()));  // Uppercase function is used to uppercase the first letter of the word. 
                                                                                        // Replace function is used to replace the lower case to capital letter.
                                                                                        // Push function is used to prench an empty vector (vec_upper)
    }
    return vec_upper.join(" ");         // Join function is used to join the words of the vector. The words are joined with a character " "
}
```