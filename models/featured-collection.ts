/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FeaturedCollectionCoverItem } from './featured-collection-cover-item';

/**
 * Metadata about a featured collection
 * @export
 * @interface FeaturedCollection
 */
export interface FeaturedCollection {
    /**
     * 
     * @type {FeaturedCollectionCoverItem}
     * @memberof FeaturedCollection
     */
    'cover_item'?: FeaturedCollectionCoverItem;
    /**
     * Date that the collection was created
     * @type {string}
     * @memberof FeaturedCollection
     */
    'created_time'?: string;
    /**
     * 
     * @type {FeaturedCollectionCoverItem}
     * @memberof FeaturedCollection
     */
    'hero_item'?: FeaturedCollectionCoverItem;
    /**
     * Collection ID
     * @type {string}
     * @memberof FeaturedCollection
     */
    'id': string;
    /**
     * Date that an item in the collection was last added or removed
     * @type {string}
     * @memberof FeaturedCollection
     */
    'items_updated_time'?: string;
    /**
     * Name of the collection
     * @type {string}
     * @memberof FeaturedCollection
     */
    'name': string;
    /**
     * Unique share url for the collection
     * @type {string}
     * @memberof FeaturedCollection
     */
    'share_url'?: string;
    /**
     * Total number of items in the collection
     * @type {number}
     * @memberof FeaturedCollection
     */
    'total_item_count': number;
    /**
     * Date that the collection was last modified
     * @type {string}
     * @memberof FeaturedCollection
     */
    'updated_time'?: string;
}

