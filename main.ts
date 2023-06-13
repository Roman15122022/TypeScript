console.log('Hello Ts');
function addNumbers(x:number, y:number) {
    return x + y;
}
console.log(addNumbers(3, 6));

const sumArgs = (a: number, b: number):number => a + b;

const now = new Date();
now.getDay();

/*
const user = {
    name: 'Roma',
    age: 18,
    isAdmin: false,
};
*/

interface IUSer {
    name: string;
    age: number;
    isAdmin: boolean;
}
const user: IUSer = {
    name: 'Roma',
    age: 18,
    isAdmin: true,

}

const stringArr: string[] = ['a','b'];
stringArr.push('c')

const anyArr: any[] = [1, 'a', true, {a:1}];

const numericTuple = [1,2] as const;
/*numericTuple.push(3)*/ //error

function printMsg(msg: string): void { //decloration
    console.log(msg);
}
const res = printMsg('Hi');
console.log(res);

const printMsg2 = function (msg2: string): void { //expression
    console.log(msg2);
}

const printMsg3 = (msg3: string): void => {
    console.log(msg3);
}

const nestedArr:(number[] | string[])[] = [[1,2,3], ['a','d','c']];
/*Union types*/

let strorNum:string | number;
strorNum = 'd';
strorNum = 1;
/*strorNum = false*/ //err

/*Type Aliases*/
type NumberOrBoolean = number | boolean;
let myValue: NumberOrBoolean;
myValue = 300;
myValue = false;
/*myValue = 'as'*/ //err

/*crossover*/
type A = {
    propA: string;
}
type B = {
    propB: number;
}
type C = A & B;
const myObj: C = {
    propA: 'lwsal',
    propB: 42,
}

/*-------*/
type OnOff = 1 | 0;
const checkSignal = (signal: OnOff) => {
    if (signal === 1) return 'Device enabled!';
    return "Device disabled!";
}
checkSignal(1);
/*checkSignal(2);*/ //err

/*ENUMS*/
enum DeviceStates {
    ENABLED, //0
    DISABLED,//1
    BROKEN,//2
}

console.log(DeviceStates.ENABLED);
console.log(DeviceStates.DISABLED);
console.log(DeviceStates.BROKEN);

const {ENABLED, DISABLED, BROKEN} = DeviceStates;

console.log(ENABLED);
console.log(DISABLED);
console.log(BROKEN);

enum Phone {
    six = 6,
    seven, //7
    eight, //8
}

enum Heterogen{
    word = 'asa',
    notWord = 2,
    aasas,//3
}

enum FileAcces {
    //constatnt members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    //computer member
    G = '123'.length,
}

enum MyEnum1 {
    One,
    Two,
}

enum MyEnum2 {
    First = MyEnum1.One,
    Second = MyEnum1.Two,
}

interface Parent {
    name: string;
    child: {
        age: number;
        gender: string;
    };
}

const person: Parent = {
    name: "John",
    child: {
        age: 5,
        gender: "Male",
    },
};

console.log(person.name);
console.log(person.child.age);
console.log(person.child.gender);
