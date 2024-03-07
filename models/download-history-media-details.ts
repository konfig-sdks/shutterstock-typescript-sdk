/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DownloadHistoryFormatDetails } from './download-history-format-details';

/**
 * Information about the downloaded media
 * @export
 * @interface DownloadHistoryMediaDetails
 */
export interface DownloadHistoryMediaDetails {
    /**
     * 
     * @type {DownloadHistoryFormatDetails}
     * @memberof DownloadHistoryMediaDetails
     */
    'format'?: DownloadHistoryFormatDetails;
    /**
     * ID of the download history media details
     * @type {string}
     * @memberof DownloadHistoryMediaDetails
     */
    'id': string;
}

