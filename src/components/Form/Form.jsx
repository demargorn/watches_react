import { useState } from 'react';
import Button from '../Button/Button';
import './Form.css';

const Form = ({ onAdded }) => {
   const [formData, setFormData] = useState({
      name: '',
      timeZone: 0,
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      onAdded(formData);
      setFormData({
         name: '',
         timeZone: 0,
      });
   };

   return (
      <form className='mb-3 form' onSubmit={handleSubmit}>
         <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
               Название
            </label>
            <input
               type='text'
               id='name'
               name='name'              
               placeholder='введите название'
               className='form-control form-control-lg'
               value={formData.name}
               onChange={handleInputChange}
               required
            />
         </div>
         <div className='mb-3'>
            <label htmlFor='timeZone' className='form-label'>
               Временная зона
            </label>
            <input
               type='number'
               id='timeZone'
               name='timeZone'
               className='form-control form-control-lg'
               value={formData.timeZone}
               onChange={handleInputChange}
            />
         </div>
         <Button className='send-btn'>Добавить</Button>
      </form>
   );
};

export default Form;
