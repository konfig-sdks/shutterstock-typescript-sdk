/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Image size information
 * @export
 * @interface ImageSizeDetails
 */
export interface ImageSizeDetails {
    /**
     * Display name of this image size
     * @type {string}
     * @memberof ImageSizeDetails
     */
    'display_name'?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageSizeDetails
     */
    'dpi'?: number;
    /**
     * File size (in bytes) of this image size
     * @type {number}
     * @memberof ImageSizeDetails
     */
    'file_size'?: number;
    /**
     * Format of this image size
     * @type {string}
     * @memberof ImageSizeDetails
     */
    'format'?: string;
    /**
     * Height of this image size
     * @type {number}
     * @memberof ImageSizeDetails
     */
    'height'?: number;
    /**
     * Whether or not this image can be licensed in this image size
     * @type {boolean}
     * @memberof ImageSizeDetails
     */
    'is_licensable'?: boolean;
    /**
     * Width of this image size
     * @type {number}
     * @memberof ImageSizeDetails
     */
    'width'?: number;
}

