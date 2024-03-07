/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Video } from './video';

/**
 * Video search results
 * @export
 * @interface VideoSearchResults
 */
export interface VideoSearchResults {
    /**
     * List of videos
     * @type {Array<Video>}
     * @memberof VideoSearchResults
     */
    'data': Array<Video>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof VideoSearchResults
     */
    'message'?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof VideoSearchResults
     */
    'page'?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof VideoSearchResults
     */
    'per_page'?: number;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof VideoSearchResults
     */
    'search_id': string;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof VideoSearchResults
     */
    'total_count': number;
}

