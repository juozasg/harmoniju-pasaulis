import { persistedState } from 'svelte-persisted-state';

export type Level = 'level01' | 'level02' | 'level03';


const persistedScores = persistedState<Record<Level, number[]>>('scores',
	{
		'level01': [200] as number[],
		'level02': [500] as number[],
		'level03': [] as number[],
	} as Record<Level, number[]>,
	{
		storage: 'local',
		syncTabs: true,
		beforeWrite: (value) => {
			console.log('Saving scores:', value);
			return value;
		},
	}
);

export const scores = persistedScores.current;
// persistedScores.reset();

// export const sortedScores = () => scores.sort((a, b) => a - b)
export type SortedScoreEntry = [Level, number];
export const sortedScores = () => {
	const entries: SortedScoreEntry[] = [];
	(Object.entries(scores) as [Level, number[]][]).forEach(([level, levelScores]) => {
		levelScores.forEach((score) => {
			entries.push([level, score]);
		});
	});
	return entries.sort((a, b) => a[1] - b[1]);
}

export const bestScore = (level: Level) => {
	const levelScores = scores[level];
	if (!levelScores || levelScores.length === 0) {
		return;
	}
	return Math.min(...levelScores);
}

export function addScore(score: number) {
	scores['level01'].push(score);
}

export const level02Unlocked = () =>  bestScore('level01') !== undefined && bestScore('level01')! < 300;
export const level03Unlocked = () =>  bestScore('level02') !== undefined && bestScore('level02')! < 300;