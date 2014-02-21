/*!
 * Demigram v0.0.18 - messaging web application for MTProto
 * https://github.com/voyageravv/app
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/voyageravv/app/blob/master/LICENSE
 */

importScripts(
  '../../vendor/console-polyfill/console-polyfill.js?1',
  'mtproto.js',
  '../../vendor/jsbn/jsbn_combined.js',
  '../../vendor/cryptoJS/crypto.js?1'
);

onmessage = function (e) {
  // console.log('AES worker in', e.data);
  var taskID = e.data.taskID,
      result;

  if (e.data.task == 'encrypt') {
    result = aesEncrypt(e.data.bytes, e.data.keyBytes, e.data.ivBytes);
  } else {
    result = aesDecrypt(e.data.encryptedBytes, e.data.keyBytes, e.data.ivBytes);
  }
  postMessage({taskID: taskID, result: result});
}
