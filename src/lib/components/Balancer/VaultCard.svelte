<script>
	import { Card, CardHeader, CardTitle, CardBody, Badge, FormGroup, Input, Label, Tooltip, Popover, Spinner } from 'sveltestrap';
	import { TarotUtils, w3utils } from '$lib/utils/tarot/tarotUtils';
	export let data;

	const promise = TarotUtils.cTarotInfo(data.contract_address);

    const calculateRebalance = (token0,token1) => {
        const ret = {};
        ret.amountUSD = (token0.borrowedUSD - token1.borrowedUSD) / 2;
        if (token0.borrowedUSD > token1.borrowedUSD) {
            ret.symbol = token1.symbol;
            ret.amountToken = ret.amountUSD / token1.geckoPrice;
        } else {
            ret.symbol = token0.symbol;
            ret.amountUSD = ret.amountUSD * (-1);
            ret.amountToken = ret.amountUSD / token0.geckoPrice;
        }
        return `<Badge color="primary">${ret.symbol} ${ret.amountToken.toFixed(2)}</Badge><small> ($ ${ret.amountUSD.toFixed(2)})</small>` ;
    };

    const getDangerClass = (ratio) => {
        ratio *= 100;
        if (ratio < 50 ) {
            return "success"
        }
        if (ratio < 60) {
            return "info"
        }
        if (ratio < 75) {
            return "warning"
        } else {
            return "danger"
        }
    }
    const getDebtRatio = (borrowed,collateral) => {
        return borrowed / collateral;
    }
</script>

<Card>
	{#await promise}
		<Spinner color="primary" type="grow"/>
	{:then value}
		<CardHeader>
			<CardTitle id={`a${value.address}`}>{`${value.dex} ${value.LPName}`}</CardTitle>
            <Popover target={`a${value.address}`} top>{value.address}</Popover>
		</CardHeader>
		<CardBody>
            <FormGroup>
                <Label>Total Coll:</Label>
                <Badge color="primary">{(value.totalCollateralLP).toFixed(2)}</Badge> / <small>${value.totalCollateral.toFixed(3)} ({value.LPPrice.toFixed(2)})</small>
            </FormGroup>
            <FormGroup>
                <Label>Total Debt:</Label>
                <Badge color="danger" >${(value.totalBorrowed).toFixed(2)}</Badge> / <small>${(value.totalEquity).toFixed(2)} ({(value.totalCollateral  / value.totalEquity).toFixed(2)}x)</small>
            </FormGroup>
            <FormGroup>
                <Label id={`b${value.address}-${value.token0.symbol}`}>{value.token0.symbol} borr:</Label>
                <Badge color="secondary">{value.token0._borrowed.toFixed(3)}</Badge> <small>${(value.token0.geckoPrice * value.token0._borrowed).toFixed(2)}</small>
                <Popover target={`b${value.address}-${value.token0.symbol}`} top>{value.token0.bTarot}</Popover>
            </FormGroup>   
            <!-- <FormGroup>
                <Label id={`b${value.address}-${value.token0.symbol}_rate`}>{value.token0.symbol} rate:</Label>
                <Badge color="dark">{w3utils.tokenToPrecision(value.token0off,18)}</Badge> / ${((w3utils.tokenToPrecision(value.token0off - value.token1.borrowed,18)) * value.token0.geckoPrice).toFixed(2)}
                <Popover target={`b${value.address}-${value.token0.symbol}_rate`} top>{value.token0rate}</Popover>
            </FormGroup>                 -->
            <FormGroup>
                <Label id={`c${value.address}-${value.token1.symbol}`}>{value.token1.symbol} borr:</Label>
                <Badge color="secondary">{value.token1._borrowed.toFixed(3)}</Badge> <small>${(value.token1.geckoPrice * value.token1._borrowed).toFixed(2)}</small>
                <Popover target={`c${value.address}-${value.token1.symbol}`} top>{value.token1.bTarot}</Popover>
            </FormGroup>    
            <FormGroup>
                <Label id={`b${value.address}-${value.token1.symbol}_rate`}>TWAP price:</Label>
                <Badge color="secondary">{value.token0rate.toFixed(4)}</Badge> / <Badge color="secondary">{value.token1rate.toFixed(4)}</Badge>
                <Popover target={`b${value.address}-${value.token1.symbol}_rate`} top>{value.token1rate}</Popover>
            </FormGroup>    
            Rebalance: <Badge color="info">{@html calculateRebalance(value.token0,value.token1)}</Badge> <br>     
            Debt Ratio: <Badge color="{getDangerClass(getDebtRatio(value.totalBorrowed,value.totalCollateral))}">{(getDebtRatio(value.totalBorrowed,value.totalCollateral)  * 100).toFixed(2)} %</Badge>                  
			
		</CardBody>
	{/await}
</Card>
