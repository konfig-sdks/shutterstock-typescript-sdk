/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AudioRenderTimelineSpanInstrumentGroup } from './audio-render-timeline-span-instrument-group';
import { AudioRenderTimelineSpanRegion } from './audio-render-timeline-span-region';
import { AudioRenderTimelineSpanTempoChanges } from './audio-render-timeline-span-tempo-changes';

/**
 * The beginning of a non-overlapping period of absolute time
 * @export
 * @interface AudioRenderTimelineSpan
 */
export interface AudioRenderTimelineSpan {
    /**
     * An identifier which must be unique within the parent span
     * @type {number}
     * @memberof AudioRenderTimelineSpan
     */
    'id'?: number;
    /**
     * An array of instrument_group objects that are used in this span
     * @type {Array<AudioRenderTimelineSpanInstrumentGroup>}
     * @memberof AudioRenderTimelineSpan
     */
    'instrument_groups'?: Array<AudioRenderTimelineSpanInstrumentGroup>;
    /**
     * An array of region objects within the span
     * @type {Array<AudioRenderTimelineSpanRegion>}
     * @memberof AudioRenderTimelineSpan
     */
    'regions'?: Array<AudioRenderTimelineSpanRegion>;
    /**
     * Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span
     * @type {string}
     * @memberof AudioRenderTimelineSpan
     */
    'span_type': AudioRenderTimelineSpanSpanTypeEnum;
    /**
     * The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo
     * @type {number}
     * @memberof AudioRenderTimelineSpan
     */
    'tempo'?: number;
    /**
     * Two or more inflection points in a tempo curve; the API creates a smoothly changing tempo by using a linear interpolation of the time between each tempo change
     * @type {Array<AudioRenderTimelineSpanTempoChanges>}
     * @memberof AudioRenderTimelineSpan
     */
    'tempo_changes'?: Array<AudioRenderTimelineSpanTempoChanges>;
    /**
     * The absolute time, in seconds, at which the span starts
     * @type {number}
     * @memberof AudioRenderTimelineSpan
     */
    'time': number;
}

type AudioRenderTimelineSpanSpanTypeEnum = 'metered' | 'unmetered'

