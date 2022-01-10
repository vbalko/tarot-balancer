<script>
  import SignInForm from "$lib/components/SignInForm.svelte";

  async function handleConnect(address) {
    console.log('ok');
    alert('ok');
  }

</script>

<SignInForm on:connect={handleConnect}/>