const{sum, fromDollarToYen}= require('./app.js');

test('adds 14+9 to equal 23', () => { 
    let total = sum(14,9);
    expect(total).toBe(23);


})

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be 153.48 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const Yen = fromDollarToYen(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 153.48; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(expected); 
})
test("One yen should be 159.875 pound", function(){
    //import the function from app.js
    const { fromYentoPound } = require('./app.js')
    // use the function Like its suppoed to be used
    const pound= fromYentoPound(3.5)
   // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected= 3.5 * 159.875;
   // this is the comparison for the unit test
     expect(fromYentoPound(3.5)).toBe(expected);
    })
    