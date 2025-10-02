<script>
	import { bestScore } from '$lib/scoreCookie.svelte';
	import { secondsToTime } from '$lib/util';

	// import { goto } from '$app/navigation';
	// goto('/lesson02');

	const lesson01Best = bestScore('lesson01');
	const lesson02Best = bestScore('lesson02');
	const lesson02Unlocked = lesson01Best && lesson01Best <= 120;

	const lesson03Best = bestScore('lesson03');
	const lesson03Unlocked = lesson02Best && lesson02Best <= 120;
</script>

<div class="container main-menu">
	<h1>HARMONIJŲ PASAULIS</h1>
	<h2>Išmok pianino harmonijų pavadinimus</h2>

	<div class="levels">
		<div class="level">
			<button class="btn btn-primary">Lygis 1: Balti Klavišai</button>
			{#if lesson01Best}
				<p>Geriausias laikas: {secondsToTime(lesson01Best)}</p>
			{/if}
		</div>
		<div class="level">
			<button class="btn btn-primary" disabled={!lesson02Unlocked}>Lygis 2: Juodi Klavišai</button>
			{#if lesson02Unlocked}
				{#if lesson02Best}
					<p>Geriausias laikas: {secondsToTime(lesson02Best)}</p>
				{/if}
			{:else}
				<p>Norint atrakinti, lygis 1 turi būti baigtas per 3 minutes</p>
			{/if}
		</div>
		<div class="level">
			<button class="btn btn-primary" disabled={!lesson03Unlocked}>Lygis 3: Visi Klavišai</button>
			{#if lesson03Unlocked}
				{#if lesson03Best}
					<p>Best Time: {secondsToTime(lesson03Best)}</p>
				{/if}
			{:else}
				<p>Level 2 under 3 minutes to unlock</p>
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
