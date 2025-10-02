<script lang="ts">
	import { sortedScores, type Level } from './persisted/scores.svelte';
	import { secondsToTime } from './util';

	const levelAbbrevs: Record<Level, string> = {
		level01: 'L1',
		level02: 'L2',
		level03: 'L3'
	};
</script>

{#snippet levelBadge(level: Level)}
	<span class="level-badge {level}">{levelAbbrevs[level]}</span>
{/snippet}


<div class="highscore">
	<b class="caption">
		<p class='high'>TOP</p>
		<p>LAIKAS</p>
	</b>

	{#each sortedScores() as scoreEntry}
		<p class="score">{secondsToTime(scoreEntry[1])}{@render levelBadge(scoreEntry[0])}</p>
	{/each}
</div>

<style>
	.highscore {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		padding: 10px;
		padding-top: 0px;
		padding-bottom: 0;

		/* border-radius: 5px; */
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		/* height: 200px; */
		display: flex;
		gap: 12px;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.highscore p {
		margin: 0;

		&.score {
			font-weight: 500;
			font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
			display: inline-block;
			line-height: 48px;
			position: relative;
			bottom: -3px;
			font-size: 22px;
			padding-left: 2px;
		}
	}

	.highscore b {
		text-align: center;
		font-weight: 600;
		display: inline-block;
		margin-right: 10px;

		&.caption {
			font-size: 14px;

		}
		& .high {
			font-size: 18px;
			position: relative;
			top: 5px;
		}
	}

	.level-badge {
		display: inline;
		/* position: absolute; */
		/* bottom: 15px; */
		/* left: -4px; */
		/* width: 16px; */
		/* height: 16px; */
		/* line-height: 16px; */

		/* color: rgb(194, 17, 17); */
		font-weight: 700;
		font-size: 16px;
		padding: 0;
		margin: 0;
		padding-left: 2px;
		/* margin-right: 6px; */
	}

	.level-badge.level01 {
		color: var(--level01);
		/* border: 2px solid #388e3c; */
		/* border-radius: 4px; */
	}

	.level-badge.level02 {
		color: var(--level02);
		/* border: 2px solid #1976d2; */
		/* border-radius: 4px; */
	}

	.level-badge.level03 {
		color: var(--level03);
		/* border: 2px solid #4a148c; */
		/* border-radius: 4px; */
	}

</style>
