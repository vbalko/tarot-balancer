<script>
	import { provider, signer, signerAddress } from 'svelte-ethers-store';
	import { ethers } from 'ethers';
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
NavItem
	} from 'sveltestrap';
	import VaultCard from './VaultCard.svelte';

	export let data = '';

    let dataToShow = data;

	console.log(data);
    let hideDust = true;
    $: if (hideDust) {
        dataToShow = data.filter(item => (item.balance / 10 ** item.contract_decimals) > 1)
    } else {
        dataToShow = data;
    }

</script>

<Navbar  color="primary" dark >
    <NavbarBrand href="/">Tarot Balancer</NavbarBrand>
    <Nav navbar>
        <NavItem>
            <h5><Badge color="primary">{$signerAddress}</Badge></h5>
        </NavItem>
    </Nav>
</Navbar>
<Container class="py-3">
    <Row>
        <Col >
            <Navbar color="secondary" >
                <InputGroup class="text-light">
                    <Input type="switch" label="Hide dust" color="light" bind:checked={hideDust}/>
                </InputGroup>
            </Navbar>            
        </Col>
    </Row>
	<Row   cols={{ lg: 3, md: 2, sm: 1 }}>
		{#each dataToShow as vault}
			<Col class="gy-2">
				<VaultCard data={vault} />
			</Col>
		{/each}
	</Row>
</Container>
