import add from "./math";
const myName = "yamone";
{
    const myName = "Inner Scope yamone";
    const output = `My name is ${myName}`;
    console.log(output);
}
add(1, 2);
