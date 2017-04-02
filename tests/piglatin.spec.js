/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;
const piggy = require('../pig-latin.js');
const piggify = piggy.toPigLatin;
const humanize = piggy.fromPigLatin;

describe('toPigLatin', () => {
  it('should be a function', () => {
    expect(piggify).to.be.a('function');
  });
  it('should have an isVowel property', () => {
    expect(piggify().isVowel).to.not.equal(undefined);
  });
  it('should have a toPig property', () => {
    expect(piggify().toPig).to.not.equal(undefined);
  });
  it('should have a translate property', () => {
    expect(piggify().translate).to.not.equal(undefined);
  });
  it('should translate English to Pig Latin', () => {
    expect(piggify().translate('my name is kanoa')).to.equal('y-may ame-nay is-ay anoa-kay');
    expect(piggify().translate('what up fool')).to.equal('at-whay up-ay ool-fay');
  });
});

describe('fromPigLatin', () => {
  it('should be a function', () => {
    expect(humanize).to.be.a('function');
  });
  it('should have a fromPig property', () => {
    expect(humanize().fromPig).to.not.equal(undefined);
  });
  it('should have a translate property', () => {
    expect(humanize().translate).to.not.equal(undefined);
  });
  it('should translate Pig Latin to English', () => {
    expect(humanize().translate('y-may ame-nay is-ay anoa-kay')).to.equal('my name is kanoa');
    expect(humanize().translate('at-whay up-ay ool-fay')).to.equal('what up fool');
  });
});