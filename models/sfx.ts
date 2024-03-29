/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Contributor } from './contributor';
import { SFXAssets } from './sfxassets';

/**
 * SFX metadata
 * @export
 * @interface SFX
 */
export interface SFX {
    /**
     * Title of this sound effect
     * @type {string}
     * @memberof SFX
     */
    'title'?: string;
    /**
     * Description of this sound effect
     * @type {string}
     * @memberof SFX
     */
    'description'?: string;
    /**
     * Date this sound effect was added to the Shutterstock library
     * @type {string}
     * @memberof SFX
     */
    'added_date'?: string;
    /**
     * Affiliate referral link; appears only for registered affiliate partners
     * @type {string}
     * @memberof SFX
     */
    'affiliate_url'?: string;
    /**
     * Artist of the sound effect
     * @type {string}
     * @memberof SFX
     */
    'artist'?: string;
    /**
     * 
     * @type {SFXAssets}
     * @memberof SFX
     */
    'assets'?: SFXAssets;
    /**
     * 
     * @type {Contributor}
     * @memberof SFX
     */
    'contributor': Contributor;
    /**
     * Duration of this sound effect in seconds
     * @type {number}
     * @memberof SFX
     */
    'duration'?: number;
    /**
     * Shutterstock ID of this sound effect
     * @type {string}
     * @memberof SFX
     */
    'id': string;
    /**
     * List of all keywords for this sound effect
     * @type {Array<string>}
     * @memberof SFX
     */
    'keywords'?: Array<string>;
    /**
     * Media type of this track; should always be \"sfx\"
     * @type {string}
     * @memberof SFX
     */
    'media_type': string;
    /**
     * List of all releases of this sound effect
     * @type {Array<string>}
     * @memberof SFX
     */
    'releases'?: Array<string>;
    /**
     * Time this sound effect was last updated
     * @type {string}
     * @memberof SFX
     */
    'updated_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof SFX
     */
    'url'?: string;
}

