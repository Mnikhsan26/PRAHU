// 🔹 Generator untuk Email & Nomor Telepon
class UserDataGenerator {
  // --- EMAIL ---
  constructor(role = 'bidowner', domain = 'yopmail.com') {
    this.role = role.toLowerCase()
    this.domain = domain
    this.baseMap = {
      bidowner: 'ikbidowner',
      bidder: 'ikbidder'
    }
  }

 // 🔹 Private method: string acak huruf + angka
  #randomPart() {
    const random = Math.random().toString(36).replace(/[^a-z0-9]/gi, '').substring(2, 8)
    const timestamp = new Date().getTime().toString().slice(-5)
    return `${random}${timestamp}`
  }

  // 🔹 Public method: menghasilkan email tanpa tanda baca
  generateEmail() {
    const base = this.baseMap[this.role] || 'ikuser'
    const cleanBase = base.replace(/[^a-z0-9]/gi, '') // pastikan base bersih juga
    return `${cleanBase}${this.#randomPart()}@${this.domain}`
  }


  // --- PHONE ---
  static generatePhone() {
    return '08' + Math.floor(10000000000000 + Math.random() * 90000000000000).toString()
  }
}

export default UserDataGenerator
