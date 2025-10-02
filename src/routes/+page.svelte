<script>
	import { goto } from '$app/navigation';
	import { bestScore, level02Unlocked, level03Unlocked } from '$lib/persisted/scores.svelte';
	import { secondsToTime } from '$lib/util';


	const bestLevel01 = bestScore('level01');
	const bestLevel02 = bestScore('level02');
	const bestLevel03 = bestScore('level03');
</script>

<div class="container main-menu">
	<h1>HARMONIJŲ PASAULIS</h1>
	<h2>Išmok pianino harmonijų pavadinimus</h2>

	<div class="levels">
		<div class="level">
			<button class="btn btn-primary" onclick={() => goto('/level01')}>Lygis 1: Balti Klavišai</button>
			{#if bestLevel01}
				<p>Geriausias laikas: {secondsToTime(bestLevel01)}</p>
			{/if}
		</div>
		<div class="level">
			<button class="btn btn-primary" disabled={!level02Unlocked()} onclick={() => goto('/level02')}>Lygis 2: Juodi Klavišai</button>
			{#if level02Unlocked()}
				{#if bestLevel02}
					<p>Geriausias laikas: {secondsToTime(bestLevel02)}</p>
				{/if}
			{:else}
				<p>Norint atrakinti, lygis 1 turi būti baigtas per 3 minutes</p>
			{/if}
		</div>
		<div class="level">
			<button class="btn btn-primary" disabled={!level03Unlocked()} onclick={() => goto('/level03')}>Lygis 3: Visi Klavišai</button>
			{#if level03Unlocked()}
				{#if bestLevel03}
					<p>Geriausias laikas: {secondsToTime(bestLevel03)}</p>
				{/if}
			{:else}
				<p>Norint atrakinti, lygis 2 turi būti baigtas per 3 minutes</p>
			{/if}
		</div>
	</div>
</div>

<style>

	h1 {
		margin-bottom: 10px;
		font-size: 42px;
		font-weight: 700;
		@media (max-width: 480px) {
			font-size: 8.5vw;

		}
		/* max-font-size: 80px; */
		word-wrap: none;
	}

	h2 {
		font-size: 24px;
		margin-bottom: 40px;
		font-weight: 300;

	}
	.btn {
		padding: 10px 10px;
		padding-bottom: 14px;
		height: 50px;
		width: 340px;
		font-size: 30px;
	}

	.levels {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.level {
		margin-bottom: 3em;
		width: 360px;

		p {
			margin-top: 4px;
			margin-bottom: 0;
			font-size: 20px;
			text-align: center;
			margin-left:  10px;
		}
	}

	.main-menu {
		margin-top: 1rem;
		text-align: center;
		max-width: 720px;
		max-height: 720px;
	}
</style>
