interface IPerson {
  name: string;
  age: number;
  spouse?: string;
  celebrateBirthday: (by: number) => number;
}

//USe-case 1: Provide data type for object
const john: IPerson = {
  name: "John Doe",
  age: 32,
  celebrateBirthday(by: number = 1) {
    this.age += by;
    return this.age;
  },
};

//Use-case 2 : DEfine "contract" in the class
class Person implements IPerson {
  name: string;
  age: number;
  spouse?: string;
  readonly emails: string[] = [];
  private aadhar = "xxxx-xxxx-xxxx";

  //Spouse being an optional argument
  constructor(name: string, age: number, spouse?: string) {
    this.name = name;
    this.age = age;

    if (spouse) this.spouse = spouse;
  }

  celebrateBirthday(by: number) {
    this.age += by;
    return this.age;
  }
}

const jane = new Person("John Doe", 32); //assignment not allowed for readonly members
jane.emails.push("jane@example.com"); //You can add to ana existing array
