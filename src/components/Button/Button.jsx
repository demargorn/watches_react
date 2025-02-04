import Btn from 'react-bootstrap/Button';

const Button = ({ className, children }) => {
   return (
      <Btn type='submit' variant='primary' size='sm' className={className}>
         {children}
      </Btn>
   );
};

export default Button;
