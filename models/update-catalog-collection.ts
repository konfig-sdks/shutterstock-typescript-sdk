/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UpdateCatalogCollectionCoverAsset } from './update-catalog-collection-cover-asset';

/**
 * 
 * @export
 * @interface UpdateCatalogCollection
 */
export interface UpdateCatalogCollection {
    /**
     * 
     * @type {UpdateCatalogCollectionCoverAsset}
     * @memberof UpdateCatalogCollection
     */
    'cover_asset'?: UpdateCatalogCollectionCoverAsset;
    /**
     * 
     * @type {string}
     * @memberof UpdateCatalogCollection
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCatalogCollection
     */
    'visibility'?: UpdateCatalogCollectionVisibilityEnum;
}

type UpdateCatalogCollectionVisibilityEnum = 'private' | 'public'


