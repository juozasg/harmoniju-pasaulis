<script lang="ts">
	import { isLoadingAudio } from './audio.svelte';
	import { settings } from './persisted/settings.svelte';
</script>

{#if isLoadingAudio()}
	<div class="container">Loading audio...</div>
{:else}
	<div class="container">
		<div class="columns">
			<div class="column options-column">NUSTATYMAI</div>
			<div class="column play-chord-column">
				<input id="play-chord" type="checkbox" bind:checked={settings.playChord} />
				<label for="play-chord">Groti akordą</label>
			</div>
			<div class="column hide-emoji-column">
				<input id="hide-emoji" type="checkbox" bind:checked={settings.hideEmoji} />
				<label for="hide-emoji">Nerodyti emocijų</label>
			</div>
		</div>
	</div>
{/if}

<style>
	.container {
		position: fixed;
		bottom: 64px;
		left: 0;
		width: 100%;
		color: #777;
	}

	.column {
		display: block;
		justify-content: left;
		text-align: left;
		/* border: 1px solid #ddd; */
		padding: 0;
	}

	.options-column {
		min-width: 120px;
		max-width: 120px;
		font-weight: 500;
		padding-left: 8px;
		/* border: 1px solid #ddd; */

		@media (max-width: 390px) {
			font-size: 13px;
			min-width: 90px;
			max-width: 90px;
			padding-left: 4px;
			position: relative;
			bottom: -3px;
		}
	}

	.play-chord-column {
		min-width: 120px;
		max-width: 120px;
	}

	.hide-emoji-column {
		min-width: 150px;
		max-width: 150px;
	}

	input[type='checkbox'] {
		position: relative;
		bottom: -1px;
	}

	label {
		cursor: pointer;
	}
</style>
