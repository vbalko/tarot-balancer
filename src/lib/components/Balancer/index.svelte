<script>
	import { connected, signer, signerAddress } from 'svelte-ethers-store';
	import { CovalentAPI } from '$lib/utils/covalentapi';
	import Dashboard from './Dashboard.svelte';
import { Spinner, Container, Row, Col } from 'sveltestrap';
	// import { dataset_dev, dirty_components } from 'svelte/internal';

	//$: account = $connected && $signer ? $signer.getAddress() : '';
	console.log(`signerAddress ${$signerAddress}`);
	const tarotData = CovalentAPI.getBalances($signerAddress);

	const getTarotRecords = (data) => {
		let items = data.items;
		let ret = items.filter(item => item.contract_ticker_symbol == 'cTAROT');
		return ret;
	}

</script>

{#await tarotData}
<Container fluid >
	<!-- <Row class="justify-content-center align-items-center">
		<h1 style="width:20%; margin-bottom:-20%;">
			Getting data...
		</h1>
	</Row>	 -->
	<Row class=" justify-content-center align-items-center">
		<Col>
			<h1 >
				<Spinner type="grow" color="primary" style="width: 5rem; height: 5rem; margin-left: 50%; margin-bottom:-20%;"></Spinner>
			</h1>
		</Col>
	</Row>
</Container>
	
	
{:then pData}
	<Dashboard data={getTarotRecords(pData)}/>
{/await}
