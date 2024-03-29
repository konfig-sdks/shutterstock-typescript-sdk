/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ISOCountryCode } from './isocountry-code';
import { LicenseEditorialContent } from './license-editorial-content';

/**
 * License editorial content request
 * @export
 * @interface LicenseEditorialContentRequest
 */
export interface LicenseEditorialContentRequest {
    /**
     * 
     * @type {ISOCountryCode}
     * @memberof LicenseEditorialContentRequest
     */
    'country': ISOCountryCode;
    /**
     * Editorial content to license
     * @type {Array<LicenseEditorialContent>}
     * @memberof LicenseEditorialContentRequest
     */
    'editorial': Array<LicenseEditorialContent>;
}

