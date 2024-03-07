/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ImageSearchResults } from './image-search-results';

/**
 * List of search results for each given query
 * @export
 * @interface BulkImageSearchResults
 */
export interface BulkImageSearchResults {
    /**
     * Unique identifier for the search request
     * @type {string}
     * @memberof BulkImageSearchResults
     */
    'bulk_search_id'?: string;
    /**
     * List of image search results
     * @type {Array<ImageSearchResults>}
     * @memberof BulkImageSearchResults
     */
    'results'?: Array<ImageSearchResults>;
}
