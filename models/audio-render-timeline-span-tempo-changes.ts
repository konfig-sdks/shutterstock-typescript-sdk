/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change
 * @export
 * @interface AudioRenderTimelineSpanTempoChanges
 */
export interface AudioRenderTimelineSpanTempoChanges {
    /**
     * The tempo, in beats per minute, active at this time
     * @type {number}
     * @memberof AudioRenderTimelineSpanTempoChanges
     */
    'tempo': number;
    /**
     * The time, in seconds, at which the tempo exists
     * @type {number}
     * @memberof AudioRenderTimelineSpanTempoChanges
     */
    'time': number;
}

