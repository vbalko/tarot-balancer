<script>
	import { connected, signer, signerAddress } from 'svelte-ethers-store';
	import { CovalentAPI } from '$lib/utils/covalentapi';
	import Dashboard from './Dashboard.svelte';
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
	Getting data...
{:then pData}
	<Dashboard data={getTarotRecords(pData)}/>
{/await}
