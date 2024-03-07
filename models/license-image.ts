/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Cookie } from './cookie';
import { CustomSizeDimensions } from './custom-size-dimensions';

/**
 * Data required to license an image
 * @export
 * @interface LicenseImage
 */
export interface LicenseImage {
    /**
     * 
     * @type {Cookie}
     * @memberof LicenseImage
     */
    'auth_cookie'?: Cookie;
    /**
     * 
     * @type {CustomSizeDimensions}
     * @memberof LicenseImage
     */
    'custom_dimensions'?: CustomSizeDimensions;
    /**
     * Set to true to acknowledge the editorial agreement
     * @type {boolean}
     * @memberof LicenseImage
     */
    'editorial_acknowledgement'?: boolean;
    /**
     * (Deprecated) Image format to download
     * @type {string}
     * @memberof LicenseImage
     */
    'format'?: LicenseImageFormatEnum;
    /**
     * Image ID
     * @type {string}
     * @memberof LicenseImage
     */
    'image_id': string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {object}
     * @memberof LicenseImage
     */
    'metadata'?: object;
    /**
     * For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34
     * @type {number}
     * @memberof LicenseImage
     */
    'price'?: number;
    /**
     * ID of the search that led to this licensing transaction
     * @type {string}
     * @memberof LicenseImage
     */
    'search_id'?: string;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof LicenseImage
     * @deprecated
     */
    'show_modal'?: boolean;
    /**
     * Image size to download
     * @type {string}
     * @memberof LicenseImage
     */
    'size'?: LicenseImageSizeEnum;
    /**
     * ID of the subscription to use for the download.
     * @type {string}
     * @memberof LicenseImage
     */
    'subscription_id'?: string;
    /**
     * (Deprecated)
     * @type {string}
     * @memberof LicenseImage
     * @deprecated
     */
    'verification_code'?: string;
}

type LicenseImageFormatEnum = 'jpg'
type LicenseImageSizeEnum = 'small' | 'medium' | 'huge' | 'custom'


