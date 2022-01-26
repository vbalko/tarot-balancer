<script>
	import { getContext, createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import {
		Toast,
		ToastHeader,
		ToastBody,
		InputGroup,
		Input,
		InputGroupText,
		Button,
		Icon,
		Styles,
        Container,
        Col,
        Row

	} from 'sveltestrap';
	import { ethers } from 'ethers';
	import {
		connected,
		provider,
		signer,
		signerAddress,
		defaultEvmStores
	} from 'svelte-ethers-store';	
	// import { W3 } from '../utils/web3';

	const dispatch = createEventDispatcher();

	let config = getContext('config');
	// const w3 = new W3();


	
	let isOpen = false;
	// let invalidAddress = false;
	// $: {
	// 	validateAddress($config.address);
	// }
	const validateAddress = (address) => {
		// debugger;
		console.log(address);
		// if (address === '') return false;
		const valid = ethers.utils.isAddress(address);
		// invalidAddress = !valid;
		return valid;
	};

	const inspectSubmit = () => {
		// const validAddress = validateAddress($config.w3.address);
		if (validAddress) {
			dispatch('inspect');
		} else {
			isOpen = true;
		}
	};

	let validAddress = false;
	// $: validAddress = validateAddress($config.w3.address);
	// defaultEvmStores.setProvider();
	// console.log('signerAddress:::: ',$signerAddress);
</script>

<!-- <Styles /> -->
    <Container>	
        <Row>
            <Col>
        <InputGroup size="lg" lg-3>
		<InputGroupText><Icon name="person" /></InputGroupText>
		<Input 
			id="input_address"
			placeholder="Enter address to inspect"
			type="text"
			invalid={false}
			feedback="invalid address"
			value={$signerAddress}
		/>
		{#if validAddress}
			<div in:fly={{duration:1400}}>
				<Button  on:click={inspectSubmit}>Inspect</Button>
			</div>			
		{/if}
		<Button
			on:click={async () => {
				dispatch('inspect');
				// const w3data = await w3.getConnectedData();
				// $config.w3 = w3data;
			}}>Connect</Button>
	</InputGroup>
	<Toast
		{isOpen}
		class="bg-danger"
		on:open={() => {
			setTimeout(() => {
				isOpen = false;
			}, 5000);
		}}
	>
		<ToastHeader>Address invalid</ToastHeader>
		<ToastBody>Please input correct ETH address.</ToastBody>
	</Toast>
</Col>
</Row>
    </Container>
