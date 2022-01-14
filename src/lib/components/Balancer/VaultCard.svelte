<script>
	import { Card, CardHeader, CardTitle, CardBody, Badge, FormGroup, Input, Label, Tooltip, Popover } from 'sveltestrap';
	import { TarotUtils, w3utils } from '$lib/utils/tarot/tarotUtils';
	export let data;

	const promise = TarotUtils.cTarotInfo(data.contract_address);
</script>

<Card>
	{#await promise}
		Reading...
	{:then value}
		<CardHeader>
			<CardTitle id={`a${value.address}`}>{`${value.dex} ${value.LPName}`}</CardTitle>
            <Popover target={`a${value.address}`} top>{value.address}</Popover>
		</CardHeader>
		<CardBody>
            <FormGroup>
                <Label>Total Collateral:</Label>
                <Badge color="primary">{value.totalCollateral}</Badge>
            </FormGroup>
            <FormGroup>
                <Label id={`b${value.address}-${value.token0.symbol}`}>{value.token0.symbol} borrowed:</Label>
                <Badge color="dark">{w3utils.tokenToPrecision(value.token0.borrowed,18)}</Badge>
                <Popover target={`b${value.address}-${value.token0.symbol}`} top>{value.token0.bTarot}</Popover>
            </FormGroup>      
            <FormGroup>
                <Label id={`c${value.address}-${value.token1.symbol}`}>{value.token1.symbol} borrowed:</Label>
                <Badge color="dark">{w3utils.tokenToPrecision(value.token1.borrowed,18)}</Badge>
                <Popover target={`c${value.address}-${value.token1.symbol}`} top>{value.token1.bTarot}</Popover>
            </FormGroup>                    
			
		</CardBody>
	{/await}
</Card>
