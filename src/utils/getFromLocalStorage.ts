import { LocalKeys } from '@/constants';

export const getFromLocalStorage = <T>(key: LocalKeys): T | null => {
	const localInfo = localStorage.getItem(key);
	if (localInfo) {
		try {
			return JSON.parse(localInfo) as T;
		} catch (e) {
			return null;
		}
	} else {
		return null;
	}
};
