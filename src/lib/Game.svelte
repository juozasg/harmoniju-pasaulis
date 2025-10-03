<script lang="ts">
  import LevelHeader from './LevelHeader.svelte';

	import { goto } from '$app/navigation';

	import HelpHint from './HelpHint.svelte';
	import ScoreFlash from './ScoreFlash.svelte';
	import Answers from './Answers.svelte';

	import Score from './Score.svelte';
	import { addScore, levelDescriptions, type Level } from './persisted/scores.svelte';
	import Question from './Question.svelte';
	import AnswersEnharmonic from './AnswersEnharmonic.svelte';
	import Settings from './Settings.svelte';

	type Props = { level: Level };
	const { level }: Props = $props();

	let gameInitState = $state(true);

	let questionState: '1' | '2' = $state('1');

	// svelte-ignore non_reactive_update
	let score: Score | undefined = $state();
	let scoreFlash: ScoreFlash | undefined = $state();
	let question: Question | undefined = $state();

	const semitone = $derived(question && question.getSemitone());
	const mood = $derived(question && question.getMood());

	const hasWon = $derived(score && score.hasWon());


	$effect(() => {
		// console.log('FX score', score, score?.hasWon());

	});


	function onQuestionReset() {
		if (gameInitState) {
			score!.reset();
			gameInitState = false;
		}
		questionState = '1';
	}

	function correct() {
		score!.correct();
		scoreFlash!.addMessage('correct');

		if (score!.hasWon()) {
			addScore(score!.getTime());
			gameInitState = true;
		} else {
			question!.clickRandomizeDice();
		}
	}

	function wrong() {
		score!.wrong();
		scoreFlash!.addMessage('wrong');
		question!.clickRandomizeDice();
	}

	function onAnswered(correctAnswer: boolean) {
		if (correctAnswer) {
			if (questionState == '1') {
				questionState = '2';
			} else {
				questionState = '1';
				correct();
			}
		} else {
			questionState = '1';
			wrong();
		}
	}
</script>

<div class="container game-container">
	<div class="score">
		<Score bind:this={score} />
	</div>

	<LevelHeader {level} />
	<Question {onQuestionReset} {gameInitState} bind:this={question} />

	{#if !gameInitState && semitone && mood}
		{#if questionState == '1'}
			<Answers {onAnswered} {semitone} {mood} />
		{:else if questionState == '2'}
			<AnswersEnharmonic {onAnswered} {semitone} {mood} />
		{/if}
	{/if}

	{#if gameInitState}
		<HelpHint />
	{/if}

	{#if hasWon}
		<div class="win">Laimėjai!</div>
	{/if}

	<ScoreFlash bind:this={scoreFlash} />

	<div class="back"><button class="btn btn-primary" onclick={() => goto('/')}>Atgal</button></div>

	<Settings />
</div>

<style>
	.game-container {
		position: relative;
		max-width: 720px;
		/* border: 1px solid cadetblue; */
	}

	.win {
		color: green;
		font-weight: bold;
		font-size: 400%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 15px;
		margin-bottom: 30px;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}

	.back {
		position: fixed;
		bottom: 100px;
		left: 50%;
		transform: translateX(-50%);

		button {
			padding: 10px 20px;
			font-size: 18px;
			height: auto;
			width: auto;
		}
	}
</style>
