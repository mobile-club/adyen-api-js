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
    instance = new AdyenApiJs.NotificationRequest();
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

  describe('NotificationRequest', function() {
    it('should create an instance of NotificationRequest', function() {
      // uncomment below and update the code to test NotificationRequest
      //var instane = new AdyenApiJs.NotificationRequest();
      //expect(instance).to.be.a(AdyenApiJs.NotificationRequest);
    });

    it('should have the property live (base name: "live")', function() {
      // uncomment below and update the code to test the property live
      //var instane = new AdyenApiJs.NotificationRequest();
      //expect(instance).to.be();
    });

    it('should have the property notificationItems (base name: "notificationItems")', function() {
      // uncomment below and update the code to test the property notificationItems
      //var instane = new AdyenApiJs.NotificationRequest();
      //expect(instance).to.be();
    });

  });

}));
