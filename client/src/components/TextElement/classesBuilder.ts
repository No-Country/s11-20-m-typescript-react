type Classes = Record<string, string>

export const classesBuilder = (type: string, custom: string) => {
  const classes: Classes = {
    t1: 'text-3xl font-normal leading-[140%]' + ' ' + custom,
    t2: 'text-2xl leading-[140%]' + ' ' + custom,
    t3: 'text-xl  leading-[140%]' + ' ' + custom,
    subtitle: 'text-lg leading-[140%]' + ' ' + custom,
    base: 'text-base font-light leading-[155%]' + ' ' + custom,
    small: 'text-sm font-light leading-[155%]' + ' ' + custom,
    hero_t1: 'text-3xl leading-9 font-bold text-white' + ' ' + custom,
    hero_t2: 'text-2xl leading-8 font-medium text-white' + ' ' + custom,
    info_CF: 'text-sm leading-5 font-normal text-teal-800' + ' ' + custom,
    info_IN: 'text-xl leading-7 font-semibold text-teal-800' + ' ' + custom,
    info_NUMBER: 'text-3xl leading-9 font-semibold text-teal-800' + ' ' + custom,
    info_TITLE: 'text-lg leading-7 font-medium text-gray-900' + ' ' + custom,
    info_SUBTITLE: 'text-sm leading-5 font-normal text-gray-900' + ' ' + custom,
    habits_TUS: 'text-2xl leading-8 font-semibold text-gray-900' + ' ' + custom,
    habits_WORD: 'text-3xl leading-9 font-bold text-gray-900' + ' ' + custom,
    solutions_TITLE: 'text-base leading-6 font-semibold text-gray-500' + ' ' + custom,
    footer_TEXT: 'text-xs leading-4 font-normal text-white' + ' ' + custom,

  }

  return classes[type]
}
