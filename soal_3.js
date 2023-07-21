function isBalanced(input) {
    const stack = [];

    for (const bracket of input) {
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
        } else {
            if (stack.length === 0) {
                return "NO";
            }

            const top = stack.pop();

            if (
                (bracket === ')' && top !== '(') ||
                (bracket === '}' && top !== '{') ||
                (bracket === ']' && top !== '[')
            ) {
                return "NO";
            }
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}

function main() {
    const prompt=require("prompt-sync")({sigint:true});
    const consoleInput = prompt("Input: ")

    const result = isBalanced(consoleInput);
    console.log(result);    
}

main();
