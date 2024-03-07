/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Cookie } from './cookie';

/**
 * Data required to license a video
 * @export
 * @interface LicenseVideo
 */
export interface LicenseVideo {
    /**
     * 
     * @type {Cookie}
     * @memberof LicenseVideo
     */
    'auth_cookie'?: Cookie;
    /**
     * Whether or not this item is editorial content
     * @type {boolean}
     * @memberof LicenseVideo
     */
    'editorial_acknowledgement'?: boolean;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {object}
     * @memberof LicenseVideo
     */
    'metadata'?: object;
    /**
     * Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners
     * @type {number}
     * @memberof LicenseVideo
     */
    'price'?: number;
    /**
     * ID of the search that led to this licensing event
     * @type {string}
     * @memberof LicenseVideo
     */
    'search_id'?: string;
    /**
     * (Deprecated)
     * @type {boolean}
     * @memberof LicenseVideo
     * @deprecated
     */
    'show_modal'?: boolean;
    /**
     * Size of the video being licensed
     * @type {string}
     * @memberof LicenseVideo
     */
    'size'?: LicenseVideoSizeEnum;
    /**
     * ID of the subscription used for this license
     * @type {string}
     * @memberof LicenseVideo
     */
    'subscription_id'?: string;
    /**
     * ID of the video being licensed
     * @type {string}
     * @memberof LicenseVideo
     */
    'video_id': string;
}

type LicenseVideoSizeEnum = 'web' | 'sd' | 'hd' | '4k'

