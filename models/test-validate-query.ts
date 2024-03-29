/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Validation results
 * @export
 * @interface TestValidateQuery
 */
export interface TestValidateQuery {
    /**
     * Integer ID that was passed in the request
     * @type {number}
     * @memberof TestValidateQuery
     */
    'id': number;
    /**
     * List of tags that were passed in the request
     * @type {Array<string>}
     * @memberof TestValidateQuery
     */
    'tag'?: Array<string>;
}

