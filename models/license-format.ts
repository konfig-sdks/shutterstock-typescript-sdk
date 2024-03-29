/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Description of a license
 * @export
 * @interface LicenseFormat
 */
export interface LicenseFormat {
    /**
     * Description of the license
     * @type {string}
     * @memberof LicenseFormat
     */
    'description'?: string;
    /**
     * Format or extension of the media, such as mpeg for videos or jpeg for images
     * @type {string}
     * @memberof LicenseFormat
     */
    'format'?: string;
    /**
     * Media type of the license
     * @type {string}
     * @memberof LicenseFormat
     */
    'media_type'?: LicenseFormatMediaTypeEnum;
    /**
     * Width of the media, in pixels, allowed by this license
     * @type {number}
     * @memberof LicenseFormat
     */
    'min_resolution'?: number;
    /**
     * Keyword that details the size of the media, such as hd or sd for video, huge or vector for images
     * @type {string}
     * @memberof LicenseFormat
     */
    'size'?: string;
}

type LicenseFormatMediaTypeEnum = 'image' | 'video' | 'audio' | 'editorial'


