/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Album } from './album';
import { Artist } from './artist';
import { AudioAssets } from './audio-assets';
import { Contributor } from './contributor';
import { ModelRelease } from './model-release';

/**
 * Audio metadata
 * @export
 * @interface Audio
 */
export interface Audio {
    /**
     * Title of this track
     * @type {string}
     * @memberof Audio
     */
    'title'?: string;
    /**
     * Description of this track
     * @type {string}
     * @memberof Audio
     */
    'description'?: string;
    /**
     * Date this track was added to the Shutterstock library
     * @type {string}
     * @memberof Audio
     */
    'added_date'?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof Audio
     */
    'affiliate_url'?: string;
    /**
     * 
     * @type {Album}
     * @memberof Audio
     */
    'album'?: Album;
    /**
     * List of artists
     * @type {Array<Artist>}
     * @memberof Audio
     */
    'artists'?: Array<Artist>;
    /**
     * 
     * @type {AudioAssets}
     * @memberof Audio
     */
    'assets'?: AudioAssets;
    /**
     * BPM (beats per minute) of this track
     * @type {number}
     * @memberof Audio
     */
    'bpm'?: number;
    /**
     * 
     * @type {Contributor}
     * @memberof Audio
     */
    'contributor': Contributor;
    /**
     * 
     * @type {string}
     * @memberof Audio
     */
    'deleted_time'?: string;
    /**
     * Duration of this track in seconds
     * @type {number}
     * @memberof Audio
     */
    'duration'?: number;
    /**
     * List of all genres for this track
     * @type {Array<string>}
     * @memberof Audio
     */
    'genres'?: Array<string>;
    /**
     * Shutterstock ID of this track
     * @type {string}
     * @memberof Audio
     */
    'id': string;
    /**
     * List of all instruments that appear in this track
     * @type {Array<string>}
     * @memberof Audio
     */
    'instruments'?: Array<string>;
    /**
     * Whether or not this track contains adult content
     * @type {boolean}
     * @memberof Audio
     */
    'is_adult'?: boolean;
    /**
     * Whether or not this track is purely instrumental (lacking lyrics)
     * @type {boolean}
     * @memberof Audio
     */
    'is_instrumental'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Audio
     */
    'isrc'?: string;
    /**
     * List of all keywords for this track
     * @type {Array<string>}
     * @memberof Audio
     */
    'keywords'?: Array<string>;
    /**
     * Language of this track\'s lyrics
     * @type {string}
     * @memberof Audio
     */
    'language'?: string;
    /**
     * Lyrics of this track
     * @type {string}
     * @memberof Audio
     */
    'lyrics'?: string;
    /**
     * Media type of this track; should always be \"audio\"
     * @type {string}
     * @memberof Audio
     */
    'media_type': string;
    /**
     * List of all model releases for this track
     * @type {Array<ModelRelease>}
     * @memberof Audio
     */
    'model_releases'?: Array<ModelRelease>;
    /**
     * List of all moods of this track
     * @type {Array<string>}
     * @memberof Audio
     */
    'moods'?: Array<string>;
    /**
     * Time this track was published
     * @type {string}
     * @memberof Audio
     */
    'published_time'?: string;
    /**
     * Recording version of this track
     * @type {string}
     * @memberof Audio
     */
    'recording_version'?: string;
    /**
     * List of all releases of this track
     * @type {Array<string>}
     * @memberof Audio
     */
    'releases'?: Array<string>;
    /**
     * List of all similar artists of this track
     * @type {Array<Artist>}
     * @memberof Audio
     */
    'similar_artists'?: Array<Artist>;
    /**
     * Time this track was submitted
     * @type {string}
     * @memberof Audio
     */
    'submitted_time'?: string;
    /**
     * Time this track was last updated
     * @type {string}
     * @memberof Audio
     */
    'updated_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof Audio
     */
    'url'?: string;
    /**
     * Vocal description of this track
     * @type {string}
     * @memberof Audio
     */
    'vocal_description'?: string;
}

