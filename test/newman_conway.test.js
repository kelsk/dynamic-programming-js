const { newmanConway } = require('../lib/newman_conway');
const { expect, assert } = require('chai');

describe("newmanConway", function () {
  it("works with 13", function () {
    // Arrange
    const input = 13

    // Act
    const answer = newmanConway(input)

    // Assert
    expect(answer).equal("1 1 2 2 3 4 4 4 5 6 7 7 8")
  });
  it("works with 20", function () {
    // Arrange
    const input = 20

    // Act
    const answer = newmanConway(input)

    // Assert
    expect(answer).equal("1 1 2 2 3 4 4 4 5 6 7 7 8 8 8 8 9 10 11 12")
  });

  it("works with base cases", function () {
    // Arrange
    let input = 0

    // Act-Assert
    assert.throws(function () { newmanConway(input) }, Error)

    // Arrange
    input = 1

    // Act
    let answer = newmanConway(input)

    // Assert
    expect(answer).equal("1")

    // Arrange
    input = 2

    // Act
    answer = newmanConway(input)

    // Assert
    expect(answer).equal("1 1")
  })
})