<script lang="ts">
	import type { PageData } from "./$types";

	interface FetchedData {
		"ID Nation": string;
		Nation: string;
		"ID Year": number;
		Year: string;
		Population: number;
		"Slug Nation": string;
	}

	export let data: PageData;
	const fetchedData: FetchedData[] = data.data;
</script>

<main id="main-container">
	<div id="posts-container">
		{#each fetchedData as data}
			<a id="post-container" href="https://github.com/sveltejs/kit" class="single-post-container">
				<div id="title-container">
					<h1 id="post-title">
						{data["ID Nation"]}
						{#if data["ID Year"] % 2 === 0}
							/ Will Render Incorrectly
						{:else}
							/ Will Render Correctly
						{/if}
					</h1>
					<div id="post-details">
						<h2 id="post-last_saved_at" class="post-container-subtitle">
							{data["ID Year"]}
						</h2>
						<h2 id="post-status" class="post-container-subtitle">
							{data.Nation}
						</h2>
						{#if data["ID Year"] % 2 === 0}
							<a id="post-website-link" class="post-container-subtitle" href="https://github.com/sveltejs/kit/issues">
								Inner Link
							</a>
						{/if}
					</div>
				</div>
			</a>
		{/each}
	</div>
</main>

<style>
	#main-container {
		padding: 2em 0;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: center;
	}

	.single-post-container {
		border: 1px solid;
		border-bottom: 3px solid;
		margin: 0 0 0.5em 0;
		overflow: hidden;
		background-color: var(--almost-white);
		transition: background-color 0.3s ease;
	}

	.single-post-container:hover {
		background-color: #dbdbdb;
	}

	#posts-container {
		display: flex;
		flex-direction: column;
		width: 90%;
	}

	#post-title {
		font-size: 0.8em;
		font-weight: 700;
		margin-bottom: 0.1em;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		line-height: 115%;
	}

	#post-title:empty {
		content: "Untitled Post";
		color: var(--almost-white);
	}

	#post-title:hover {
		text-decoration: underline;
	}

	#post-details {
		display: flex;
	}

	.post-container-subtitle {
		font-size: 0.5em;
		font-weight: 500;
		margin-right: 1em;
	}

	#post-website-link {
		color: #626262;
		display: inline;
	}

	#post-container {
		padding: 0.5em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: 6px solid;
		position: relative;
	}

	#title-container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
