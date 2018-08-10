/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AdyenApiJs);
  }
}(this, function(expect, AdyenApiJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AdyenApiJs.ForexQuote();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ForexQuote', function() {
    it('should create an instance of ForexQuote', function() {
      // uncomment below and update the code to test ForexQuote
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be.a(AdyenApiJs.ForexQuote);
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property interbank (base name: "interbank")', function() {
      // uncomment below and update the code to test the property interbank
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property sell (base name: "sell")', function() {
      // uncomment below and update the code to test the property sell
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property buy (base name: "buy")', function() {
      // uncomment below and update the code to test the property buy
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property validTill (base name: "validTill")', function() {
      // uncomment below and update the code to test the property validTill
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property basePoints (base name: "basePoints")', function() {
      // uncomment below and update the code to test the property basePoints
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property baseAmount (base name: "baseAmount")', function() {
      // uncomment below and update the code to test the property baseAmount
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

    it('should have the property accountType (base name: "accountType")', function() {
      // uncomment below and update the code to test the property accountType
      //var instane = new AdyenApiJs.ForexQuote();
      //expect(instance).to.be();
    });

  });

}));
