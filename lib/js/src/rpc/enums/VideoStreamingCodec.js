/*
* Copyright (c) 2019, Livio, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the Livio Inc. nor the names of its contributors
* may be used to endorse or promote products derived from this software
* without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/

import { Enum } from '../../util/Enum.js';

/**
 * @typedef {Enum} VideoStreamingCodec
 * @property {Object} _MAP
 */
class VideoStreamingCodec extends Enum {
    /**
    * @constructor
    */
    constructor () {
        super();
    }
    /**
     * @return {String}
     */
    static get H264 () {
        return VideoStreamingCodec._MAP.H264;
    }

    /**
     * @return {String}
     */
    static get H265 () {
        return VideoStreamingCodec._MAP.H265;
    }

    /**
     * @return {String}
     */
    static get Theora () {
        return VideoStreamingCodec._MAP.Theora;
    }

    /**
     * @return {String}
     */
    static get VP8 () {
        return VideoStreamingCodec._MAP.VP8;
    }

    /**
     * @return {String}
     */
    static get VP9 () {
        return VideoStreamingCodec._MAP.VP9;
    }

    /**
    * Get the value for the given enum key
    * @param value - A key to find in the map of the subclass
    * @return {*} - Returns a value if found, or null if not found
    */
    static valueForKey (key) {
        return VideoStreamingCodec._valueForKey(key, VideoStreamingCodec._MAP);
    }

    /**
    * Get the key for the given enum value
    * @param value - A primitive value to find the matching key for in the map of the subclass
    * @return {*} - Returns a key if found, or null if not found
    */
    static keyForValue (value) {
        return VideoStreamingCodec._keyForValue(value, VideoStreamingCodec._MAP);
    }
}

VideoStreamingCodec._MAP = Object.freeze({
    /**
     * A block-oriented motion-compensation-based video compression standard. As of 2014 it is one
     * of the most commonly used formats for the recording, compression, and distribution of video
     * content.
     */
    'H264': 'H264',
    /**
     * High Efficiency Video Coding (HEVC), also known as H.265 and MPEG-H Part 2, is a video
     * compression standard, one of several potential successors to the widely used AVC
     * (H.264 or MPEG-4 Part 10). In comparison to AVC, HEVC offers about double the data
     * compression ratio at the same level of video quality, or substantially improved video quality
     * at the same bit rate. It supports resolutions up to 8192x4320, including 8K UHD.
     */
    'H265': 'H265',
    /**
     * Theora is derived from the formerly proprietary VP3 codec, released into the public domain by
     * On2 Technologies. It is broadly comparable in design and bitrate efficiency to MPEG-4 Part 2,
     * early versions of Windows Media Video, and RealVideo while lacking some of the features
     * present in some of these other codecs. It is comparable in open standards philosophy to the
     * BBC's Dirac codec.
     */
    'Theora': 'Theora',
    /**
     * VP8 can be multiplexed into the Matroska-based container format WebM along with Vorbis and
     * Opus audio. The image format WebP is based on VP8's intra-frame coding. VP8's direct
     * successor, VP9, and the emerging royalty-free internet video format AV1 from the Alliance
     * for Open Media (AOMedia) are based on VP8.
     */
    'VP8': 'VP8',
    /**
     * Similar to VP8, but VP9 is customized for video resolutions beyond high-definition video
     * (UHD) and also enables lossless compression.
     */
    'VP9': 'VP9',
});

export { VideoStreamingCodec };