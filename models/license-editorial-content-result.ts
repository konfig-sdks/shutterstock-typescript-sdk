/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Url } from './url';

/**
 * The response to a licensing request for editorial content
 * @export
 * @interface LicenseEditorialContentResult
 */
export interface LicenseEditorialContentResult {
    /**
     * For pre-paid plans, how many credits were used for the item license
     * @type {number}
     * @memberof LicenseEditorialContentResult
     */
    'allotment_charge'?: number;
    /**
     * 
     * @type {Url}
     * @memberof LicenseEditorialContentResult
     */
    'download'?: Url;
    /**
     * Editorial ID
     * @type {string}
     * @memberof LicenseEditorialContentResult
     */
    'editorial_id': string;
    /**
     * 
     * @type {string}
     * @memberof LicenseEditorialContentResult
     */
    'error'?: string;
}
