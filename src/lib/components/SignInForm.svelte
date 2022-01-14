<script>
	import { Button, Col, Container, Row } from 'sveltestrap';
	//import { defaultEvmStores } from 'svelte-ethers-store';
	import { ethers } from 'ethers';
	import {
		connected,
		provider,
		signer,
		signerAddress,
		defaultEvmStores
	} from 'svelte-ethers-store';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	var address = '';
	let pending = false;

	const connect = async () => {
		pending = true;
		try {
			const handler = {
				Browser: () => defaultEvmStores.setProvider(),
				Localhost: () => defaultEvmStores.setProvider('http://127.0.0.1:8545'),
				Localhost4: () => defaultEvmStores.setProvider('http://127.0.0.1:8545', 4),
				RPC: () => defaultEvmStores.setProvider('https://rpc.xdaichain.com/'),
				Infura: () => defaultEvmStores.setProvider(new ethers.providers.InfuraProvider('ropsten')),
				Etherscan: () =>
					defaultEvmStores.setProvider(new ethers.providers.EtherscanProvider('rinkeby')),
				Alchemy: () =>
					defaultEvmStores.setProvider(new ethers.providers.AlchemyProvider('ropsten')),
				Clouflare: () => defaultEvmStores.setProvider(new ethers.providers.CloudflareProvider())
			};

			await handler['Browser']();

			console.log('$connected', defaultEvmStores.$connected);
			console.log('$provider', defaultEvmStores.$provider);
			console.log('$signer', defaultEvmStores.$signer);
			pending = false;
		} catch (e) {
			console.log(e);
			pending = false;
		}
	};

  const enable = async () => {
    pending = true
    let WalletConnectProvider = window.WalletConnectProvider.default
    const provider = new WalletConnectProvider({
      infuraId: import.meta.env.VITE_INFURA_API_KEY
    })
    //  Enable session (triggers QR Code modal)
    await provider.enable();
    defaultEvmStores.setProvider(provider)
    pending = false
  }

  const disconnect = async () => {
    await defaultEvmStores.disconnect()
    pending = false
  }

  $: network = $connected ? $provider.getNetwork() : ''
  $: account = $connected && $signer ? $signer.getAddress() : ''


	function connect1() {
		console.log('connect');
		//defaultEvmStores.setProvider();
		// address =
		dispatch('connect', { address });
	}
</script>

<Container fluid style="background:linear-gradient(to bottom, #0f0c29, #302b63">
	<Row class="min-vh-100 justify-content-center align-items-center">
		<Col>
			<h1>
				<Button
					color="primary"
					class="position-absolute top-50 start-50 translate-middle"
					on:click={connect}>Connect Wallet</Button
				>
			</h1>
		</Col>
	</Row>
</Container>

{#if pending} Connecting... 
{:else} Please connect
{/if}

{#if $connected}
	<p>
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
		{/await}
	</p>

	<button on:click={disconnect}> Disconnect </button>
{/if}
