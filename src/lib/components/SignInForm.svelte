<script>
  import { Button, Col, Container, Row } from 'sveltestrap';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  var address = '';

  function connect() {
    console.log('connect');
    dispatch('connect',{address});
  }
</script>

<Container fluid style="background:linear-gradient(to bottom, #0f0c29, #302b63">
  <Row  class="min-vh-100 justify-content-center align-items-center">
    <Col > 
      <h1 ><Button color="primary" class="position-absolute top-50 start-50 translate-middle" on:click={connect} >Connect Wallet</Button></h1>      
    </Col>
  </Row>
 
</Container>