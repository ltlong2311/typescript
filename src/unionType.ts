interface Person {
    name: string;
    gender?: 'male' | 'female' | 'unknown';
}

const newPerson: Person = {
    name: 'ltl',
    gender: 'male',
};

function isWeekend(date: Date | string): boolean {
    if( typeof date === 'string') {
        date = new Date(date);
    }

    const day = date.getDay();
    return day === 6 || day === 0
}