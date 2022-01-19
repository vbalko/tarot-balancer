<script>
</script>

<div class="container_logo">
	<div class="loading_logo">
		<div class="loading__letter text-primary">L</div>
		<div class="loading__letter text-primary">o</div>
		<div class="loading__letter text-primary">a</div>
		<div class="loading__letter text-primary">d</div>
		<div class="loading__letter text-primary">i</div>
		<div class="loading__letter text-primary">n</div>
		<div class="loading__letter text-primary">g</div>
		<div class="loading__letter text-primary">.</div>
		<div class="loading__letter text-primary">.</div>
		<div class="loading__letter text-primary">.</div>
	</div>
</div>

<style>
	@import url(https://fonts.googleapis.com/css?family=Audiowide);
	.container_logo {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loading_logo {
		display: flex;
		flex-direction: row;
	}

	.loading__letter {
		font-size: 88px;
		font-weight: normal;
		letter-spacing: 4px;
		text-transform: uppercase;
		animation-name: bounce;
		animation-duration: 2s;
		animation-iteration-count: infinite;
	}

	.loading__letter:nth-child(2) {
		animation-delay: 0.1s;
	}
	.loading__letter:nth-child(3) {
		animation-delay: 0.2s;
	}
	.loading__letter:nth-child(4) {
		animation-delay: 0.3s;
	}
	.loading__letter:nth-child(5) {
		animation-delay: 0.4s;
	}
	.loading__letter:nth-child(6) {
		animation-delay: 0.5s;
	}
	.loading__letter:nth-child(7) {
		animation-delay: 0.6s;
	}
	.loading__letter:nth-child(8) {
		animation-delay: 0.8s;
	}
	.loading__letter:nth-child(9) {
		animation-delay: 1s;
	}
	.loading__letter:nth-child(10) {
		animation-delay: 1.2s;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0px);
		}
		40% {
			transform: translateY(-40px);
		}
		80%,
		100% {
			transform: translateY(0px);
		}
	}
</style>
