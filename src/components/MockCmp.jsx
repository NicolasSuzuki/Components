import Button from './Button';
const MockCmp = () => {
   return (
    <div style={{ border: '1px solid black', padding: '10px'}}>
      <div style={{ border: '1px solid black', padding: '10px'}}>
         Button com label, sem icon
         <Button key="button1" label="Button" />
      </div>

      <div style={{ border: '1px solid black', padding: '10px'}}>
         Button sem label, com icon
         <Button key="button2" icon="🔍" />
      </div>
      
      <div style={{ border: '1px solid black', padding: '10px'}}>
         Button com label e com icon a esquerda
         <Button key="button3" label="icon esq" icon="🔍" />
      </div>

      <div style={{ border: '1px solid black', padding: '10px'}}>
         Button com label e com icon a direita
         <Button key="button3" label="icon dir" iconPosition="right" icon="🔍" />
      </div>
      fim da pagina do mock
    </div>
   ) 
}

export default MockCmp