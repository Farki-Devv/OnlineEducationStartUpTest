import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { enUS, ruRU,   } from '@clerk/localizations'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function localization(lng: string) {
	if (lng === 'en') return enUS
	if (lng === 'ru') return ruRU
}

export function getCurrentLng(lng: string) {
	if (lng === 'en') return 'English'
	if (lng === 'ru') return 'Русский'
}
