<script>
	import Button from './Button.svelte';
	import ButtonWithRestProps from './ButtonWithRestProps.svelte'
	import ButtonWithSpreadAttributes from './ButtonWithSpreadAttributes.svelte'

	let disabled = false;
</script>

<main>
	<div>
		<input type="checkbox" bind:checked={disabled} id="disabled-checkbox">
		<label for="disabled-checkbox">Disabled?</label>
	</div>

	<Button
		{disabled}
		id="my-button"
		method="random"
	>This is a regular button</Button>

	<ButtonWithRestProps
		{disabled}
		id="my-button"
		method="random"
	>This is a button with $$restProps</ButtonWithRestProps>

	<ButtonWithSpreadAttributes
		{disabled}
		id="my-button"
		attributes={{ method: 'random' }}
	>This is a button with spread attributes props</ButtonWithSpreadAttributes>
</main>

<style>
	label {
		display: inline-block;
		cursor: pointer;
	}
</style>