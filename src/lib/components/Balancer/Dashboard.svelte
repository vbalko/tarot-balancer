<script>
    import { provider, signer } from 'svelte-ethers-store';
    import { ethers } from 'ethers';
    import { Col, Container, Row, Card, CardBody, CardHeader, CardTitle, Badge } from 'sveltestrap';
    import VaultCard from './VaultCard.svelte';

    export let data = '';
    console.log(data.length);
</script>
<Container>
    <Row class="gy-5" cols={{lg: 3, md: 2, sm: 1}}>
        
        {#each data as vault}
        <Col>
            <VaultCard data={vault}/>
        </Col>
        {/each}
        
    </Row>
</Container>

<h2>Length: {data.length}</h2>