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
    root.AdyenApiJs.NotificationResult = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NotificationResult model module.
   * @module model/NotificationResult
   * @version 1.30.2
   */

  /**
   * Constructs a new <code>NotificationResult</code>.
   * @alias module:model/NotificationResult
   * @class
   * @param notificationResponse {module:model/NotificationResult.NotificationResponseEnum} In case of success, we send back a [accepeted] response to confirm adyen that we accepeted the corresponding notification
   */
  var exports = function(notificationResponse) {
    var _this = this;

    _this['notificationResponse'] = notificationResponse;
  };

  /**
   * Constructs a <code>NotificationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotificationResult} obj Optional instance to populate.
   * @return {module:model/NotificationResult} The populated <code>NotificationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('notificationResponse')) {
        obj['notificationResponse'] = ApiClient.convertToType(data['notificationResponse'], 'String');
      }
    }
    return obj;
  }

  /**
   * In case of success, we send back a [accepeted] response to confirm adyen that we accepeted the corresponding notification
   * @member {module:model/NotificationResult.NotificationResponseEnum} notificationResponse
   */
  exports.prototype['notificationResponse'] = undefined;


  /**
   * Returns In case of success, we send back a [accepeted] response to confirm adyen that we accepeted the corresponding notification
   * @return {module:model/NotificationResult.NotificationResponseEnum}
   */
  exports.prototype.getNotificationResponse = function() {
    return this['notificationResponse'];
  }

  /**
   * Sets In case of success, we send back a [accepeted] response to confirm adyen that we accepeted the corresponding notification
   * @param {module:model/NotificationResult.NotificationResponseEnum} notificationResponse In case of success, we send back a [accepeted] response to confirm adyen that we accepeted the corresponding notification
   */
  exports.prototype.setNotificationResponse = function(notificationResponse) {
    this['notificationResponse'] = notificationResponse;
  }


  /**
   * Allowed values for the <code>notificationResponse</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NotificationResponseEnum = {
    /**
     * value: "[accepted]"
     * @const
     */
    "[accepted]": "[accepted]"  };


  return exports;
}));


