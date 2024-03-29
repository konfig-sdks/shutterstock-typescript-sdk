/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EditorialUpdatedContent } from './editorial-updated-content';

/**
 * Editorial updated results
 * @export
 * @interface EditorialUpdatedResults
 */
export interface EditorialUpdatedResults {
    /**
     * Editorial updated items
     * @type {Array<EditorialUpdatedContent>}
     * @memberof EditorialUpdatedResults
     */
    'data': Array<EditorialUpdatedContent>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialUpdatedResults
     */
    'message'?: string;
    /**
     * Cursor value that represents the next page of results
     * @type {string}
     * @memberof EditorialUpdatedResults
     */
    'next'?: string;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialUpdatedResults
     */
    'per_page'?: number;
    /**
     * Cursor value that represents the previous page of results
     * @type {string}
     * @memberof EditorialUpdatedResults
     */
    'prev'?: string;
}

