
import { Container} from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryform';

function App() {
  return (
   <Container>
     <MainHeader title='Budget'/>
     <DisplayBalance title='Your status' value='1500' size='small' />
      <DisplayBalances />
      <MainHeader title='History' type='h3' />
      <EntryLine description= "income" value="10"/>
      <EntryLine description= "expense" value="10" isExpense/>
      <EntryLine description= "income" value="10"/>
      <EntryLine description= "expense" value="10" isExpense/>
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm/>
     </Container>
  );
}

export default App;
