import { send } from './mailer';

// interface

interface Contact {
    name: string;
    age: number;
    email: string;
}

const contacts: Contact[] = []; // mảng bao gồm các obj và mỗi obj bên trong phải có kiểu Contact

const newContact: Contact = {
    name: 'LTL',
    age: 10,
    email: 'ltl@gmail.com',
};
contacts.push(newContact);

// optional properties
interface Contact2 {
    name: string;
    age: number;
    email?: string;
}

const contacts2: Contact2[] = [];

const otherContact: Contact2 = {
    name: 'LTL',
    age: 2,
};

contacts2.push(otherContact);

//
send(newContact.email, 'a', 'b');
//
if (otherContact.email) {
    send(otherContact.email, 'a', 'b');
}

class MyContact implements Contact {
    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const a = new MyContact('A', 123, 'mail');
console.log(a.name);
