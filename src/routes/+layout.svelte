<script lang="ts">
	import HighScore from '$lib/HighScore.svelte';

	let { children } = $props();
</script>

<div id="turn">
	<div class="phone"></div>
	<div class="message">Please rotate your device!</div>
</div>

<div id="main">
	{@render children()}

	<HighScore />
</div>

<audio
	id="audio"
	src="data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV////////////////////////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQDkAAAAAAAAAGw9wrNaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAAAAANIAAAAAExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDsAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxHYAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
>
</audio>

<style>
	:global(*) {
		& > button {
			padding: 0;
			margin: 0;
			/* border: none; */
		}
	}

	:global(:root) {
		--level01: #4caf50;
		--level02: #2196f3;
		--level03: #58078d;
	}

	#turn {
		position: fixed;
		top: 30vh;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		color: #000;
		display: none;
		justify-content: center;
		font-size: 2rem;
		text-align: center;
		z-index: 9999;
	}

	.phone {
		height: 75px;
		width: 150px;
		border: 3px solid black;
		border-radius: 10px;
		margin-left: auto;
		margin-right: auto;
		animation: rotate 1.5s ease-in-out infinite alternate;
		/* display: none; */
	}

	.message {
		color: black;
		font-size: 1em;
		margin-top: 40px;
		/* display: none; */
	}

	@keyframes rotate {
		0% {
			transform: rotate(-90deg);
		}
		50% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	@media only screen and (orientation: landscape) and (max-height: 520px) {
		#turn {
			display: block;
		}
		#main {
			display: none;
		}
	}

	@media only screen and (orientation: portrait) {
		#turn {
			display: none;
		}
		#main {
			display: block;
		}
	}
</style>
