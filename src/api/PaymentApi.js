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
    define(['ApiClient', 'model/Error', 'model/ModificationRequest', 'model/ModificationResult', 'model/PaymentRequest', 'model/PaymentRequest3d', 'model/PaymentResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/ModificationRequest'), require('../model/ModificationResult'), require('../model/PaymentRequest'), require('../model/PaymentRequest3d'), require('../model/PaymentResult'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.PaymentApi = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Error, root.AdyenApiJs.ModificationRequest, root.AdyenApiJs.ModificationResult, root.AdyenApiJs.PaymentRequest, root.AdyenApiJs.PaymentRequest3d, root.AdyenApiJs.PaymentResult);
  }
}(this, function(ApiClient, Error, ModificationRequest, ModificationResult, PaymentRequest, PaymentRequest3d, PaymentResult) {
  'use strict';

  /**
   * Payment service.
   * @module api/PaymentApi
   * @version 1.30.4
   */

  /**
   * Constructs a new PaymentApi. 
   * @alias module:api/PaymentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Increase or decrease the authorised amount
     * Allows you to increase or decrease the authorised amount after the initial authorisation has taken place. This functionality enables tipping, improving the chances your authorisation will be valid, charging the shopper when they have already left the merchant premises, etc.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModificationResult} and HTTP response
     */
    this.adjustAuthorisationWithHttpInfo = function(modificationRequest) {
      var postBody = modificationRequest;

      // verify the required parameter 'modificationRequest' is set
      if (modificationRequest === undefined || modificationRequest === null) {
        throw new Error("Missing the required parameter 'modificationRequest' when calling adjustAuthorisation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModificationResult;

      return this.apiClient.callApi(
        '/Payment/v30/adjustAuthorisation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Increase or decrease the authorised amount
     * Allows you to increase or decrease the authorised amount after the initial authorisation has taken place. This functionality enables tipping, improving the chances your authorisation will be valid, charging the shopper when they have already left the merchant premises, etc.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModificationResult}
     */
    this.adjustAuthorisation = function(modificationRequest) {
      return this.adjustAuthorisationWithHttpInfo(modificationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a payment authorisation
     * Creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later. While for cards an authorised payment can be captured later, non-card methods typically don&#39;t support this and will automatically capture as part of the authorisation.
     * @param {module:model/PaymentRequest} paymentRequest The Payment Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentResult} and HTTP response
     */
    this.authoriseWithHttpInfo = function(paymentRequest) {
      var postBody = paymentRequest;

      // verify the required parameter 'paymentRequest' is set
      if (paymentRequest === undefined || paymentRequest === null) {
        throw new Error("Missing the required parameter 'paymentRequest' when calling authorise");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentResult;

      return this.apiClient.callApi(
        '/Payment/v30/authorise', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates a payment authorisation
     * Creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later. While for cards an authorised payment can be captured later, non-card methods typically don&#39;t support this and will automatically capture as part of the authorisation.
     * @param {module:model/PaymentRequest} paymentRequest The Payment Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentResult}
     */
    this.authorise = function(paymentRequest) {
      return this.authoriseWithHttpInfo(paymentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Completes a 3-D Secure payment authorisation
     * For an authenticated 3-D secure session, creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later.
     * @param {module:model/PaymentRequest3d} paymentRequest3d The Payment Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentResult} and HTTP response
     */
    this.authorise3dWithHttpInfo = function(paymentRequest3d) {
      var postBody = paymentRequest3d;

      // verify the required parameter 'paymentRequest3d' is set
      if (paymentRequest3d === undefined || paymentRequest3d === null) {
        throw new Error("Missing the required parameter 'paymentRequest3d' when calling authorise3d");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PaymentResult;

      return this.apiClient.callApi(
        '/Payment/v30/authorise3d', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Completes a 3-D Secure payment authorisation
     * For an authenticated 3-D secure session, creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later.
     * @param {module:model/PaymentRequest3d} paymentRequest3d The Payment Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentResult}
     */
    this.authorise3d = function(paymentRequest3d) {
      return this.authorise3dWithHttpInfo(paymentRequest3d)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancels a payment authorisation
     * Cancels the authorisation hold on a payment, returning a unique reference for this request.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModificationResult} and HTTP response
     */
    this.cancelWithHttpInfo = function(modificationRequest) {
      var postBody = modificationRequest;

      // verify the required parameter 'modificationRequest' is set
      if (modificationRequest === undefined || modificationRequest === null) {
        throw new Error("Missing the required parameter 'modificationRequest' when calling cancel");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModificationResult;

      return this.apiClient.callApi(
        '/Payment/v30/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancels a payment authorisation
     * Cancels the authorisation hold on a payment, returning a unique reference for this request.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModificationResult}
     */
    this.cancel = function(modificationRequest) {
      return this.cancelWithHttpInfo(modificationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Disable a stored payment detail
     * Performs a \&quot;cancel\&quot; on a payment if it has not yet been captured or a \&quot;refund\&quot; if it has already been captured. This is useful when it is not certain if the payment has been captured yet (e.g. when using auto-capture).
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModificationResult} and HTTP response
     */
    this.cancelOrRefundWithHttpInfo = function(modificationRequest) {
      var postBody = modificationRequest;

      // verify the required parameter 'modificationRequest' is set
      if (modificationRequest === undefined || modificationRequest === null) {
        throw new Error("Missing the required parameter 'modificationRequest' when calling cancelOrRefund");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModificationResult;

      return this.apiClient.callApi(
        '/Payment/v30/cancelOrRefund', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Disable a stored payment detail
     * Performs a \&quot;cancel\&quot; on a payment if it has not yet been captured or a \&quot;refund\&quot; if it has already been captured. This is useful when it is not certain if the payment has been captured yet (e.g. when using auto-capture).
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModificationResult}
     */
    this.cancelOrRefund = function(modificationRequest) {
      return this.cancelOrRefundWithHttpInfo(modificationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Captures a payment authorisation
     * Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it&#39;s also possible to capture a smaller amount which results in cancelling the remaining authorisation balance. Payment methods which automatically capture as part of authorisation don&#39;t need to be captured, but submitting a capture request on these transactions will not result in double charges.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModificationResult} and HTTP response
     */
    this.captureWithHttpInfo = function(modificationRequest) {
      var postBody = modificationRequest;

      // verify the required parameter 'modificationRequest' is set
      if (modificationRequest === undefined || modificationRequest === null) {
        throw new Error("Missing the required parameter 'modificationRequest' when calling capture");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModificationResult;

      return this.apiClient.callApi(
        '/Payment/v30/capture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Captures a payment authorisation
     * Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it&#39;s also possible to capture a smaller amount which results in cancelling the remaining authorisation balance. Payment methods which automatically capture as part of authorisation don&#39;t need to be captured, but submitting a capture request on these transactions will not result in double charges.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModificationResult}
     */
    this.capture = function(modificationRequest) {
      return this.captureWithHttpInfo(modificationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Refunds a payment
     * Refunds a payment which has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn&#39;t exceed the captured amount. Payments which have been authorised, but not captured cannot be refunded, use the \&quot;cancel\&quot; method instead.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ModificationResult} and HTTP response
     */
    this.refundWithHttpInfo = function(modificationRequest) {
      var postBody = modificationRequest;

      // verify the required parameter 'modificationRequest' is set
      if (modificationRequest === undefined || modificationRequest === null) {
        throw new Error("Missing the required parameter 'modificationRequest' when calling refund");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['auth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModificationResult;

      return this.apiClient.callApi(
        '/Payment/v30/refund', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Refunds a payment
     * Refunds a payment which has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn&#39;t exceed the captured amount. Payments which have been authorised, but not captured cannot be refunded, use the \&quot;cancel\&quot; method instead.
     * @param {module:model/ModificationRequest} modificationRequest The Modification Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ModificationResult}
     */
    this.refund = function(modificationRequest) {
      return this.refundWithHttpInfo(modificationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
