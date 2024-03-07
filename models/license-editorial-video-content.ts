/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Individual editorial video content to license
 * @export
 * @interface LicenseEditorialVideoContent
 */
export interface LicenseEditorialVideoContent {
    /**
     * Editorial ID
     * @type {string}
     * @memberof LicenseEditorialVideoContent
     */
    'editorial_id': string;
    /**
     * License agreement to use for licensing
     * @type {string}
     * @memberof LicenseEditorialVideoContent
     */
    'license': LicenseEditorialVideoContentLicenseEnum;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     * @type {object}
     * @memberof LicenseEditorialVideoContent
     */
    'metadata'?: object;
    /**
     * Asset size to download
     * @type {string}
     * @memberof LicenseEditorialVideoContent
     */
    'size'?: LicenseEditorialVideoContentSizeEnum;
}

type LicenseEditorialVideoContentLicenseEnum = 'premier_editorial_video_digital_only' | 'premier_editorial_video_all_media' | 'premier_editorial_video_all_media_single_territory' | 'premier_editorial_video_comp'
type LicenseEditorialVideoContentSizeEnum = 'original'


