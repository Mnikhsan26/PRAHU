import dayjs from 'dayjs'

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

export class LlgBlmBk {
  static generateBlmbuka() {
    const buka = dayjs().add(1, 'month')
    const tutup = buka.add(1, 'minute')
    const mulai = tutup.add(1, 'minute')
    const akhir = mulai.add(1, 'minute')

    return{
      buka : buka.format('DD/MM/YYYY HH:mm'),
      tutup : tutup.format('DD/MM/YYYY HH:mm'),
      mulai : mulai.format('DD/MM/YYYY HH:mm'),
      akhir : akhir.format('DD/MM/YYYY HH:mm'),
    }
  }
}

export class LlgTtp {
  static generateTutup() {
    const buka = dayjs()
    const tutup = buka.add(1, 'month')
    const mulai = tutup.add(1, 'minute')
    const akhir = mulai.add(1, 'minute')

    return{
      buka : buka.format('DD/MM/YYYY HH:mm'),
      tutup : tutup.format('DD/MM/YYYY HH:mm'),
      mulai : mulai.format('DD/MM/YYYY HH:mm'),
      akhir : akhir.format('DD/MM/YYYY HH:mm'),
    }
  }
}

export class LlgMlai {
  static generateMulai() {
    const buka = dayjs()
    const tutup = buka.add(1, 'minute')
    const mulai = tutup.add(1, 'month')
    const akhir = mulai.add(1, 'minute')

    return{
      buka : buka.format('DD/MM/YYYY HH:mm'),
      tutup : tutup.format('DD/MM/YYYY HH:mm'),
      mulai : mulai.format('DD/MM/YYYY HH:mm'),
      akhir : akhir.format('DD/MM/YYYY HH:mm'),
    }
  }
}

export class LlgAkhr {
  static generateAkhir() {
    const buka = dayjs()
    const tutup = buka.add(1, 'minute')
    const mulai = tutup.add(1, 'minute')
    const akhir = mulai.add(1, 'month')

    return{
      buka : buka.format('DD/MM/YYYY HH:mm'),
      tutup : tutup.format('DD/MM/YYYY HH:mm'),
      mulai : mulai.format('DD/MM/YYYY HH:mm'),
      akhir : akhir.format('DD/MM/YYYY HH:mm'),
    }
  }
}