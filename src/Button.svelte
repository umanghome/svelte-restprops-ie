<script>
  export let id;
  export let disabled = false;
</script>

<button
  type="button"
  {id}
  {disabled}
  on:click
>
  <slot />
</button>