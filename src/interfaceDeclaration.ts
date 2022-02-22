interface Contact {
    name: string;
    phone: string;
    email?: string;
}

interface Contact {
    address: string;
}

// Khai báo 2 interface cùng tên sẽ gộp cả 2

const newContact: Contact = {
    name: 'abc',
    phone: '999',
    email: 'abc@gmail.com',
    address: 'dc',
};
