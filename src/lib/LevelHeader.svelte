<script lang="ts">
	import { levelDescriptions, type Level } from './persisted/scores.svelte';

	type Props = { level: Level };
	const { level }: Props = $props();
</script>

<div class="level {level}">
	{levelDescriptions[level]}
</div>

<style>

	.level {
		color: white;
		text-align: center;
		font-weight: bold;
		width: 280px;
		font-size: 22px;
		padding: 6px 10px;
		border-radius: 2px;
		margin: 16px auto 0 auto;
	}

	.level01 {
		background-color: var(--level01);
		border: 2px solid var(--level01);
	}
	.level02 {
		background-color: var(--level02);
		border: 2px solid var(--level02);
	}
	.level03 {
		background-color: var(--level03);
		border: 2px solid var(--level03);
	}
</style>
