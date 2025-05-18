<nav>
	<span class="_nav__home">home (left)</span>
	<span class="_nav__center">page title</span>
	<ul class="_nav__links">
		<li><a href="/">link 1</a></li>
		<li><a href="/dev/">link 2</a></li>
		<li><a href="/">link 3</a></li>
	</ul>
</nav>

<style>
	nav > * {
		display: flex;
		align-items: center;
	}
	._nav__links {
		display: flex;
		flex-direction: row;
		list-style: none;
	}

	._nav__center {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	._nav__home {
		font-weight: bold;
	}

	nav {
		display: flex;
		flex-direction: row;
		border-radius: 0 0 12px 12px;
		/* border: 1px solid red; */
		box-sizing: border-box;
		padding: 0 12px;
		background-color: #1e2030;
	}
</style>
