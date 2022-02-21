import { send } from './mailer';

interface Pet {
    name: string;
}

interface Contact {
    name: string;
    age: number;
    email: string;
    pet?: Pet;
}

const contacts: Contact[] = [];

const newContact: Contact = {
    name: 'LTL',
    age: 10,
    email: 'ltl@gmail.com',
    pet: {
        name: 'pet'
    }
};
contacts.push(newContact);

if (newContact.email) {
    send(newContact.email, 'a', 'b');
}

// function getPetName(contact: Contact): string | undefined {
//     return contact.pet?.name;
// }

function getPetName(contact: Contact): string {
    return contact.pet?.name || '';
}