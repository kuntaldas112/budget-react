import './App.css';
import MainHeader from './components/MainHeader'
import { Container,Grid, Segment} from 'semantic-ui-react'
import NewEntryForm from './components/NewEntryForm';
import DisplayBlance from './components/DisplayBlance';
import EntryLine from './components/EntryLine';
import { useState,useEffect } from 'react';
import ModalEdit from './components/ModalEdit';
function App() {
  const [isOpen,setIsOpen]=useState(false)
  const [description,setDescription]=useState('');
  const [value,setValue]=useState('');
  const [isExpense,setIsExpense]=useState(true)
  const [entries,setEntries]=useState(initialEntries);
  const [entryId,setEntryId]=useState();
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [total, setTotal] = useState(0);
  function delete_entries(id){
    let result=entries.filter(entry=>entry.id!==id);
    setEntries(result);
  }
  function editEntry(id){
    console.log("edit entry for id "+id);
    if(id){
      setEntryId(id);
      let index=entries.findIndex(ent=>ent.id===id);
      let entry=entries[index];
      setDescription(entry.description);
      setIsExpense(entry.isExpense);
      setValue(entry.value)
      setIsOpen(true);
    }
  }
  function addEntry(){
 
    const result=entries.concat({
      id:entries.length+1,
      description,
      value,
      isExpense
    })
    setEntries(result);
    resetFields();
  }
  useEffect(() => {
    if(!isOpen && entryId){
      const index=entries.findIndex(entry=>entry.id===entryId)
      const newEntries=[...entries];
      newEntries[index].description=description;
      newEntries[index].isExpense=isExpense;
      newEntries[index].value=value;
      console.log(newEntries)
      setEntries(newEntries);
     resetFields();
    }
  }, [isOpen]);
  function resetFields(){
    setValue('');
    setDescription('');
    setIsExpense(true);
  }
  useEffect(()=>{
   let totalExpenses=0;
    let totalIncomes=0;
    entries.forEach(entry=>{
      if(entry.isExpense){
        totalExpenses+=Number(entry.value);
      }else{
        totalIncomes+=Number(entry.value);
      }
    })
    setTotalExpenses(totalExpenses);
    setTotalIncomes(totalIncomes);
    setTotal(totalIncomes-totalExpenses);
    console.log("total expanses "+ totalExpenses+" total incomes "+totalIncomes)
  },[entries])
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBlance size='small' label='Your Balance:' value={(total).toLocaleString('en-IN', { 
		style: 'currency', 
		currency: 'INR' 
	})}></DisplayBlance>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Column>
            <DisplayBlance size='tiny' color="green" label='incoming' value={(totalIncomes).toLocaleString('en-IN', { 
		style: 'currency', 
		currency: 'INR' 
	})}></DisplayBlance>
          </Grid.Column>
          <Grid.Column>
            <DisplayBlance size='tiny' color="red" label='expenses' value={(totalExpenses).toLocaleString('en-IN', { 
		style: 'currency', 
		currency: 'INR' 
	})}></DisplayBlance>
          </Grid.Column>
        </Grid>
      </Segment>
      <MainHeader title="History" type="h3" />
      {entries.map(entry => {
        return <EntryLine 
          key={entry.id}
          entry={entry}
          deleteEntries={delete_entries}
          editEntry={editEntry}
        ></EntryLine>

      })}
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} description={description}
       value={value}
        isExpense={isExpense}
      setDescription={setDescription}
       setValue={setValue}
        setIsExpense={setIsExpense}/>
        <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} description={description}
       value={value}
        isExpense={isExpense}
      setDescription={setDescription}
       setValue={setValue}
        setIsExpense={setIsExpense}/>
    </Container>
  );
}

export default App;
var initialEntries = [
  {
    id: 1,
    value: 90000,
    description: 'salary',
    isExpense: false
  },
  {
    id: 2,
    value: 2500,
    description: 'insurance bill',
    isExpense: true
  },
  {
    id: 3,
    value: 3000,
    description: 'MF investment',
    isExpense: true
  },
  {
    id: 4,
    value: 800,
    description: 'internet bill',
    isExpense: true
  },
  {
    id: 5,
    value: 200,
    description: 'interest credit',
    isExpense: false
  },
  {
    id: 6,
    value: 5000,
    description: 'stock investment',
    isExpense: true
  },
  {
    id: 7,
    value: 1800,
    description: 'EPF',
    isExpense: true
  }
  
];