<script>
	import { goto } from '$app/navigation';
	import { level02Unlocked } from '$lib/persisted/scores.svelte';
	import Game from '$lib/Game.svelte';

	if(!level02Unlocked()) goto('/');
</script>

<Game level="level02" />
