/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EditorialCoverItem } from './editorial-cover-item';

/**
 * Metadata about editorial livefeed
 * @export
 * @interface EditorialImageLivefeed
 */
export interface EditorialImageLivefeed {
    /**
     * 
     * @type {EditorialCoverItem}
     * @memberof EditorialImageLivefeed
     */
    'cover_item'?: EditorialCoverItem;
    /**
     * When the livefeed was initially created
     * @type {string}
     * @memberof EditorialImageLivefeed
     */
    'created_time'?: string;
    /**
     * Livefeed ID
     * @type {string}
     * @memberof EditorialImageLivefeed
     */
    'id': string;
    /**
     * Name of the livefeed
     * @type {string}
     * @memberof EditorialImageLivefeed
     */
    'name': string;
    /**
     * Total count of items in the livefeed
     * @type {number}
     * @memberof EditorialImageLivefeed
     */
    'total_item_count': number;
}

