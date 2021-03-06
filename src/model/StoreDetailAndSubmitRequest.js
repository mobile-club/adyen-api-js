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
    define(['ApiClient', 'model/Address', 'model/Amount', 'model/BankAccount', 'model/Card', 'model/Name', 'model/PayoutEntityType', 'model/Recurring'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Amount'), require('./BankAccount'), require('./Card'), require('./Name'), require('./PayoutEntityType'), require('./Recurring'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.StoreDetailAndSubmitRequest = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Address, root.AdyenApiJs.Amount, root.AdyenApiJs.BankAccount, root.AdyenApiJs.Card, root.AdyenApiJs.Name, root.AdyenApiJs.PayoutEntityType, root.AdyenApiJs.Recurring);
  }
}(this, function(ApiClient, Address, Amount, BankAccount, Card, Name, PayoutEntityType, Recurring) {
  'use strict';




  /**
   * The StoreDetailAndSubmitRequest model module.
   * @module model/StoreDetailAndSubmitRequest
   * @version 1.30.5
   */

  /**
   * Constructs a new <code>StoreDetailAndSubmitRequest</code>.
   * @alias module:model/StoreDetailAndSubmitRequest
   * @class
   * @param amount {module:model/Amount} 
   * @param entityType {module:model/PayoutEntityType} 
   * @param merchantAccount {String} the merchant account which will be used for processing this request
   * @param nationality {String} The shopper's nationality, A valid value is an ISO 2-character country code (e.g. 'NL').
   * @param recurring {module:model/Recurring} 
   * @param reference {String} the reference assigned to the payment
   * @param shopperEmail {String} the email address of the shopper / customer
   * @param shopperName {module:model/Name} 
   * @param shopperReference {String} a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   */
  var exports = function(amount, entityType, merchantAccount, nationality, recurring, reference, shopperEmail, shopperName, shopperReference) {
    var _this = this;


    _this['amount'] = amount;




    _this['entityType'] = entityType;

    _this['merchantAccount'] = merchantAccount;
    _this['nationality'] = nationality;
    _this['recurring'] = recurring;
    _this['reference'] = reference;

    _this['shopperEmail'] = shopperEmail;
    _this['shopperName'] = shopperName;
    _this['shopperReference'] = shopperReference;

  };

  /**
   * Constructs a <code>StoreDetailAndSubmitRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreDetailAndSubmitRequest} obj Optional instance to populate.
   * @return {module:model/StoreDetailAndSubmitRequest} The populated <code>StoreDetailAndSubmitRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], Object);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Amount.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = BankAccount.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = Address.constructFromObject(data['billingAddress']);
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = Card.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('dateOfBirth')) {
        obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'Date');
      }
      if (data.hasOwnProperty('entityType')) {
        obj['entityType'] = PayoutEntityType.constructFromObject(data['entityType']);
      }
      if (data.hasOwnProperty('fraudOffset')) {
        obj['fraudOffset'] = ApiClient.convertToType(data['fraudOffset'], 'Number');
      }
      if (data.hasOwnProperty('merchantAccount')) {
        obj['merchantAccount'] = ApiClient.convertToType(data['merchantAccount'], 'String');
      }
      if (data.hasOwnProperty('nationality')) {
        obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
      }
      if (data.hasOwnProperty('recurring')) {
        obj['recurring'] = Recurring.constructFromObject(data['recurring']);
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('selectedBrand')) {
        obj['selectedBrand'] = ApiClient.convertToType(data['selectedBrand'], 'String');
      }
      if (data.hasOwnProperty('shopperEmail')) {
        obj['shopperEmail'] = ApiClient.convertToType(data['shopperEmail'], 'String');
      }
      if (data.hasOwnProperty('shopperName')) {
        obj['shopperName'] = Name.constructFromObject(data['shopperName']);
      }
      if (data.hasOwnProperty('shopperReference')) {
        obj['shopperReference'] = ApiClient.convertToType(data['shopperReference'], 'String');
      }
      if (data.hasOwnProperty('shopperStatement')) {
        obj['shopperStatement'] = ApiClient.convertToType(data['shopperStatement'], 'String');
      }
    }
    return obj;
  }

  /**
   * a map of name/value pairs for passing in additional/industry-specific data
   * @member {Object} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * @member {module:model/Amount} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {module:model/BankAccount} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {module:model/Address} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
  /**
   * @member {module:model/Card} card
   */
  exports.prototype['card'] = undefined;
  /**
   * the shopper's date of birth
   * @member {Date} dateOfBirth
   */
  exports.prototype['dateOfBirth'] = undefined;
  /**
   * @member {module:model/PayoutEntityType} entityType
   */
  exports.prototype['entityType'] = undefined;
  /**
   * the offset that is added to the normal fraud score (positive or negative)
   * @member {Number} fraudOffset
   */
  exports.prototype['fraudOffset'] = undefined;
  /**
   * the merchant account which will be used for processing this request
   * @member {String} merchantAccount
   */
  exports.prototype['merchantAccount'] = undefined;
  /**
   * The shopper's nationality, A valid value is an ISO 2-character country code (e.g. 'NL').
   * @member {String} nationality
   */
  exports.prototype['nationality'] = undefined;
  /**
   * @member {module:model/Recurring} recurring
   */
  exports.prototype['recurring'] = undefined;
  /**
   * the reference assigned to the payment
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * The name of the brand to make a payout to. For Paysafecard it must be set to paysafecard.
   * @member {String} selectedBrand
   */
  exports.prototype['selectedBrand'] = undefined;
  /**
   * the email address of the shopper / customer
   * @member {String} shopperEmail
   */
  exports.prototype['shopperEmail'] = undefined;
  /**
   * @member {module:model/Name} shopperName
   */
  exports.prototype['shopperName'] = undefined;
  /**
   * a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @member {String} shopperReference
   */
  exports.prototype['shopperReference'] = undefined;
  /**
   * the text to appear on the shopper's statement
   * @member {String} shopperStatement
   */
  exports.prototype['shopperStatement'] = undefined;


  /**
   * Returns a map of name/value pairs for passing in additional/industry-specific data
   * @return {Object}
   */
  exports.prototype.getAdditionalData = function() {
    return this['additionalData'];
  }

  /**
   * Sets a map of name/value pairs for passing in additional/industry-specific data
   * @param {Object} additionalData a map of name/value pairs for passing in additional/industry-specific data
   */
  exports.prototype.setAdditionalData = function(additionalData) {
    this['additionalData'] = additionalData;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getAmount = function() {
    return this['amount'];
  }

  /**
   * @param {module:model/Amount} amount
   */
  exports.prototype.setAmount = function(amount) {
    this['amount'] = amount;
  }


  /**
   * @return {module:model/BankAccount}
   */
  exports.prototype.getBank = function() {
    return this['bank'];
  }

  /**
   * @param {module:model/BankAccount} bank
   */
  exports.prototype.setBank = function(bank) {
    this['bank'] = bank;
  }


  /**
   * @return {module:model/Address}
   */
  exports.prototype.getBillingAddress = function() {
    return this['billingAddress'];
  }

  /**
   * @param {module:model/Address} billingAddress
   */
  exports.prototype.setBillingAddress = function(billingAddress) {
    this['billingAddress'] = billingAddress;
  }


  /**
   * @return {module:model/Card}
   */
  exports.prototype.getCard = function() {
    return this['card'];
  }

  /**
   * @param {module:model/Card} card
   */
  exports.prototype.setCard = function(card) {
    this['card'] = card;
  }


  /**
   * Returns the shopper's date of birth
   * @return {Date}
   */
  exports.prototype.getDateOfBirth = function() {
    return this['dateOfBirth'];
  }

  /**
   * Sets the shopper's date of birth
   * @param {Date} dateOfBirth the shopper's date of birth
   */
  exports.prototype.setDateOfBirth = function(dateOfBirth) {
    this['dateOfBirth'] = dateOfBirth;
  }


  /**
   * @return {module:model/PayoutEntityType}
   */
  exports.prototype.getEntityType = function() {
    return this['entityType'];
  }

  /**
   * @param {module:model/PayoutEntityType} entityType
   */
  exports.prototype.setEntityType = function(entityType) {
    this['entityType'] = entityType;
  }


  /**
   * Returns the offset that is added to the normal fraud score (positive or negative)
   * @return {Number}
   */
  exports.prototype.getFraudOffset = function() {
    return this['fraudOffset'];
  }

  /**
   * Sets the offset that is added to the normal fraud score (positive or negative)
   * @param {Number} fraudOffset the offset that is added to the normal fraud score (positive or negative)
   */
  exports.prototype.setFraudOffset = function(fraudOffset) {
    this['fraudOffset'] = fraudOffset;
  }


  /**
   * Returns the merchant account which will be used for processing this request
   * @return {String}
   */
  exports.prototype.getMerchantAccount = function() {
    return this['merchantAccount'];
  }

  /**
   * Sets the merchant account which will be used for processing this request
   * @param {String} merchantAccount the merchant account which will be used for processing this request
   */
  exports.prototype.setMerchantAccount = function(merchantAccount) {
    this['merchantAccount'] = merchantAccount;
  }


  /**
   * Returns The shopper's nationality, A valid value is an ISO 2-character country code (e.g. 'NL').
   * @return {String}
   */
  exports.prototype.getNationality = function() {
    return this['nationality'];
  }

  /**
   * Sets The shopper's nationality, A valid value is an ISO 2-character country code (e.g. 'NL').
   * @param {String} nationality The shopper's nationality, A valid value is an ISO 2-character country code (e.g. 'NL').
   */
  exports.prototype.setNationality = function(nationality) {
    this['nationality'] = nationality;
  }


  /**
   * @return {module:model/Recurring}
   */
  exports.prototype.getRecurring = function() {
    return this['recurring'];
  }

  /**
   * @param {module:model/Recurring} recurring
   */
  exports.prototype.setRecurring = function(recurring) {
    this['recurring'] = recurring;
  }


  /**
   * Returns the reference assigned to the payment
   * @return {String}
   */
  exports.prototype.getReference = function() {
    return this['reference'];
  }

  /**
   * Sets the reference assigned to the payment
   * @param {String} reference the reference assigned to the payment
   */
  exports.prototype.setReference = function(reference) {
    this['reference'] = reference;
  }


  /**
   * Returns The name of the brand to make a payout to. For Paysafecard it must be set to paysafecard.
   * @return {String}
   */
  exports.prototype.getSelectedBrand = function() {
    return this['selectedBrand'];
  }

  /**
   * Sets The name of the brand to make a payout to. For Paysafecard it must be set to paysafecard.
   * @param {String} selectedBrand The name of the brand to make a payout to. For Paysafecard it must be set to paysafecard.
   */
  exports.prototype.setSelectedBrand = function(selectedBrand) {
    this['selectedBrand'] = selectedBrand;
  }


  /**
   * Returns the email address of the shopper / customer
   * @return {String}
   */
  exports.prototype.getShopperEmail = function() {
    return this['shopperEmail'];
  }

  /**
   * Sets the email address of the shopper / customer
   * @param {String} shopperEmail the email address of the shopper / customer
   */
  exports.prototype.setShopperEmail = function(shopperEmail) {
    this['shopperEmail'] = shopperEmail;
  }


  /**
   * @return {module:model/Name}
   */
  exports.prototype.getShopperName = function() {
    return this['shopperName'];
  }

  /**
   * @param {module:model/Name} shopperName
   */
  exports.prototype.setShopperName = function(shopperName) {
    this['shopperName'] = shopperName;
  }


  /**
   * Returns a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @return {String}
   */
  exports.prototype.getShopperReference = function() {
    return this['shopperReference'];
  }

  /**
   * Sets a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   * @param {String} shopperReference a reference you use to uniquely identify the shopper (e.g. user ID or account ID)
   */
  exports.prototype.setShopperReference = function(shopperReference) {
    this['shopperReference'] = shopperReference;
  }


  /**
   * Returns the text to appear on the shopper's statement
   * @return {String}
   */
  exports.prototype.getShopperStatement = function() {
    return this['shopperStatement'];
  }

  /**
   * Sets the text to appear on the shopper's statement
   * @param {String} shopperStatement the text to appear on the shopper's statement
   */
  exports.prototype.setShopperStatement = function(shopperStatement) {
    this['shopperStatement'] = shopperStatement;
  }



  return exports;
}));


