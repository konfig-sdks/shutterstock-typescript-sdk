/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The response to a request for keyword analysis
 * @export
 * @interface SearchEntitiesResponse
 */
export interface SearchEntitiesResponse {
    /**
     * The top keywords from the submitted text
     * @type {Array<string>}
     * @memberof SearchEntitiesResponse
     */
    'keywords'?: Array<string>;
}
