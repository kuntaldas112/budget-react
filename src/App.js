import './App.css';
import MainHeader from './components/MainHeader'
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel'
import { Container, Form, Grid, GridColumn, Icon, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react'
import NewEntryForm from './components/NewEntryForm';
import DisplayBlance from './components/DisplayBlance';
import EntryLine from './components/EntryLine';
function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBlance size='small' label='Your Balance:' value='2,550.54'></DisplayBlance>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Column>
            <DisplayBlance size='tiny' color="green" label='incoming' value='1045.50'></DisplayBlance>
          </Grid.Column>
          <Grid.Column>
            <DisplayBlance size='tiny' color="red" label='expenses' value='630.50'></DisplayBlance>
          </Grid.Column>
        </Grid>
      </Segment>
      <MainHeader title="History" type="h3" />
      <EntryLine value='$11.00' description='income'></EntryLine>
      <EntryLine value='$11.00' description='income' ></EntryLine>
      <EntryLine value='$11.00' description='expense' isExpense></EntryLine>
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
