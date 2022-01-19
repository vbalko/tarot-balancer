<script>
	import { Button, FormGroup, Label, Icon } from 'sveltestrap';

	export let data;

	let twapKind = 0;

	$: twapKind;
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
