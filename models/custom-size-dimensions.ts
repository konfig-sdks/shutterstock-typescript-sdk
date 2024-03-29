/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A custom height or a custom width to resize the image to, but not both (experimental)
 * @export
 * @interface CustomSizeDimensions
 */
export interface CustomSizeDimensions {
    /**
     * Custom height to resize the image to
     * @type {number}
     * @memberof CustomSizeDimensions
     */
    'height'?: number;
    /**
     * Custom width to resize the image to
     * @type {number}
     * @memberof CustomSizeDimensions
     */
    'width'?: number;
}

