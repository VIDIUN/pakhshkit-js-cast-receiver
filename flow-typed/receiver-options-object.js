// @flow

/**
 * @typedef {Object} VPReceiverOptionsObject
 * @property {ProviderOptionsObject} provider - The provider configuration.
 * @property {Object} [playback] - The playback configuration.
 * @property {Array<PKStreamPriorityObject>} [playback.streamPriority] - The list of engine and stream format pairs of the player by ascending order.
 * @property {Object} [sources] - The sources configuration.
 * @property {PKMediaSourceOptionsObject} [sources.options] - Related sources options.
 * @property {string} logLevel - The player log level.
 * @example
 * // Default config
 *{
 *  logLevel: "OFF",
 *  playback: {
 *    streamPriority: [
 *      {
 *        engine: "cast",
 *        format: "hls"
 *      },
 *      {
 *        engine: "cast",
 *        format: "dash"
 *      },
 *      {
 *        engine: "cast",
 *        format: "progressive"
 *      }
 *    ]
 *  },
 *  sources: {
 *    options: {
 *      forceRedirectExternalStreams: false
 *    }
 *  }
 *}
 */
type _VPReceiverOptionsObject = {
  provider: ProviderOptionsObject,
  playback?: {
    streamPriority: Array<PKStreamPriorityObject>
  },
  sources?: {
    options?: PKMediaSourceOptionsObject
  },
  logLevel?: string
};

/**
 * See {@link https://github.com/vidiun/pakhshkit-js-providers/blob/master/docs/configuration.md#configuration-structure|ProviderOptionsObject}
 * @external  ProviderOptionsObject
 */

/**
 * See {@link https://github.com/vidiun/pakhshkit-js/blob/master/docs/configuration.md#type-arraypkstreampriorityobject|PKStreamPriorityObject}
 * @external PKStreamPriorityObject
 */

/**
 * See {@link https://github.com/vidiun/pakhshkit-js/blob/master/docs/configuration.md#type-pkmediasourceoptionsobject|PKMediaSourceOptionsObject}
 * @external PKMediaSourceOptionsObject
 */

declare type VPReceiverOptionsObject = _VPReceiverOptionsObject;
