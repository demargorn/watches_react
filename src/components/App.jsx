import { useState } from 'react';
import Form from './Form/Form';
import DigitalClock from './DigitalClock/DigitalClock';
import './App.css';

let maxId = 100;

const App = () => {
   const [watches, setWatches] = useState([]);

   function createWatch(name, timeZone) {
      return {
         id: maxId++,
         name,
         timeZone,
      };
   }

   const handleAdded = ({ name, timeZone }) => {
      const newWatch = createWatch(name, timeZone);
      setWatches([...watches, newWatch]);
   };

   const handleDeleteWatch = (id) => setWatches(watches.filter((w) => w.id !== id));
   
   return (
      <main className='container-md'>
         <Form onAdded={handleAdded} />
         <section className='container-md'>
            {watches.map((w) => (
               <DigitalClock
                  key={w.id}
                  name={w.name}
                  timeZone={w.timeZone}
                  onDelete={() => handleDeleteWatch(w.id)}
               />
            ))}
         </section>
      </main>
   );
};

export default App;
