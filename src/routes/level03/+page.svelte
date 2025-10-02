<script>
	import { goto } from '$app/navigation';
	import { level03Unlocked } from '$lib/persisted/scores.svelte';
	import Game from '$lib/Game.svelte';

	if (!level03Unlocked()) goto('/');
</script>

<Game level="level03" />
