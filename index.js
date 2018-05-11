const os = require("os")
const crypto = require('crypto');
const cmd = require('child_process').execSync


class Digest {

  constructor () {
    this.metas = {}
    this._init()
    this.secret = "|machine-digest|"
  }

  _init() {
    this.metas.OS_TYPE = os.type()
    this.metas.OS_PLATFORM = os.platform()
    this.metas.OS_ARCH = os.arch()
    // this.metas.OS_RELEASE = os.release()
    this.metas.OS_CPU = os.cpus().map(k=>`${k.model}`).sort().join('.')
    // _macs = []
    // Object.values(os.networkInterfaces()).forEach(k=>k.forEach(i=>{if (!i.mac.startsWith("00:") && i.family == 'IPv4') _macs.push(i.mac)}))
    // this.metas.OS_MAC = _macs.sort().join('.')
    let _id
    try {
      if (this.metas.OS_PLATFORM == 'darwin') {
        _id = /IOPlatformUUID"\s=\s"([^\s]+)"/.exec(child_process.execSync('ioreg -rd1 -c IOPlatformExpertDevice').toString('utf8'))
        if (_id) _id = _id[1]
      } else if (this.metas.OS_PLATFORM = 'linux') {
        _id = cmd('cat /var/lib/dbus/machine-id').toString('utf8')
      } else if (['win32', 'win64'].includes(this.metas.OS_PLATFORM)) {
        _id = cmd('wmic CsProduct Get UUID').toString('utf8').replace("\n", '')
      }
    } catch (e) {}
  
    this.metas.id = _id == null? "machine unique id": _id
  }

  add(options) {
    if (typeof(options == "object")) Object.assign(this.metas, options)
  }

  _make() {
    const ss = Object.keys(this.metas).sort().map(k=>`${k}-|-${this.metas[k]}`).join('-')
    const _raw = `M${ss}D`
    const raw = this._compose(_raw)
    return this._encrypt(raw)
  }

  _encrypt(raw) {
    return crypto.createHmac('sha256', this.secret).update(raw)
  } 

  _compose (raw) {
    return raw
  }

  get() {
    const digest = this._make().digest('hex')
    return {digest, machine: this.metas}
  }

  digest(enc) {
    return this._make().digest(enc)
  }

}

module.exports = new Digest
