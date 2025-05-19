<script lang="ts">
	let { data } = $props();

	let wordList = $state(data.words);
	let wordIndex = $state(0);
	let words = $state({
		current: '',
		prev: '',
		next: ''
	});

	$effect(() => {
		words.current = wordList[wordIndex];
		words.prev = wordList[(wordIndex - 1 + wordList.length) % wordList.length];
		words.next = wordList[(wordIndex + 1) % wordList.length];
	});

	function prev() {
		wordIndex = (wordIndex - 1 + wordList.length) % wordList.length;
	}

	function next() {
		wordIndex = (wordIndex + 1) % wordList.length;
	}

	function shuffle() {
		for (let i = wordList.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			const temp = wordList[i];
			wordList[i] = wordList[j];
			wordList[j] = temp;
		}
	}
</script>

<section class="main">
	<div class="main__word-container">
		<span class="main__word main__word--prev">
			{words.prev}
		</span>

		<span class="main__word main__word--current">
			{words.current}
		</span>

		<span class="main__word main__word--next">
			{words.next}
		</span>
	</div>
	<input name="main" />
	<div class="main__controls">
		<button onclick={prev}> back </button>
		<button onclick={next}> next </button>
		<button onclick={shuffle}> shuffle </button>
	</div>
</section>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 33vw;
		height: 100%;
		margin: auto;
	}

	.main__word {
		font-size: 3rem;
		opacity: 0.5;
		transition: opacity 0.3s;
		flex-basis: 33.333%;
		flex-grow: 1;
	}

	.main__word--current {
		font-size: 4rem;
		opacity: 1;
		font-weight: bold;
		text-align: center;
	}

	.main__word--prev {
		text-align: end;
	}

	.main__word-container {
		display: flex;
		justify-content: center; /* centers the current word */
		align-items: center;
		gap: 2rem;
		position: relative;
	}
</style>
