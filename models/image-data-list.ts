/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Image } from './image';

/**
 * List of images
 * @export
 * @interface ImageDataList
 */
export interface ImageDataList {
    /**
     * Images
     * @type {Array<Image>}
     * @memberof ImageDataList
     */
    'data'?: Array<Image>;
    /**
     * Error list; appears only if there was an error
     * @type {Array<Error>}
     * @memberof ImageDataList
     */
    'errors'?: Array<Error>;
    /**
     * Server-generated message, if any
     * @type {string}
     * @memberof ImageDataList
     */
    'message'?: string;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof ImageDataList
     */
    'page'?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof ImageDataList
     */
    'per_page'?: number;
    /**
     * Total count of all results across all pages
     * @type {number}
     * @memberof ImageDataList
     */
    'total_count'?: number;
}

