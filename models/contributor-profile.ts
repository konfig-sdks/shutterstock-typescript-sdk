/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContributorProfileSocialMedia } from './contributor-profile-social-media';

/**
 * Contributor profile data
 * @export
 * @interface ContributorProfile
 */
export interface ContributorProfile {
    /**
     * Short description of the contributors\' library
     * @type {string}
     * @memberof ContributorProfile
     */
    'about'?: string;
    /**
     * Type of content that the contributor specializes in (photographer, illustrator, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    'contributor_type'?: Array<string>;
    /**
     * Preferred name to be displayed for the contributor
     * @type {string}
     * @memberof ContributorProfile
     */
    'display_name'?: string;
    /**
     * List of equipment used by the contributor (Canon EOS 5D Mark II, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    'equipment'?: Array<string>;
    /**
     * Contributor ID
     * @type {string}
     * @memberof ContributorProfile
     */
    'id': string;
    /**
     * Country code representing the contributor\'s locale
     * @type {string}
     * @memberof ContributorProfile
     */
    'location'?: string;
    /**
     * Web URL for the contributors\' profile
     * @type {string}
     * @memberof ContributorProfile
     */
    'portfolio_url'?: string;
    /**
     * 
     * @type {ContributorProfileSocialMedia}
     * @memberof ContributorProfile
     */
    'social_media'?: ContributorProfileSocialMedia;
    /**
     * List of styles that the contributor specializes in (lifestyle, mixed media, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    'styles'?: Array<string>;
    /**
     * Generic list of subjects for contributors\' work (food_and_drink, holiday, people, etc)
     * @type {Array<string>}
     * @memberof ContributorProfile
     */
    'subjects'?: Array<string>;
    /**
     * Personal website for the contributor
     * @type {string}
     * @memberof ContributorProfile
     */
    'website'?: string;
}

