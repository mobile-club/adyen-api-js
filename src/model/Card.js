/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 30
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.Card = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Card model module.
   * @module model/Card
   * @version 1.30.4
   */

  /**
   * Constructs a new <code>Card</code>.
   * a representation of a (credit or debit) card
   * @alias module:model/Card
   * @class
   * @param expiryMonth {String} the month component of the expiry date (may be left padded with 0 for single digits)
   * @param expiryYear {String} the year component of the expiry date
   * @param holderName {String} the cardholder name as printed on the card
   * @param _number {String} the card number (without separators)
   */
  var exports = function(expiryMonth, expiryYear, holderName, _number) {
    var _this = this;


    _this['expiryMonth'] = expiryMonth;
    _this['expiryYear'] = expiryYear;
    _this['holderName'] = holderName;

    _this['number'] = _number;


  };

  /**
   * Constructs a <code>Card</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Card} obj Optional instance to populate.
   * @return {module:model/Card} The populated <code>Card</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cvc')) {
        obj['cvc'] = ApiClient.convertToType(data['cvc'], 'String');
      }
      if (data.hasOwnProperty('expiryMonth')) {
        obj['expiryMonth'] = ApiClient.convertToType(data['expiryMonth'], 'String');
      }
      if (data.hasOwnProperty('expiryYear')) {
        obj['expiryYear'] = ApiClient.convertToType(data['expiryYear'], 'String');
      }
      if (data.hasOwnProperty('holderName')) {
        obj['holderName'] = ApiClient.convertToType(data['holderName'], 'String');
      }
      if (data.hasOwnProperty('issueNumber')) {
        obj['issueNumber'] = ApiClient.convertToType(data['issueNumber'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('startMonth')) {
        obj['startMonth'] = ApiClient.convertToType(data['startMonth'], 'String');
      }
      if (data.hasOwnProperty('startYear')) {
        obj['startYear'] = ApiClient.convertToType(data['startYear'], 'String');
      }
    }
    return obj;
  }

  /**
   * the card security code which, depending on card brand, is referred to as CVV2/CVC2 (three digits) or CID (4 digits)
   * @member {String} cvc
   */
  exports.prototype['cvc'] = undefined;
  /**
   * the month component of the expiry date (may be left padded with 0 for single digits)
   * @member {String} expiryMonth
   */
  exports.prototype['expiryMonth'] = undefined;
  /**
   * the year component of the expiry date
   * @member {String} expiryYear
   */
  exports.prototype['expiryYear'] = undefined;
  /**
   * the cardholder name as printed on the card
   * @member {String} holderName
   */
  exports.prototype['holderName'] = undefined;
  /**
   * <i>for some UK debit cards only</i> the issue number of the card
   * @member {String} issueNumber
   */
  exports.prototype['issueNumber'] = undefined;
  /**
   * the card number (without separators)
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * <i>for some UK debit cards only</i> the month component of the start date
   * @member {String} startMonth
   */
  exports.prototype['startMonth'] = undefined;
  /**
   * <i>for some UK debit cards only</i> the year component of the start date
   * @member {String} startYear
   */
  exports.prototype['startYear'] = undefined;


  /**
   * Returns the card security code which, depending on card brand, is referred to as CVV2/CVC2 (three digits) or CID (4 digits)
   * @return {String}
   */
  exports.prototype.getCvc = function() {
    return this['cvc'];
  }

  /**
   * Sets the card security code which, depending on card brand, is referred to as CVV2/CVC2 (three digits) or CID (4 digits)
   * @param {String} cvc the card security code which, depending on card brand, is referred to as CVV2/CVC2 (three digits) or CID (4 digits)
   */
  exports.prototype.setCvc = function(cvc) {
    this['cvc'] = cvc;
  }


  /**
   * Returns the month component of the expiry date (may be left padded with 0 for single digits)
   * @return {String}
   */
  exports.prototype.getExpiryMonth = function() {
    return this['expiryMonth'];
  }

  /**
   * Sets the month component of the expiry date (may be left padded with 0 for single digits)
   * @param {String} expiryMonth the month component of the expiry date (may be left padded with 0 for single digits)
   */
  exports.prototype.setExpiryMonth = function(expiryMonth) {
    this['expiryMonth'] = expiryMonth;
  }


  /**
   * Returns the year component of the expiry date
   * @return {String}
   */
  exports.prototype.getExpiryYear = function() {
    return this['expiryYear'];
  }

  /**
   * Sets the year component of the expiry date
   * @param {String} expiryYear the year component of the expiry date
   */
  exports.prototype.setExpiryYear = function(expiryYear) {
    this['expiryYear'] = expiryYear;
  }


  /**
   * Returns the cardholder name as printed on the card
   * @return {String}
   */
  exports.prototype.getHolderName = function() {
    return this['holderName'];
  }

  /**
   * Sets the cardholder name as printed on the card
   * @param {String} holderName the cardholder name as printed on the card
   */
  exports.prototype.setHolderName = function(holderName) {
    this['holderName'] = holderName;
  }


  /**
   * Returns <i>for some UK debit cards only</i> the issue number of the card
   * @return {String}
   */
  exports.prototype.getIssueNumber = function() {
    return this['issueNumber'];
  }

  /**
   * Sets <i>for some UK debit cards only</i> the issue number of the card
   * @param {String} issueNumber <i>for some UK debit cards only</i> the issue number of the card
   */
  exports.prototype.setIssueNumber = function(issueNumber) {
    this['issueNumber'] = issueNumber;
  }


  /**
   * Returns the card number (without separators)
   * @return {String}
   */
  exports.prototype.getNumber = function() {
    return this['number'];
  }

  /**
   * Sets the card number (without separators)
   * @param {String} _number the card number (without separators)
   */
  exports.prototype.setNumber = function(_number) {
    this['number'] = _number;
  }


  /**
   * Returns <i>for some UK debit cards only</i> the month component of the start date
   * @return {String}
   */
  exports.prototype.getStartMonth = function() {
    return this['startMonth'];
  }

  /**
   * Sets <i>for some UK debit cards only</i> the month component of the start date
   * @param {String} startMonth <i>for some UK debit cards only</i> the month component of the start date
   */
  exports.prototype.setStartMonth = function(startMonth) {
    this['startMonth'] = startMonth;
  }


  /**
   * Returns <i>for some UK debit cards only</i> the year component of the start date
   * @return {String}
   */
  exports.prototype.getStartYear = function() {
    return this['startYear'];
  }

  /**
   * Sets <i>for some UK debit cards only</i> the year component of the start date
   * @param {String} startYear <i>for some UK debit cards only</i> the year component of the start date
   */
  exports.prototype.setStartYear = function(startYear) {
    this['startYear'] = startYear;
  }



  return exports;
}));


