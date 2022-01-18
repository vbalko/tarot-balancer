<script>
	import { Card, CardHeader, CardTitle, CardBody, Badge, FormGroup, Input, Label, Tooltip, Popover, Spinner, Button } from 'sveltestrap';
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
        return `<Badge color="primary">${ret.symbol}: ${ret.amountToken.toFixed(2)}</Badge><small> ($ ${ret.amountUSD.toFixed(2)})</small>` ;
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

    const riskClass = (riskClassRaw) => {
        if (riskClassRaw == 0) {
            return 'success';
        }
        if (riskClassRaw == 1) {
            return 'light';
        }   
        if (riskClassRaw == 2) {
            return 'info';
        }     
        if (riskClassRaw == 3) {
            return 'primary';
        }
        if (riskClassRaw == 4) {
            return 'warning';
        } else {
            return 'danger';
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
                <!-- <Badge color="primary">{(value.totalCollateralLP).toFixed(2)}</Badge> / <small>${value.totalCollateral.toFixed(3)} ({value.LPPrice.toFixed(2)})</small> -->
                <Badge color="primary">{(value.totalCollateralLP).toFixed(2)}</Badge> / <small>${value.debankInfo.asset_usd_value.toFixed(3)} ({value.debankInfo.LPPrice.toFixed(2)})</small>
            </FormGroup>
            <FormGroup>
                <Label>Total Debt:</Label>
                <!-- <Badge color="danger" >${(value.totalBorrowed).toFixed(2)}</Badge> / <small>${(value.totalEquity).toFixed(2)} ({(value.totalCollateral  / value.totalEquity).toFixed(2)}x)</small> -->
                <Badge color="danger" >${(value.totalBorrowed).toFixed(2)}</Badge> / <small>${(value.totalEquity).toFixed(2)} </small>
            </FormGroup>
            <FormGroup>
                <Label id={`b${value.address}-${value.token0.symbol}`}>{value.token0.symbol} borr:</Label>
                <!-- <Badge color="secondary">{value.token0._borrowed.toFixed(3)}</Badge> <small>${(value.token0.geckoPrice * value.token0._borrowed).toFixed(2)}</small> -->
                <Badge color="secondary">{value.debankInfo.token0.borrow_quantity.toFixed(3)}</Badge> <small>${value.debankInfo.token0.borrow_amount.toFixed(2)}</small>
                <Popover target={`b${value.address}-${value.token0.symbol}`} top>({value.debankInfo.token0.ratio},{1 / value.debankInfo.token0.ratio_usd}) | {value.token0rate * value.debankInfo.token0.ratio} | {value.token0rate / value.debankInfo.token0.ratio}</Popover>
            </FormGroup>   
            <!-- <FormGroup>
                <Label id={`b${value.address}-${value.token0.symbol}_rate`}>{value.token0.symbol} rate:</Label>
                <Badge color="dark">{w3utils.tokenToPrecision(value.token0off,18)}</Badge> / ${((w3utils.tokenToPrecision(value.token0off - value.token1.borrowed,18)) * value.token0.geckoPrice).toFixed(2)}
                <Popover target={`b${value.address}-${value.token0.symbol}_rate`} top>{value.token0rate}</Popover>
            </FormGroup>                 -->
            <FormGroup>
                <Label id={`c${value.address}-${value.token1.symbol}`}>{value.token1.symbol} borr:</Label>
                <!-- <Badge color="secondary">{value.token1._borrowed.toFixed(3)}</Badge> <small>${(value.token1.geckoPrice * value.token1._borrowed).toFixed(2)}</small> -->
                <Badge color="secondary">{value.debankInfo.token1.borrow_quantity.toFixed(3)}</Badge> <small>${value.debankInfo.token1.borrow_amount.toFixed(2)}</small>
                <Popover target={`c${value.address}-${value.token1.symbol}`} top>({value.debankInfo.token1.ratio},{1 / value.debankInfo.token1.ratio_usd}) | {value.token1rate * value.debankInfo.token1.ratio} | {value.token1rate / value.debankInfo.token1.ratio}</Popover>
            </FormGroup>    
            <FormGroup>
                <Label id={`b${value.address}-${value.token1.symbol}_rate`}>TWAP :</Label>
                <Button outline color="secondary">{value.token0rate.toFixed(4)}</Button> / <Button outline color="{riskClass(value.liqPrices0.risk[0])}">{value.liqPrices0.price[0].toFixed(4)}</Button> - <Button outline color="{riskClass(value.liqPrices0.risk[1])}">{value.liqPrices0.price[1].toFixed(4)}</Button>
                <Popover target={`b${value.address}-${value.token1.symbol}_rate`} top>{value.token1rate}</Popover>
            </FormGroup>
            <FormGroup>
                <Label id={`b${value.address}-${value.token1.symbol}_rate`}>TWAP :</Label>
                <Button outline  color="secondary">{value.token1rate.toFixed(4)}</Button> / <Button outline color="{riskClass(value.liqPrices1.risk[0])}">{value.liqPrices1.price[0].toFixed(4)}</Button> - <Button outline color="{riskClass(value.liqPrices1.risk[1])}">{value.liqPrices1.price[1].toFixed(4)}</Button>
                <Popover target={`b${value.address}-${value.token1.symbol}_rate`} top>{value.token1rate}</Popover>
            </FormGroup>                 
            Rebalance: <h4><Badge color="info">{@html calculateRebalance(value.token0,value.token1)}</Badge></h4>    
            Debt Ratio: <Badge color="{getDangerClass(value.debankInfo.debt_ratio)}">{(value.debankInfo.debt_ratio  * 100).toFixed(2)} % ({(value.totalCollateral  / value.totalEquity).toFixed(2)}x)</Badge>                  
			
		</CardBody>
	{/await}
</Card>
