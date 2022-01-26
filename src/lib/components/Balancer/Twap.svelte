<script>
	import { Button, FormGroup, Label, Icon, Progress } from 'sveltestrap';

	export let data;

	let twapKind = 0;

	$: twapKind;

    const calculateProgress_old = (val1, val2, twap) => {
        const normalized = (twap - val1) / (val2 - val1) * 100;
        const ret = {};
        ret.val0 = normalized;
        ret.val1 = 100 - normalized;
        return ret;
    }

	const calculateProgress = (val1, val2, twap) => {
		const deviation = (twap / 2) / val1;
		const ret = {};
		ret.val0 = 50 * deviation;
		ret.val1 = 100 - ret.val0;
		return ret;
	}

    $: progress = calculateProgress(data[twapKind].liqPrice0.price,data[twapKind].liqPrice1.price,data[twapKind]['twap']);
</script>

<FormGroup>
	<Label><small>TWAP :</small></Label>
	<Button size="sm" outline color="secondary">{data[twapKind]['twap'].toFixed(4)}</Button> / <Button
		size="sm"
		outline
		color={data[twapKind].liqPrice0.risk}>{data[twapKind].liqPrice0.price.toFixed(4)}</Button
	> - <Button size="sm" outline color={data[twapKind].liqPrice1.risk}
		>{data[twapKind].liqPrice1.price.toFixed(4)}</Button
	><Button outline
		size="sm"
		on:click={() => {
			twapKind ? (twapKind = 0) : (twapKind = 1);
		}}><Icon name="arrow-clockwise" /></Button
	>
</FormGroup>
<Progress multi>
    <Progress bar color="{data[twapKind].liqPrice0.risk}" value={progress.val0} max={100} class="text-light">{progress.val0.toFixed(0)}%</Progress>
    <Progress bar color="light" value={1} max={100}></Progress>
    <Progress bar color="{data[twapKind].liqPrice1.risk}" value={progress.val1} max={100} class="text-light">{progress.val1.toFixed(0)}%</Progress>
</Progress>
