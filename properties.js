var tableItems = {
    fuldani: 2,
    box: 1,
    router: 1,
    calender: 5,
    brush: 10

}

// Find out the properties and values ///

// names //

var propertyNames = Object.keys(tableItems);

// values //
var propertyValues = Object.values(tableItems);

// console.log(propertyNames);

// console.log(propertyValues);


tableItems['brush'] = 5;
console.log(tableItems);