/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Image } from './image';
import { Insights } from './insights';

/**
 * Image search results
 * @export
 * @interface ImageSearchResults
 */
export interface ImageSearchResults {
    /**
     * List of images
     * @type {Array<Image>}
     * @memberof ImageSearchResults
     */
    'data': Array<Image>;
    /**
     * 
     * @type {Insights}
     * @memberof ImageSearchResults
     */
    'insights'?: Insights;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof ImageSearchResults
     */
    'message'?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof ImageSearchResults
     */
    'page'?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof ImageSearchResults
     */
    'per_page'?: number;
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof ImageSearchResults
     */
    'search_id': string;
    /**
     * Returns information if search phrase has potentially been mistyped or another query would lead to better search results
     * @type {object}
     * @memberof ImageSearchResults
     */
    'spellcheck_info'?: object;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof ImageSearchResults
     */
    'total_count': number;
}

