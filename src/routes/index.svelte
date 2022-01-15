<script>
  import SignInForm from "$lib/components/SignInForm.svelte";
  import Balancer from '$lib/components/Balancer/index.svelte';
	import {
		connected,
		provider,
		signer,
		signerAddress,
		defaultEvmStores
	} from 'svelte-ethers-store';
  async function handleConnect(address) {
    console.log('ok');
    alert('ok');
  }

  $: network = $connected ? $provider.getNetwork() : ''
  $: account = $connected && $signer ? $signer.getAddress() : ''
</script>

{#if !$connected}
  <SignInForm on:connect={handleConnect}/>
{:else}
<!-- <p>
  Well done, you are now connected to the blockchain (account {$signerAddress})

  {#await network}
    <span>waiting...</span>
  {:then value}
    <span>{JSON.stringify(value)}</span>
  {/await}

  {#await account}
    <span>waiting...</span>
  {:then value}
    with {#if value}account {value}{:else}no account{/if}
  {/await} -->
  <Balancer></Balancer>
<!-- </p> -->
{/if}