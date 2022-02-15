/** JavaScript fundamentals, console input
 * File create date: 14/02/2022
 * Author: Julián López
 * Aim: Get input data 
 * References: https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
 */


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
});