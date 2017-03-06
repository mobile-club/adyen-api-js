/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 18
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    root.AdyenApiJs.ErrorType = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class ErrorType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "internal"
     * @const
     */
    "internal": "internal",
    /**
     * value: "validation"
     * @const
     */
    "validation": "validation",
    /**
     * value: "security"
     * @const
     */
    "security": "security",
    /**
     * value: "configuration"
     * @const
     */
    "configuration": "configuration"  };

  /**
   * Returns a <code>ErrorType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ErrorType} The enum <code>ErrorType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


