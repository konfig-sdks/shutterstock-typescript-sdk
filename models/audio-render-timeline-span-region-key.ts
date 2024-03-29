/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The key signature active at the beginning of the region
 * @export
 * @interface AudioRenderTimelineSpanRegionKey
 */
export interface AudioRenderTimelineSpanRegionKey {
    /**
     * A text representation of the accidental; if this field is specified, the tonic_note field should also be specified
     * @type {string}
     * @memberof AudioRenderTimelineSpanRegionKey
     */
    'tonic_accidental'?: AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum;
    /**
     * A text representation of the musical note; if this field is specified, the tonic_accidental field should also be specified
     * @type {string}
     * @memberof AudioRenderTimelineSpanRegionKey
     */
    'tonic_note'?: AudioRenderTimelineSpanRegionKeyTonicNoteEnum;
    /**
     * The scale quality; if this field is not specified, the API selects the quality automatically
     * @type {string}
     * @memberof AudioRenderTimelineSpanRegionKey
     */
    'tonic_quality'?: AudioRenderTimelineSpanRegionKeyTonicQualityEnum;
}

type AudioRenderTimelineSpanRegionKeyTonicAccidentalEnum = 'double flat' | 'flat' | 'natural' | 'sharp' | 'double sharp'
type AudioRenderTimelineSpanRegionKeyTonicNoteEnum = 'c' | 'd' | 'e' | 'f' | 'g' | 'a' | 'b'
type AudioRenderTimelineSpanRegionKeyTonicQualityEnum = 'major' | 'natural_minor' | 'harmonic_minor' | 'melodic_minor' | 'ionian' | 'dorian' | 'phrygian' | 'lydian' | 'mixolydian' | 'aeolian' | 'locrian'


