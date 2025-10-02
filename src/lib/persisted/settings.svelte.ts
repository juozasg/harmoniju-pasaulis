import { persistedState } from 'svelte-persisted-state';

type Settings = {
	playChord: boolean;
	hideEmoji: boolean;
}

const persistedSettings = persistedState<Settings>('settings',
	{
		playChord: true,
		hideEmoji: false,
	} as Settings,
	{
		storage: 'local',
		syncTabs: true,
		beforeWrite: (value) => {
			console.log('Saving preferences:', value);
			return value;
		},
	}
);

export const settings = persistedSettings.current


