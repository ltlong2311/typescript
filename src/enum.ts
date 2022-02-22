enum PetType {
    Dog,
    Cat,
    Bird,
    Fish,
}

interface Pet {
    name: string;
    type: PetType;
}

const newPet: Pet = {
    name: 'abc',
    type: PetType.Fish,
};


