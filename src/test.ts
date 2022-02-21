import * as Mailer from './mailer';

// const age = 23;

const age: number = 23;

// let newVar;
// newVar = 'name';
var newVar: string;

// function sum(a, b) {
//     return a + b;
// }

function sum(a: number, b: number) {
    return a + b;
}

// function sum(a: number, b: number): number {
//     return a + b;
// }

// const multiply = (a, b) => a * b;
const multiply = (a: number, b: number) => a * b;

// const sendEmail =async ({ email, subject, content }) => {
//     const res = await Mailer.send(email, subject, content);
// };

const sendEmail = async ({ email, subject, content }: {
    email: string;
    subject: string;
    content: string;
}) => {
    const res = await Mailer.send(email, subject, content);
};

// function waitAndDo(callback) {
//     setTimeout(() => {
//         callback('Oops!');
//     }, 1000)
// }

function waitAndDo(callback: (param: string) => void) {
    setTimeout(() => {
        callback('Oops!');
    }, 1000)
}

// class Dog {
//     sayHi(name) {
//         console.log('Gau', name);
//     }
// }

class Dog {
    sayHi(name: string) {
        console.log('Gau', name);
    }
}