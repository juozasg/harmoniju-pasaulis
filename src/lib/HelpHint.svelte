<script>
	import { settings } from './persisted/settings.svelte';
</script>

<div class="container">
	<div class="columns">
		<div class="column col-sm-12 col-12">
			<p>Paspaukite 🎲 arba <kbd>R</kbd> pradėti žaidimą</p>
		</div>
		{#if settings.playChord}
			<div class="column col-sm-12 col-12">
				<p>Paspaukite 😊 / 😩 / 🎶 pakartoti akordą</p>
			</div>
		{/if}
	</div>
</div>

<style>
	kbd {
		position: relative;
		bottom: 2px;
	}

	.column {
		/* border: 1px solid red; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.columns {
		margin-bottom: 20px;
	}
</style>
