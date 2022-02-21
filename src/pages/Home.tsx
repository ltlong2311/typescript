import React, { useState } from 'react';

interface IState {
    people: {
        name: string;
        age: number;
        bio: string;
    };
}

const Home = () => {
    const [age, setAge] = useState(5);
    const [name, setName] = useState('LTL');
    const [inputData, setInputData] = useState({
        name: '',
        age: '',
    });
    const [size, setSize] = useState<number | string>('XL');
    // const [people, setPeople] = useState<{name: string, age: number, bio:string}[]>([{name: "ltl", age: 23, bio: "dev"}]);
    const [people, setPeople] = useState<IState['people']>({
        name: 'ltl',
        age: 23,
        bio: 'dev',
    });
    return <div>Home</div>;
};

export default Home;
