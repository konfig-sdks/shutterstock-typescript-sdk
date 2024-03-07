/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Instrument } from './instrument';

/**
 * Image search results
 * @export
 * @interface InstrumentsListResult
 */
export interface InstrumentsListResult {
    /**
     * List of instrumnets
     * @type {Array<Instrument>}
     * @memberof InstrumentsListResult
     */
    'data'?: Array<Instrument>;
    /**
     * Current page that is returned
     * @type {number}
     * @memberof InstrumentsListResult
     */
    'page'?: number;
    /**
     * Number of results per page
     * @type {number}
     * @memberof InstrumentsListResult
     */
    'per_page'?: number;
}
