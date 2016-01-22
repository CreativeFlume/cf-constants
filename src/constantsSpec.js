'use strict';

let expect = require('chai').expect;
const constants = require('./constants');

describe('Exposed Constants', () => {
  it('exports TEST_ENV', () => {
    expect(constants.TEST_ENV).to.equal('test');
  });
});
