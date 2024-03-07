/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollectionItem } from './collection-item';

/**
 * Request to get a list of items in a collection
 * @export
 * @interface CollectionItemRequest
 */
export interface CollectionItemRequest {
    /**
     * List of items
     * @type {Array<CollectionItem>}
     * @memberof CollectionItemRequest
     */
    'items': Array<CollectionItem>;
}

