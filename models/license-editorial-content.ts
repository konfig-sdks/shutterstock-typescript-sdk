/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Individual editorial content to license
 * @export
 * @interface LicenseEditorialContent
 */
export interface LicenseEditorialContent {
    /**
     * Editorial ID
     * @type {string}
     * @memberof LicenseEditorialContent
     */
    'editorial_id': string;
    /**
     * License agreement to use for licensing
     * @type {string}
     * @memberof LicenseEditorialContent
     */
    'license': string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {object}
     * @memberof LicenseEditorialContent
     */
    'metadata'?: object;
    /**
     * Asset size to download
     * @type {string}
     * @memberof LicenseEditorialContent
     */
    'size'?: LicenseEditorialContentSizeEnum;
}

type LicenseEditorialContentSizeEnum = 'small' | 'medium' | 'original'

