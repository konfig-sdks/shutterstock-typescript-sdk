/*
Shutterstock API Explorer

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

The version of the OpenAPI document: 1.1.32


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AudioRenderTimeline } from './audio-render-timeline';

/**
 * Data required to create an audio render
 * @export
 * @interface CreateAudioRender
 */
export interface CreateAudioRender {
    /**
     * A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file
     * @type {string}
     * @memberof CreateAudioRender
     */
    'filename': string;
    /**
     * File format, such as MP3 file, combined WAV file, or individual track WAV files
     * @type {string}
     * @memberof CreateAudioRender
     */
    'preset': CreateAudioRenderPresetEnum;
    /**
     * 
     * @type {AudioRenderTimeline}
     * @memberof CreateAudioRender
     */
    'timeline': AudioRenderTimeline;
}

type CreateAudioRenderPresetEnum = 'MASTER_MP3' | 'MASTER_WAV' | 'STEMS_WAV'


