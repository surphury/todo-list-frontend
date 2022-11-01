import create from 'zustand';

import { LocalKeys } from '@/constants';
import { User } from '@/models';
import { getFromLocalStorage } from '@/utils';

export const userState = create<{ user: User | null }>((set) => ({
	user: getFromLocalStorage<User>(LocalKeys.User),
	setUser: (user: User) => set({ user })
}));
