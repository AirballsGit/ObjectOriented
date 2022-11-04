
//---------------------------------------//
// Section 1: OOP Javascript Object Oriented Programming.. //
//--------------------------------------//

// - REVIEW HOW OBJECTS WORK IN JS 
// - DEFINE CLASSES IN JS -- NEW WITH ES2015 
// -USE CLASSES TO CREATE INSTANCES THAT SHARE FUNCTIONALITY ACROSS DIFFERNT OBJECTS 
// - DESCRIBE CONSTRUCTOR FUNCTIONS AND USE THEM TO CREATE NEW INSTANCES OF OBJECTS THAT FOLLOW PATTERNS 
// - DESCRIBE INHERITANCE, A NEW KEYWORD IN JS  SHARE FUNCATIONALITY ACROSS OBJECTS & INHERIATE FUNCATIONALLY FROM OTHER OBJECTS
// - DEFINE COMMON USED OOP TERMS: LIKE ENCAPUSULATION & POLYMORPHISM 


// ---------------------------------------------------------------------------------------------------------------------//


//---------------------------------------//
// --------Section 2: JS OBJECTS REVIEW ------- //
//--------------------------------------//

// "PLAIN OLD JAVASCRIPT OBJECT" (AKA POJO):

// let o1 = {};
// let o2 = new Object(); // same thing... in console is {} (before writing below code)

// o1.name = "Whiskey"; // you can set properties on these objects 2 differnt ways using the dot syntax or the square brackets as show on this line and below
// o1["name"] = "Whiskey"; // same thing ... in console running both o1.name and o1["name"] prints 'Whiskey' 
// o1[1] = "hello";
// o1["1"] = "goodbye";
// // o1["1"] and o1[1] both are now 'goodbye' 


// const color = 'teal'; 
// const obj = {}; 
// obj.color = '#3723FF';  // add a new property and the key is color 
// obj[color] = '#3723FF'; // inside the square brackets are evaluted and turns into the string "teal"
// obj[1 + 4 - 2 * 8] = '#3723FF'; // -11 which is our key 

// // JS OBJECTS REVIEW 1.2:

// //if you ever need to get the keys from an object you can use one of these: Object.keys(); Object.values(); Object.entries(); 
// //Can get arrays of keys, values or [key,val] arrays: 

// // Object.keys(obj) = array containing the keys 
// // Object.values(obj) = array containing the values 
// // Object.entries(obj) = gives you an array where each element is a pair, a key/value pair ** EXAMPLE BELOW **

// for(let x of Object.entries(obj)) {
//     console.log(x);
// }
// //  (2) ['color', '#3723FF'] > 0: "color" 1: "#3723FF" length: 2
// //  (2) ['teal', '#3723FF'] > 0: "teal" 1: "#3723FF" length: 2
// //  (2) ['-11', '#3723FF'] > 0: "-11" 1: "#3723FF" length: 2

// for(let [k,v] of Object.entries(obj)) { // destructing the above example 
//     console.log(k,v);
// }
// // color #3723FF 
// //  teal #3723FF
// //   -11 #3723FF 

// Object.keys(o1); // ['name'] > 0: "name"
// Object.values(o1);// ['Whiskey'] > 0: "Whiskey"
// Object.entries(o1); // [Array(2)] > 0: (2) ['name','Whiskey'] length: 1 > 0: "name" 1: "Whiskey" length: 2

// Object.keys(obj); // (3) ['color', 'teal', '-11']
// Object.values(obj);// (3) ['#3723FF', '#3723FF', '#3723FF']
// Object.entries(obj); // (3) [Array(2), Array(2), Array(2)] > 0: (2) ['color', '#3723FF'] 1: (2) ['teal', '#3723FF'] 2: (2) ['-11', '#3723FF']

// //Details to know: 
// // 1. properties that do not exist in the object register as undefined/ ex: o1.elie // undefined 
// // 2. anytime you add a key to an object its turned to a string. All keys get "stringified": 
// //  ex: o1[1] = "hello";
// //  ex: o1["1"] = "goodbye"; 



// //---------------------------------------//
// // --------Section 3: Methods Review ------- //
// //--------------------------------------//
// // ** WHEN WE ADD A FUNCTION TO A PROPERTY WE CALL IT A METHOD** 


// //easy example:

// o1.sayHi = function() {return "Hi!"}; // using object example from Section 2 
// o1.sayHi(); // Hi! 

// //example 1:  creating our own methods 
// const add = (x,y) => x + y; // add method
// const mult = (x,y) => x * y;  // multiply method
// const square = (x) => x * x;  // square method
// const power = (x, y) => x ** y;  // power method
// const divide = (x,y) => x / y;  // divide method 
// // in console you would type add(3,4) ---- > 7

// //example 1.2: creating an object containing above math functions..... grouping the methods together under myMath 
// const myMath = {}; 
// myMath.add = add;
// myMath.mult = mult;
// myMath.square = square;
// myMath.power = power; 
// // in console you would type myMath.add(3,4)  ---- > 7

// //example 1.3: instead of doing the above 1.2 example you can just do it "inline" as shown below with the shorthand syntax like below:
// const myMath2 = {add, mult, square, power, divide}; // creating a new object with 5 properties using the functions above// the properties names are taken from the varible name
// // in console you would type myMath2.mult(3,4)  ----- > 12

// //Below two examples run on their own rather than the above example 1.2 and 1.3 need to run of having defined functions in example 1. 
// //example 2: 
// const myMath3 = { // define them in line, instead of doing the above where we define the functions then add to a object:
//     add: function(x,y){
//         return x + y;
//     },
//     mult: (x,y) => { // using an arrow function here (in next video he explains why arrow functions arent great as properties)
//         return x * y; 
//     }
// }; // in console you would run myMath3.add(2,3) ---- > 5 or myMath3.mult(3,3) ---- > 9 

// //example 3: 
// const myMath4 = { // this is getting ride of the : in the objects: 
//     add(x,y){
//         return x + y;
//     }, 
//     square(x){
//         return x * x; 
//     }, 
//     subtract(x,y){
//         return x - y; 
//     }
// }; // // in console you would run myMath4.add(2,3) ---- > 5 or myMath4.square(4) -----> 16 or myMath4.subtract(7,3) ---- > 4 

// // these represent a bunch of differnt ways to add functions as properties on an object.  


// //---------------------------------------//
// // --------Section 4: This and Methods ------- //
// //--------------------------------------//

// // **Mixing Data and Functionality**: 

// //easy example: 2 functions that have to do with right triangles: 

// function getHypotenuse(a,b){
//     return Math.sqrt(a ** 2 + b ** 2);
// }
// function getArea(a,b){
//     return a * b / 2; 
// }

// const side1 = 4; 
// const side2 = 3; 
// const side3 = getHypotenuse(side1,side2);
// const area = getArea(side1,side2);


// // using a POJO: 
// // example 2:

// let triangle = {
//     a: 3,
//     b: 4,
//     getArea: function(){
//         return this.a * this.b / 2; 
//     },
//     getHypotenuse: function(){
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };

// // example 3:
// let rightTriangle = {
//     a: 9,
//     b: 12,
//     getArea: function(){
//         return this.a * this.b / 2; 
//     },
//     getHypotenuse: function(){
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };

// //example 3.1 above can be re-written without the semi colons like below
// let rightTriangle2 = {
//     a: 9,
//     b: 12,
//     getArea(){
//         return this.a * this.b / 2; 
//     },
//     getHypotenuse(){
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };

// //example 3.2 
// let rightTriangle3 = { // same example as above but printout of 'this' to show what 'this' is 
//     a: 9,
//     b: 12,
//     printThis: function(){
//         console.log(this);
//     },
//     getArea: function(){
//         return this.a * this.b / 2; 
//     },
//     getHypotenuse: function(){
//         this.printThis();
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };

// //example 3.3 above can be re-written without the semi colons like below
// let rightTriangle4 = {
//     a: 9,
//     b: 12,
//     printThis (){
//         console.log(this);
//     },
//     getArea(){
//         return this.a * this.b / 2; 
//     },
//     getHypotenuse(){
//         this.printThis();
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };


// //---------------------------------------//
// // --------Section 5: Constructor Functions and New------- //
// //--------------------------------------//


// let rightTriangle5 = { // this is an objeect 
//     a: 9,
//     b: 12,
//     getArea(){
//         return this.a * this.b / 2; 
//     },
//     getHypotenuse(){
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     }
// };


// // ** we use capital letter for the function name here when doing this 
// function Triangle1(a,b){  // this is a function and will just return undefined  *** one of the reasons to use CAPITAL LETTER is to indicate this isnt a regular function
//     this.a = a;
//     this.b = b; 
//     this.getArea = function(){
//         return this.a * this.b / 2; 
//     };
//     this.getHypotenuse = function(){
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     };
// }

// // if we want create a new triangle or many new triangles without having to copy and paste and reuse previous triangles and change their values everytime
// // we would use the 'New' keyword

// // WHAT 'NEW' actually does:
// // When you call a function with new it >> 
// // 1. *creates a blank, plain javascript object
// // 2. Links (sets the constructor of) this object to another object
// // 3. *passes the newly created object from step 1 as the 'this' context 
// // 4. *returns 'this' if the function doesnt return its own object


// // example of new: this is only using function Triangle1 to use not the above 'rightTriangle5' 

// const t1 = new Triangle1(3,4); // Triangle1 {a: 3, b: 4, getArea: ƒ, getHypotenuse: ƒ} 

// // using new: we create a repeatable and reuseable template where you can create 100 differnt triangles by just using the above const t1 example 



// //---------------------------------------//
// // --Section 6: Brief Into to Prototypes--- //
// //--------------------------------------//


// function Triangle2 (a,b){
//     this.a = a; 
//     this.b = b; 
//     // this.getArea = function (){         // this is commented out to use the new Triangle.prototype below **
//     //     return this.a * this.b / 2; 
//     // };
//     // this.getHypotenuse = function(){
//     //     return Math.sqrt(this.a ** 2 + this.b ** 2);
//     // };
// }

// // ________________________________________________________
// // How to recreate the above without created an entirly new function everytime: below 

// Triangle2.prototype.getArea = function(){
//     return this.a * this.b / 2; 
// }

// Triangle2.prototype.getHypotenuse = function(){
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
// };

// Triangle2 (5,7); // RETURN UNDEFINED! 
// //USING THE NEW OPERATOR: 
// const tri1 = new Triangle2(3,4);
// tri1.getHypotenuse(); // 5
// const tri2 = new Triangle2(9,12);
// tri2.getHypotenuse(); // 15 


// // Array.prototype.push = function (val){ // you can change the built in method (dont ever do this unless working with a 'polyfill' but this demonstrates the prototypes)
// // console.log(`So you want to add ${val}`);
// // console.log(`SORRY DONT FEEL LIKE IT`);
// // }

// // const nums = [1,2,3]; 

// // nums.push(9); // push method doesnt exsist anymore. 


// //---------------------------------------//
// // --Section 7: Classes Intro-- //
// //--------------------------------------//

// // Classes are a new way of doing the above in section 6: Classes are a "blueprint" of functionality:
// // we define a class which will act as a pattern or template for a particular type of object we want to create 

// //below is the pattern we want all new triangles to follow
// class NewTriangle {
// greet(){
//     console.log('Hello, I am a Triangle!');  // firstTri.greet() >> Hello, I am a Triangle! in console 
// }
// display(){
//     console.log(`Triangle with the sides of ${this.a} and ${this.b}`); // Triangle with the sides of undefined and undefined if a and b arent defined 
// }
// }


// //these are the instances when making new triangles based on the above pattern..
// const firstTri = new NewTriangle();
// firstTri.a = 3; // there is a better way to defined the triangle sides than doing it this way, explained in next lesson 
// firstTri.b = 4;
// const secondTri = new NewTriangle();
// secondTri.a = 9;
// secondTri.b = 12; 


// // when we define a class: use capital letter to show its a class and not an object.. inside the class we can define methods.. these methods arent  added to the >
// // instances but they are added to the prototype NewTriangle.prototype 



// //---------------------------------------//
// // --Section 8: Adding Constructors-- //
// //--------------------------------------//

// //example 1:
// // class NewerTriangle {
// //     constructor(a,b,c){
// //         if(!Number.isFinite(a) || a <= 0){
// //             console.log('INVALID SIDE');
// //             throw new Error("SIDES MUST BE POSITIVE NUMBERS!"); // you dont want to use 'RETURN' in a constructor as the new object will still get created but the values wont be inputed
// //         }
// //         this.a = a;
// //         this.b = b;
// //         this.c = c;
// //     }
// //     greet(){
// //         console.log('Hello, I am a Triangle!');  // firstTri.greet() >> Hello, I am a Triangle! in console 
// //     }
// //     display(){
// //         console.log(`Triangle with the sides of ${this.a}, ${this.b} and ${this.c}`); // Triangle with the sides of undefined and undefined if a and b arent defined 
// //     }
// //     }

// //************* */
// //example 1.2: getting ride of the console.logs and adding in a throw new error for each side of triangle:
// // class NewerTriangle {
// //     constructor(a,b,c){
// //         if(!Number.isFinite(a) || a <= 0){
// //             throw new Error("SIDES MUST BE POSITIVE NUMBERS!"); // you dont want to use 'RETURN' in a constructor as the new object will still get created but the values wont be inputed
// //         }
// //         if(!Number.isFinite(b) || b <= 0){
// //             throw new Error("SIDES MUST BE POSITIVE NUMBERS!"); 
// //         }
// //         if(!Number.isFinite(c) || c <= 0){
// //             throw new Error("SIDES MUST BE POSITIVE NUMBERS!"); 
// //         }
// //         this.a = a;
// //         this.b = b;
// //         this.c = c;
// //     }
// //     greet(){
// //         console.log('Hello, I am a Triangle!');  // firstTri.greet() >> Hello, I am a Triangle! in console 
// //     }
// //     display(){
// //         console.log(`Triangle with the sides of ${this.a}, ${this.b} and ${this.c}`); // Triangle with the sides of undefined and undefined if a and b arent defined 
// //     }
// //     }


// //*********** */
// //example 1.3:

// class NewerTriangle {
//     constructor(a,b,c){
//         for(let triside of [a,b,c]){
//             if(!Number.isFinite(triside) || triside <= 0){
//                 throw new Error("SIDES MUST BE POSITIVE NUMBERS!");
//             }
//         }
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     greet(){
//         console.log('Hello, I am a Triangle!');  // firstTri.greet() >> Hello, I am a Triangle! in console 
//     }
//     display(){
//         console.log(
//             `Triangle with the sides of ${this.a}, ${this.b} and ${this.c}`
//          ); // Triangle with the sides of undefined and undefined if a and b arent defined 
//     }
// }


// //---------------------------------------//
// // --Section 9: Adding Methods-- //
// //--------------------------------------//

// // Functions placed in a class are "methods" (formally: "instance methods"). They have access to properties of object with 'this'. >
// // They can take arguments/return data like any other function.

// class NewerTriangle2 {
//     constructor(a,b,c){
//         for(let triside of [a,b,c]){
//             if(!Number.isFinite(triside) || triside <= 0){
//                 throw new Error("SIDES MUST BE POSITIVE NUMBERS!");
//             }
//         }
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     greet(){
//         console.log('Hello, I am a Triangle!');  // firstTri.greet() >> Hello, I am a Triangle! in console 
//     }
//     display(){
//         console.log(
//             `Triangle with the sides of ${this.a}, ${this.b} and ${this.c}`
//          ); // Triangle with the sides of undefined and undefined if a and b arent defined 
//     }
//     getArea(){
//         const {a,b,c} = this; // destructing used here so we dont use alot of 'this' >> this is the same as doing = this.a, this.b and this.c
//         const s = (a + b + c) / 2;
//         return Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     }
//     isBig(){
//         return this.getArea() > 50; // you have to use this.getArea() NOT just getArea()... on t4.isBig() which getArea()===600 would return false without this.getArea()
//     }
// }

// const t2 = new NewerTriangle2(3,4,5);
// const t3 = new NewerTriangle2(5,9,10);
// const t4 = new NewerTriangle2(30,40,50);
// t2.display();

// // A Method can call another method: * NOTE: to call a method, you need to call it on 'this' 



// //---------------------------------------//
// // --Section 10: Extends - Inheritence & SUPER-- //
// //--------------------------------------//


// class SuperTriangle {   // this is acting as the parent constructor for SuperRightTriangle 
//     constructor (a,b,c){
//         console.log('INSIDE TRIANGLE CONSTRUCTOR');
//         for(let superside of [a,b,c]){
//             if(!Number.isFinite(superside) || superside <= 0){
//                 throw new Error ('Sides must be positive numbers!');
//             }
//         } 
//         this.a = a;
//         this.b = b;
//         this.c = c; 
//     }
//     greet() {
//         console.log('HELLO FROM A SUPER TRIANGLE!!!');
//     }
//     display(){
//             return `Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`;
//     }
//     getArea(){
//         const {a,b,c} = this; 
//         const s = (a + b + c) / 2;
//         return Math.sqrt(s * (s -a) * (s - b) * (s - c));
//     }
//     isBig(){
//         return this.getArea() > 50; 
//     }
// }

// class SuperRightTriangle extends SuperTriangle{  // acts as the child constructor for SuperTriangle: extends with take the properties of SuperTriangle and use them in SuperRightTriangle 
//     constructor(a,b,c){
//         if(a * a + b * b !== c * c){
//             throw new Error('Invalid C Side for right triangle!');
//         }
//         console.log('INSIDE RIGHT TRIANGLE CONSTRUCTOR');
//         super(a,b,c); // you have to call super before running the below this.hypto 
//         this.hypot = c; // its common when you extend a class to add on new properties. referencing the hypotenus here 
//         // when running a new tri on SuperRightTriangle that i call 'myTri' it would be: myTri (in console) > SuperRightTriangle {a: 3, b: 4, c: 5, hypot: 5}
//     }
//     isRightTriangle(){
//         return true; 
//     }
//     // display(){ // this will override the above SuperTriangle display method because it finds it first  (commented out to refactor with super.display)
//     //     console.log(
//     //         `Right Triangle with sides of ${this.a}, ${this.b}, and ${this.c}` // this can also we rewritten as: below 
//     //     );
//     // }
//     display(){
//         return 'Right ' + super.display();
//     }
// }

//**********************PRACTICE********************** */