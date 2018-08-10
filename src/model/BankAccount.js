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
    root.AdyenApiJs.BankAccount = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BankAccount model module.
   * @module model/BankAccount
   * @version 1.30.5
   */

  /**
   * Constructs a new <code>BankAccount</code>.
   * a representation of a bank account
   * @alias module:model/BankAccount
   * @class
   * @param bankAccountNumber {String} the bank account number (without separators)
   * @param bankLocationId {String} the bank transit routing number, the field value is nil in most cases.
   * @param bankName {String} the name of the bank
   * @param countryCode {String} the two letter country code where the bank account is located (ISO 3166-1)
   * @param iban {String} the international bank account number
   * @param ownerName {String} the bank account holder name
   */
  var exports = function(bankAccountNumber, bankLocationId, bankName, countryCode, iban, ownerName) {
    var _this = this;

    _this['bankAccountNumber'] = bankAccountNumber;

    _this['bankLocationId'] = bankLocationId;
    _this['bankName'] = bankName;

    _this['countryCode'] = countryCode;
    _this['iban'] = iban;
    _this['ownerName'] = ownerName;

  };

  /**
   * Constructs a <code>BankAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankAccount} obj Optional instance to populate.
   * @return {module:model/BankAccount} The populated <code>BankAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bankAccountNumber')) {
        obj['bankAccountNumber'] = ApiClient.convertToType(data['bankAccountNumber'], 'String');
      }
      if (data.hasOwnProperty('bankCity')) {
        obj['bankCity'] = ApiClient.convertToType(data['bankCity'], 'String');
      }
      if (data.hasOwnProperty('bankLocationId')) {
        obj['bankLocationId'] = ApiClient.convertToType(data['bankLocationId'], 'String');
      }
      if (data.hasOwnProperty('bankName')) {
        obj['bankName'] = ApiClient.convertToType(data['bankName'], 'String');
      }
      if (data.hasOwnProperty('bic')) {
        obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('iban')) {
        obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
      }
      if (data.hasOwnProperty('ownerName')) {
        obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
      }
      if (data.hasOwnProperty('taxId')) {
        obj['taxId'] = ApiClient.convertToType(data['taxId'], 'String');
      }
    }
    return obj;
  }

  /**
   * the bank account number (without separators)
   * @member {String} bankAccountNumber
   */
  exports.prototype['bankAccountNumber'] = undefined;
  /**
   * the bank city
   * @member {String} bankCity
   */
  exports.prototype['bankCity'] = undefined;
  /**
   * the bank transit routing number, the field value is nil in most cases.
   * @member {String} bankLocationId
   */
  exports.prototype['bankLocationId'] = undefined;
  /**
   * the name of the bank
   * @member {String} bankName
   */
  exports.prototype['bankName'] = undefined;
  /**
   * the business identifier code
   * @member {String} bic
   */
  exports.prototype['bic'] = undefined;
  /**
   * the two letter country code where the bank account is located (ISO 3166-1)
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * the international bank account number
   * @member {String} iban
   */
  exports.prototype['iban'] = undefined;
  /**
   * the bank account holder name
   * @member {String} ownerName
   */
  exports.prototype['ownerName'] = undefined;
  /**
   * the bank account holder TAX id
   * @member {String} taxId
   */
  exports.prototype['taxId'] = undefined;


  /**
   * Returns the bank account number (without separators)
   * @return {String}
   */
  exports.prototype.getBankAccountNumber = function() {
    return this['bankAccountNumber'];
  }

  /**
   * Sets the bank account number (without separators)
   * @param {String} bankAccountNumber the bank account number (without separators)
   */
  exports.prototype.setBankAccountNumber = function(bankAccountNumber) {
    this['bankAccountNumber'] = bankAccountNumber;
  }


  /**
   * Returns the bank city
   * @return {String}
   */
  exports.prototype.getBankCity = function() {
    return this['bankCity'];
  }

  /**
   * Sets the bank city
   * @param {String} bankCity the bank city
   */
  exports.prototype.setBankCity = function(bankCity) {
    this['bankCity'] = bankCity;
  }


  /**
   * Returns the bank transit routing number, the field value is nil in most cases.
   * @return {String}
   */
  exports.prototype.getBankLocationId = function() {
    return this['bankLocationId'];
  }

  /**
   * Sets the bank transit routing number, the field value is nil in most cases.
   * @param {String} bankLocationId the bank transit routing number, the field value is nil in most cases.
   */
  exports.prototype.setBankLocationId = function(bankLocationId) {
    this['bankLocationId'] = bankLocationId;
  }


  /**
   * Returns the name of the bank
   * @return {String}
   */
  exports.prototype.getBankName = function() {
    return this['bankName'];
  }

  /**
   * Sets the name of the bank
   * @param {String} bankName the name of the bank
   */
  exports.prototype.setBankName = function(bankName) {
    this['bankName'] = bankName;
  }


  /**
   * Returns the business identifier code
   * @return {String}
   */
  exports.prototype.getBic = function() {
    return this['bic'];
  }

  /**
   * Sets the business identifier code
   * @param {String} bic the business identifier code
   */
  exports.prototype.setBic = function(bic) {
    this['bic'] = bic;
  }


  /**
   * Returns the two letter country code where the bank account is located (ISO 3166-1)
   * @return {String}
   */
  exports.prototype.getCountryCode = function() {
    return this['countryCode'];
  }

  /**
   * Sets the two letter country code where the bank account is located (ISO 3166-1)
   * @param {String} countryCode the two letter country code where the bank account is located (ISO 3166-1)
   */
  exports.prototype.setCountryCode = function(countryCode) {
    this['countryCode'] = countryCode;
  }


  /**
   * Returns the international bank account number
   * @return {String}
   */
  exports.prototype.getIban = function() {
    return this['iban'];
  }

  /**
   * Sets the international bank account number
   * @param {String} iban the international bank account number
   */
  exports.prototype.setIban = function(iban) {
    this['iban'] = iban;
  }


  /**
   * Returns the bank account holder name
   * @return {String}
   */
  exports.prototype.getOwnerName = function() {
    return this['ownerName'];
  }

  /**
   * Sets the bank account holder name
   * @param {String} ownerName the bank account holder name
   */
  exports.prototype.setOwnerName = function(ownerName) {
    this['ownerName'] = ownerName;
  }


  /**
   * Returns the bank account holder TAX id
   * @return {String}
   */
  exports.prototype.getTaxId = function() {
    return this['taxId'];
  }

  /**
   * Sets the bank account holder TAX id
   * @param {String} taxId the bank account holder TAX id
   */
  exports.prototype.setTaxId = function(taxId) {
    this['taxId'] = taxId;
  }



  return exports;
}));


