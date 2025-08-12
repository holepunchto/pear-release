'use strict'
const ref = require('pear-ref')
module.exports = function release (link, opts) {
  const ipc = global.Pear?.[global.Pear?.constructor.IPC]
  if (!ipc) throw new Error('pear-release is designed for Pear - IPC missing')
  ref.ref()
  const stream = ipc.release({ ...opts, link })
  stream.on('close', () => ref.unref())
  return stream
}
