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
    define(['ApiClient', 'model/Address', 'model/BankAccount', 'model/Card', 'model/Name'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./BankAccount'), require('./Card'), require('./Name'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.RecurringDetail = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Address, root.AdyenApiJs.BankAccount, root.AdyenApiJs.Card, root.AdyenApiJs.Name);
  }
}(this, function(ApiClient, Address, BankAccount, Card, Name) {
  'use strict';




  /**
   * The RecurringDetail model module.
   * @module model/RecurringDetail
   * @version 1.30.4
   */

  /**
   * Constructs a new <code>RecurringDetail</code>.
   * @alias module:model/RecurringDetail
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>RecurringDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecurringDetail} obj Optional instance to populate.
   * @return {module:model/RecurringDetail} The populated <code>RecurringDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('card')) {
        obj['card'] = Card.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('billingAddress')) {
        obj['billingAddress'] = Address.constructFromObject(data['billingAddress']);
      }
      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], Object);
      }
      if (data.hasOwnProperty('shopperName')) {
        obj['shopperName'] = Name.constructFromObject(data['shopperName']);
      }
      if (data.hasOwnProperty('socialSecurityNumber')) {
        obj['socialSecurityNumber'] = ApiClient.convertToType(data['socialSecurityNumber'], 'String');
      }
      if (data.hasOwnProperty('recurringDetailReference')) {
        obj['recurringDetailReference'] = ApiClient.convertToType(data['recurringDetailReference'], 'String');
      }
      if (data.hasOwnProperty('bank')) {
        obj['bank'] = BankAccount.constructFromObject(data['bank']);
      }
      if (data.hasOwnProperty('alias')) {
        obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
      }
      if (data.hasOwnProperty('aliasType')) {
        obj['aliasType'] = ApiClient.convertToType(data['aliasType'], 'String');
      }
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
      }
      if (data.hasOwnProperty('paymentMethodVariant')) {
        obj['paymentMethodVariant'] = ApiClient.convertToType(data['paymentMethodVariant'], 'String');
      }
      if (data.hasOwnProperty('firstPspReference')) {
        obj['firstPspReference'] = ApiClient.convertToType(data['firstPspReference'], 'String');
      }
      if (data.hasOwnProperty('contractTypes')) {
        obj['contractTypes'] = ApiClient.convertToType(data['contractTypes'], ['String']);
      }
      if (data.hasOwnProperty('acquirer')) {
        obj['acquirer'] = ApiClient.convertToType(data['acquirer'], 'String');
      }
      if (data.hasOwnProperty('acquirerAccount')) {
        obj['acquirerAccount'] = ApiClient.convertToType(data['acquirerAccount'], 'String');
      }
    }
    return obj;
  }

  /**
   * An optional descriptive name for this recurring detail
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {module:model/Card} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Address} billingAddress
   */
  exports.prototype['billingAddress'] = undefined;
  /**
   * @member {Object} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * @member {module:model/Name} shopperName
   */
  exports.prototype['shopperName'] = undefined;
  /**
   * the shopper's social security number
   * @member {String} socialSecurityNumber
   */
  exports.prototype['socialSecurityNumber'] = undefined;
  /**
   * The reference that uniquely identifies the recurring detail
   * @member {String} recurringDetailReference
   */
  exports.prototype['recurringDetailReference'] = undefined;
  /**
   * @member {module:model/BankAccount} bank
   */
  exports.prototype['bank'] = undefined;
  /**
   * @member {String} alias
   */
  exports.prototype['alias'] = undefined;
  /**
   * @member {String} aliasType
   */
  exports.prototype['aliasType'] = undefined;
  /**
   * @member {String} variant
   */
  exports.prototype['variant'] = undefined;
  /**
   * @member {String} paymentMethodVariant
   */
  exports.prototype['paymentMethodVariant'] = undefined;
  /**
   * @member {String} firstPspReference
   */
  exports.prototype['firstPspReference'] = undefined;
  /**
   * @member {Array.<String>} contractTypes
   */
  exports.prototype['contractTypes'] = undefined;
  /**
   * @member {String} acquirer
   */
  exports.prototype['acquirer'] = undefined;
  /**
   * @member {String} acquirerAccount
   */
  exports.prototype['acquirerAccount'] = undefined;


  /**
   * Returns An optional descriptive name for this recurring detail
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets An optional descriptive name for this recurring detail
   * @param {String} name An optional descriptive name for this recurring detail
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getCreationDate = function() {
    return this['creationDate'];
  }

  /**
   * @param {Date} creationDate
   */
  exports.prototype.setCreationDate = function(creationDate) {
    this['creationDate'] = creationDate;
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
   * @return {Object}
   */
  exports.prototype.getAdditionalData = function() {
    return this['additionalData'];
  }

  /**
   * @param {Object} additionalData
   */
  exports.prototype.setAdditionalData = function(additionalData) {
    this['additionalData'] = additionalData;
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
   * Returns the shopper's social security number
   * @return {String}
   */
  exports.prototype.getSocialSecurityNumber = function() {
    return this['socialSecurityNumber'];
  }

  /**
   * Sets the shopper's social security number
   * @param {String} socialSecurityNumber the shopper's social security number
   */
  exports.prototype.setSocialSecurityNumber = function(socialSecurityNumber) {
    this['socialSecurityNumber'] = socialSecurityNumber;
  }


  /**
   * Returns The reference that uniquely identifies the recurring detail
   * @return {String}
   */
  exports.prototype.getRecurringDetailReference = function() {
    return this['recurringDetailReference'];
  }

  /**
   * Sets The reference that uniquely identifies the recurring detail
   * @param {String} recurringDetailReference The reference that uniquely identifies the recurring detail
   */
  exports.prototype.setRecurringDetailReference = function(recurringDetailReference) {
    this['recurringDetailReference'] = recurringDetailReference;
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
   * @return {String}
   */
  exports.prototype.getAlias = function() {
    return this['alias'];
  }

  /**
   * @param {String} alias
   */
  exports.prototype.setAlias = function(alias) {
    this['alias'] = alias;
  }


  /**
   * @return {String}
   */
  exports.prototype.getAliasType = function() {
    return this['aliasType'];
  }

  /**
   * @param {String} aliasType
   */
  exports.prototype.setAliasType = function(aliasType) {
    this['aliasType'] = aliasType;
  }


  /**
   * @return {String}
   */
  exports.prototype.getVariant = function() {
    return this['variant'];
  }

  /**
   * @param {String} variant
   */
  exports.prototype.setVariant = function(variant) {
    this['variant'] = variant;
  }


  /**
   * @return {String}
   */
  exports.prototype.getPaymentMethodVariant = function() {
    return this['paymentMethodVariant'];
  }

  /**
   * @param {String} paymentMethodVariant
   */
  exports.prototype.setPaymentMethodVariant = function(paymentMethodVariant) {
    this['paymentMethodVariant'] = paymentMethodVariant;
  }


  /**
   * @return {String}
   */
  exports.prototype.getFirstPspReference = function() {
    return this['firstPspReference'];
  }

  /**
   * @param {String} firstPspReference
   */
  exports.prototype.setFirstPspReference = function(firstPspReference) {
    this['firstPspReference'] = firstPspReference;
  }


  /**
   * @return {Array.<String>}
   */
  exports.prototype.getContractTypes = function() {
    return this['contractTypes'];
  }

  /**
   * @param {Array.<String>} contractTypes
   */
  exports.prototype.setContractTypes = function(contractTypes) {
    this['contractTypes'] = contractTypes;
  }


  /**
   * @return {String}
   */
  exports.prototype.getAcquirer = function() {
    return this['acquirer'];
  }

  /**
   * @param {String} acquirer
   */
  exports.prototype.setAcquirer = function(acquirer) {
    this['acquirer'] = acquirer;
  }


  /**
   * @return {String}
   */
  exports.prototype.getAcquirerAccount = function() {
    return this['acquirerAccount'];
  }

  /**
   * @param {String} acquirerAccount
   */
  exports.prototype.setAcquirerAccount = function(acquirerAccount) {
    this['acquirerAccount'] = acquirerAccount;
  }



  return exports;
}));


