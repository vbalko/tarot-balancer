<script>
	import { provider, signer, signerAddress } from 'svelte-ethers-store';
	import { ethers } from 'ethers';
	import { fade, fly, blur, draw } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import {
		Col,
		Container,
		Row,
		Card,
		CardBody,
		CardHeader,
		CardTitle,
		Badge,
		FormGroup,
		Input,
		InputGroup,
		InputGroupText,
		Navbar,
		Nav,
		NavbarToggler,
		NavbarBrand,
		NavItem,
		Button
	} from 'sveltestrap';
	import VaultCard from './VaultCard.svelte';
import Index from '../AddressForm/index.svelte';
import SignInForm from '../SignInForm.svelte';
import Spinner from 'sveltestrap/src/Spinner.svelte';

	export let data = '';

	let dataToShow = data;

	// console.log(data);
	let hideDust = true;
    let refresh = false;

	// $: if (!dataToShow.length) {
    //     //dataToShow = reloadData(data);
    //     console.log(dataToShow.length);
    // } else {
    //     dataToShow = [];
    //     console.log(dataToShow.length);
    // };
	$: {
         hideDust;
        dataToShow = reloadData(data);
    }
	// $: if (hideDust) {
	// 	reloadData(data);
	// } else {
	// 	dataToShow = data;
	// }

	const reloadData = (inputData) => {
		if (hideDust) {
			//dataToShow = dataToShow;
			return inputData.filter((item) => item.balance / 10 ** item.contract_decimals > 1);
		} else {
			return data;
		}
		// refresh = !refresh;
	};

	//dataToShow = reloadData(data);
</script>

<Navbar color="primary" dark>
	<NavbarBrand href="/">Tarot Balancer</NavbarBrand>
	<Nav navbar>
		<NavItem>
			<h5><Badge color="primary">{$signerAddress}</Badge></h5>
		</NavItem>
	</Nav>
</Navbar>
<Container class="py-3">
	<Row>
		<Col>
			<Navbar color="secondary">
				<Nav>
					<InputGroup class="text-light">
						<Input type="switch" label="Hide dust" color="light" bind:checked={hideDust} />
					</InputGroup>
				</Nav>
				<Nav class="ms-auto" navbar>
					<Button
						color="light"
						on:click={() => {
                            // hideDust = !hideDust;
							// dataToShow = [...data];
                            // hideDust = false;
							// dataToShow = reloadData(data);
                            refresh = true;
                            setTimeout(() => {refresh = false}, 100);
						}}>Reload all</Button
					>
				</Nav>
			</Navbar>
		</Col>
	</Row>
    {#if !refresh}
	<Row cols={{ lg: 3, md: 2, sm: 1 }}>
		{#each reloadData(dataToShow) as vault}

			<!-- <div
				animate:flip={{ duration: 800 }}
				in:fly={{ duration: 2500, x: 100, y: 150 }}
				out:fly={{ duration: 400, x: 100, y: 150 }}
			> -->
				<Col class="gy-2">
					<VaultCard data={vault} />
				</Col>
			<!-- </div> -->
		{/each}
	</Row>
    {/if}
</Container>
