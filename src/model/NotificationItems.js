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
    define(['ApiClient', 'model/NotificationRequestItemDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NotificationRequestItemDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.NotificationItems = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.NotificationRequestItemDetails);
  }
}(this, function(ApiClient, NotificationRequestItemDetails) {
  'use strict';




  /**
   * The NotificationItems model module.
   * @module model/NotificationItems
   * @version 1.30.5
   */

  /**
   * Constructs a new <code>NotificationItems</code>.
   * @alias module:model/NotificationItems
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NotificationItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationItems} obj Optional instance to populate.
   * @return {module:model/NotificationItems} The populated <code>NotificationItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('NotificationRequestItem')) {
        obj['NotificationRequestItem'] = NotificationRequestItemDetails.constructFromObject(data['NotificationRequestItem']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NotificationRequestItemDetails} NotificationRequestItem
   */
  exports.prototype['NotificationRequestItem'] = undefined;


  /**
   * @return {module:model/NotificationRequestItemDetails}
   */
  exports.prototype.getNotificationRequestItem = function() {
    return this['NotificationRequestItem'];
  }

  /**
   * @param {module:model/NotificationRequestItemDetails} notificationRequestItem
   */
  exports.prototype.setNotificationRequestItem = function(notificationRequestItem) {
    this['NotificationRequestItem'] = notificationRequestItem;
  }



  return exports;
}));


