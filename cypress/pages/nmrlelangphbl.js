class NmrLelangPhbl {
  static generate(tipe = 'NRML') {
    const now = new Date()
    const pad = (n) => n.toString().padStart(2, '0')

    const tahun = now.getFullYear()
    const bulan = pad(now.getMonth() + 1)
    const hari = pad(now.getDate())
    const jam = pad(now.getHours())
    const menit = pad(now.getMinutes())
    const detik = pad(now.getSeconds())

    const tipeMap = {
      normal: 'NRML',
      multidrop: 'MDRP'
    }

    const kodeTipe = tipeMap[tipe.toLowerCase()] || tipe

    return `LELANGIK/${tahun}${bulan}${hari}-${jam}${menit}${detik}/${kodeTipe}`
  }
}

export default NmrLelangPhbl
