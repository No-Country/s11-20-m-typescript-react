import { CURRENCY, LOCALE_CURRENCY, STYLE } from '@/utils/intlFormatter'

const useDonate = () => {
  const currencyFormatter = (value: number) => {
    const formatter = new Intl.NumberFormat(LOCALE_CURRENCY, {
      style: STYLE,
      minimumFractionDigits: 2,
      currency: CURRENCY
    })
    return formatter.format(value)
  }

  const parsePrice = (price: number) => price * 100

  return { currencyFormatter, parsePrice }
}

export default useDonate
