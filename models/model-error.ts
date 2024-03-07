/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Error object
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * The error code of this error
     * @type {string}
     * @memberof ModelError
     */
    'code'?: string;
    /**
     * Debugging information about the error
     * @type {string}
     * @memberof ModelError
     */
    'data'?: string;
    /**
     * A list of items that produced the error
     * @type {Array<object>}
     * @memberof ModelError
     */
    'items'?: Array<object>;
    /**
     * Specific details about this error
     * @type {string}
     * @memberof ModelError
     */
    'message': string;
    /**
     * Internal code reference to the source of the error
     * @type {string}
     * @memberof ModelError
     */
    'path'?: string;
}
