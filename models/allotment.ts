/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An allotment of credits as part of a subscription
 * @export
 * @interface Allotment
 */
export interface Allotment {
    /**
     * Number of credits remaining in the subscription
     * @type {number}
     * @memberof Allotment
     */
    'downloads_left'?: number;
    /**
     * Total number of credits available to this subscription
     * @type {number}
     * @memberof Allotment
     */
    'downloads_limit'?: number;
    /**
     * Date the subscription ends
     * @type {string}
     * @memberof Allotment
     */
    'end_time'?: string;
    /**
     * Date the subscription started
     * @type {string}
     * @memberof Allotment
     */
    'start_time'?: string;
}

