var Contact = require('./../js/scripts').Contact;
var Address = require('./../js/scripts').Address;
describe('Contact', function(){
  var person;
  beforeEach(function() {
    person = new Contact("bob", "smith")
  });

  it('should define first and last name', function() {
  expect(person.firstName).toEqual("bob");
  expect(person.lastName).toEqual("smith");
  });

  it('it should return the full name', function() {
    expect(person.fullName()).toEqual("bob smith");
  });
});

describe('Address', function(){
  var addy;

  beforeEach(function() {
    addy = new Address("123 Sesame St", "AB", "CD");
  });

  it('should define street, city, and state of address', function() {
    expect(addy.street).toEqual("123 Sesame St");
    expect(addy.city).toEqual("AB");
    expect(addy.state).toEqual("CD");
  });

  it('should return full address', function() {
    expect(addy.fullAddress()).toEqual("123 Sesame St, AB, CD");
  });

});
