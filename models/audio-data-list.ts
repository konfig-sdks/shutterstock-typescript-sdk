/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Audio } from './audio';

/**
 * List of tracks
 * @export
 * @interface AudioDataList
 */
export interface AudioDataList {
    /**
     * Tracks
     * @type {Array<Audio>}
     * @memberof AudioDataList
     */
    'data'?: Array<Audio>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<Error>}
     * @memberof AudioDataList
     */
    'errors'?: Array<Error>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof AudioDataList
     */
    'message'?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof AudioDataList
     */
    'page'?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof AudioDataList
     */
    'per_page'?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof AudioDataList
     */
    'total_count'?: number;
}
