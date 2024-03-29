/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LicenseAudioResult } from './license-audio-result';

/**
 * List of audio license results
 * @export
 * @interface LicenseAudioResultDataList
 */
export interface LicenseAudioResultDataList {
    /**
     * License results
     * @type {Array<LicenseAudioResult>}
     * @memberof LicenseAudioResultDataList
     */
    'data'?: Array<LicenseAudioResult>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<Error>}
     * @memberof LicenseAudioResultDataList
     */
    'errors'?: Array<Error>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof LicenseAudioResultDataList
     */
    'message'?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof LicenseAudioResultDataList
     */
    'page'?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof LicenseAudioResultDataList
     */
    'per_page'?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof LicenseAudioResultDataList
     */
    'total_count'?: number;
}

