<script>
  export let id;
  export let disabled = false;
  export let attributes = {};
</script>

<button
  type="button"
  {id}
  {disabled}
  on:click

  {...attributes}
>
  <slot />
</button>