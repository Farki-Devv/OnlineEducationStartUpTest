export const fallbackLng = 'uz'
export const languages = [fallbackLng, 'ar']

export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng) {
	return {
		// debug: true,
		supportedLngs: languages,
		fallbackLng,
		lng,
	}
}
