import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface LanguageHandler {
  currentLanguage: string
  changeLang: (lang: string) => void
}

const useLanguageHandler = create<LanguageHandler>()(
  devtools(
    persist(
      (set) => ({
        currentLanguage: 'en',
        changeLang: (lang) => set(() => ({ currentLanguage: lang })),
      }),
      {
        name: 'App-language',
      },
    ),
  ),
)

export default useLanguageHandler
