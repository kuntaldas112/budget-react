import './App.css';
import {Button, Container, Form, Grid, GridColumn, Header, Icon, Segment, Statistic, StatisticLabel, StatisticValue} from 'semantic-ui-react'
function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size='small'>
        <StatisticLabel>Your Balance:</StatisticLabel>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>  
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Column>
            <Statistic size='tiny' color="green">
              <Statistic.Label >incoming</Statistic.Label>
              <StatisticValue>1045.50</StatisticValue>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
          <Statistic size='tiny' color="red">
              <Statistic.Label >expenses</Statistic.Label>
              <StatisticValue>630.50</StatisticValue>
            </Statistic>
          </Grid.Column>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={7} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3}>$10.00</Grid.Column>
            <GridColumn width={6}>
              <Icon name='edit' bordered></Icon>
              <Icon name='trash' bordered></Icon>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
          width={4}
          label="value"
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          ></Form.Input>
        </Form.Group>
        <Form.Group>
          <Button.Group style={{marginTop:10}}>
            <Button>Cancel</Button>
            <Button.Or/>
            <Button primary>Ok</Button>
          </Button.Group>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
