<script>
	import { Button, Col, Container, Row, Image } from 'sveltestrap';
	//import { defaultEvmStores } from 'svelte-ethers-store';
	import { ethers } from 'ethers';
	import AddressForm from '$lib/components/AddressForm/index.svelte';
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
			// console.log('$provider', defaultEvmStores.$provider);
			// console.log('$signer', defaultEvmStores.$signer);
			pending = false;
		} catch (e) {
			console.log(e);
			pending = false;
		}
	};

	const enable = async () => {
		pending = true;
		let WalletConnectProvider = window.WalletConnectProvider.default;
		const provider = new WalletConnectProvider({
			infuraId: import.meta.env.VITE_INFURA_API_KEY
		});
		//  Enable session (triggers QR Code modal)
		await provider.enable();
		defaultEvmStores.setProvider(provider);
		pending = false;
	};

	const disconnect = async () => {
		await defaultEvmStores.disconnect();
		pending = false;
	};

	$: network = $connected ? $provider.getNetwork() : '';
	$: account = $connected && $signer ? $signer.getAddress() : '';

	function connect1() {
		console.log('connect');
		//defaultEvmStores.setProvider();
		// address =
		dispatch('connect', { address });
	}
</script>

<Container fluid>
	<Row class="justify-content-center align-items-center">
		<!-- <Image class="rotate" style="width:20%; margin-bottom:-20%;" src="./tarot-balancer-logo.png" /> -->
		<img class="pulse " style="min-width:20%; margin-bottom:-20%;" src="./tarot-balancer-logo.png" />
	</Row>
	<Row class="min-vh-100 justify-content-center align-items-center">
		<Col>
			<AddressForm on:inspect={connect} />
			<h1>
				<!-- <Button
					color="primary"
					class="position-absolute top-50 start-50 translate-middle"
					on:click={connect}>Connect Wallet</Button
				> -->
			</h1>
		</Col>
	</Row>
</Container>

{#if pending}
	Connecting...
{:else}
	Please connect
{/if}

<style>
	.rotate {
		animation: rotation 8s infinite linear;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}

	@-webkit-keyframes pulseGlow {
    0% {
        box-shadow: none;
    }
    20% {
        box-shadow: 0 0 120px 75px rgba(243, 243, 243, 0.1);
        border-color: rgba(3, 24, 51, 0.3);
    }
    80% {
        box-shadow: none;
    }
}


.pulse {
  /* position: absolute; */
  top: 10%;
  left: 45%;
    width: 100px;
    border-radius: 50%;
    -webkit-animation: pulseGlow 2s ease-in-out 1s infinite;
}

</style>
