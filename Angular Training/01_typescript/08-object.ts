//Good practice: create a type alias for an object and use the object type
type Person = {
    name: string;
    readonly age: number;
    spouse? : string; //optional
}

let john : Person = {
    name: 'John',
    age: 32
}

export{}