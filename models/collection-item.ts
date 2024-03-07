/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Metadata about an item that is part of a collection
 * @export
 * @interface CollectionItem
 */
export interface CollectionItem {
    /**
     * The date the item was added to the collection
     * @type {string}
     * @memberof CollectionItem
     */
    'added_time'?: string;
    /**
     * ID of the item
     * @type {string}
     * @memberof CollectionItem
     */
    'id': string;
    /**
     * The media type of the item, such as image, video, or audio
     * @type {string}
     * @memberof CollectionItem
     */
    'media_type'?: string;
}
