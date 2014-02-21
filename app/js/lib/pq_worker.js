/*!
 * Demigram v0.0.18 - messaging web application for MTProto
 * https://github.com/voyageravv/app
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/voyageravv/app/blob/master/LICENSE
 */

importScripts(
  '../../vendor/console-polyfill/console-polyfill.js?1',
  'mtproto.js',
  '../../vendor/jsbn/jsbn_combined.js'
);

onmessage = function (e) {
  postMessage(pqPrimeFactorization(e.data));
}
