/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EditorialLivefeed } from './editorial-livefeed';

/**
 * List of editorial livefeeds
 * @export
 * @interface EditorialImageLivefeedList
 */
export interface EditorialImageLivefeedList {
    /**
     * Editorial livefeeds
     * @type {Array<EditorialLivefeed>}
     * @memberof EditorialImageLivefeedList
     */
    'data': Array<EditorialLivefeed>;
    /**
     * Optional error message
     * @type {string}
     * @memberof EditorialImageLivefeedList
     */
    'message'?: string;
    /**
     * Current page of the response
     * @type {number}
     * @memberof EditorialImageLivefeedList
     */
    'page'?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof EditorialImageLivefeedList
     */
    'per_page'?: number;
    /**
     * Total count of all results
     * @type {number}
     * @memberof EditorialImageLivefeedList
     */
    'total_count': number;
}

