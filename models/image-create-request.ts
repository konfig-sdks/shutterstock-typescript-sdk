/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Request to upload an image
 * @export
 * @interface ImageCreateRequest
 */
export interface ImageCreateRequest {
    /**
     * A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
     * @type {string}
     * @memberof ImageCreateRequest
     */
    'base64_image': string;
}

