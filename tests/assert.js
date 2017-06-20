

var assert = {
  isEqual: function(firstAssertion, secondAssertion) {
    if (firstAssertion !== secondAssertion) {
      throw new Error("Expected " + firstAssertion + " to equal " + secondAssertion)
    }
    else {
      console.log("These things are equal")
    };
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("This is true")
    };
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsey");
    }
    else {
      console.log("This is false")
    };
  },

};
