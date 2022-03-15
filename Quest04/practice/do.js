let memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);

let memberObject = {
    manager: 'egoing', // key : velue
    developer: ' graphittie',
    designer: 'leezhce'
}
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);

const student = {
    name: ' hyun',
    level: '1'
};
let {name, level} = student;
console.log(name, level);

const {name: studentName, level:studentLevel} = student;
console.log( studentName, studentLevel);

// array
const animals = ['dog','cat'];

let first = animals[0];
let second = animals[1];
console.log(first, second);

[first,second] = animals;
console.log(first, second);

// array copy
const ob1 = {key: 'key1'};
const ob2 = {key: 'key2'};
const array = [ob1, ob2];

let arrayCopy = [...array]; // ... copy
let arrayCopy2 = [...array, {key: 'key3'}]; // 추가
console.log(arrayCopy2)

// object copy
const ob3 = {...ob1};
console.log(ob3);

// array concatenation
const num1 = [1,2];
const num2 = [3,4];
const conc = [...num1, ...num2];
console.log(conc);


function printMessage(message){
    if(message == null){
        message = 'default message';
    }
    console.log(message);
}
printMessage('hello');
printMessage();

// ==
function printMessage(message = 'default message'){
    console.log(message);
}
printMessage('hello');
printMessage(); // 기본값이 나옴


{
    const isCat = true;
    // 💩
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ✨
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }
    console.clear();
  }

  {
    const weather = '🌤';
    const temparature = '16°C';
  
    // 💩
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ✨
  
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }

  {
    // 반복문
    let memberArray = ['egoing', 'graphittie', 'leezhce'];
    let i = 0;
    
    while(i < memberArray.length){
      console.log(i, memberArray[i]);
      i = i+1;
    }
    console.groupEnd('array loop');
    
    let memberObject = {
    manager: 'egoing', // key : velue
    developer: ' graphittie',
    designer: 'leezhce'
    }
  }