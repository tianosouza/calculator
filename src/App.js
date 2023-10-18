import Input from "./components/Input";
import Button from "./components/Button";

import {useState} from 'react';
import {Container, Content, Row} from "./style";


const App = () => {
    // Capturando os Numeros na tela
    const [currentNumber, setCurrentNumber] = useState ('0');
    // Capturando os numeros para as operações aritméticas
    const [firstNumber, setFirstNumber] = useState ('0');
    // Operação resultado
    const [operation, setOperation] = useState ('');

    // Função Limpar tela
    const handleOnClear = () => {
        setCurrentNumber('');
        setFirstNumber('0');
        setOperation('');
    };

    //Função para limpar a tela e zerar
    const handleOnZero = () => {
        setCurrentNumber ( '0' )
    } 

    // Função para captura o valor de cada botão
    const handleAddNumber = (num) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
    // Função Soma
    const handleSumNumbers = () => {
        
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber) );
            setCurrentNumber('');
            setOperation('+');
        }else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            setOperation('');
        }
    }

    const handleRemNumbers = () => {
        
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber) );
            setCurrentNumber('');
            setOperation('-');
        }else {
            const rem = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(rem));
            setOperation('');
        }
    }

    const handleDivNumbers = () => {
        
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber) );
            setCurrentNumber('');
            setOperation('/');
        }else {
            const div = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(div));
            setOperation('');
        }
    }

    const handleMulNumbers = () => {
        
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber) );
            setCurrentNumber('');
            setOperation('*');
        }else {
            const mul = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(mul));
            setOperation('');
        }
    }

    

    const handleEquals = () => {
        
        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0' ) {
            switch (operation) {
                case '+':
                    handleSumNumbers();
                    break;
                case '-':
                    handleRemNumbers();
                    break;
                case '/':
                    handleDivNumbers();
                    break;
                case '*':
                    handleMulNumbers();
                    break;
                
                    default:
                    break;
            }
        }
    }

    

    return ( 
        <Container>
            <Content>
                <Input value= { currentNumber } />
                <Row>
                    <Button label="CE" onClick = {handleOnZero}/>
                    <Button label="C" onClick = {handleOnClear}/>
                    <Button label="/" onClick = {handleDivNumbers}/>
                    <Button label="*" onClick = {handleMulNumbers}/>
                </Row>
                <Row>
                    <Button label="7" onClick = {() => handleAddNumber ( '7' )}/>
                    <Button label="8" onClick = {() => handleAddNumber ( '8' )}/>
                    <Button label="9" onClick = {() => handleAddNumber ( '9' )}/>
                    <Button label="+" onClick = { handleSumNumbers }/>
                </Row>
                <Row>
                    <Button label="4" onClick = {() => handleAddNumber ( '4' )}/>
                    <Button label="5" onClick = {() => handleAddNumber ( '5' )}/>
                    <Button label="6" onClick = {() => handleAddNumber ( '6' )}/>
                    <Button label="-" onClick = {handleRemNumbers}/>
                </Row>
                <Row>
                    <Button label="1" onClick = {() => handleAddNumber ( '1' )}/>
                    <Button label="2" onClick = {() => handleAddNumber ( '2' )}/>
                    <Button label="3" onClick = {() => handleAddNumber ( '3' )}/>
                    <Button label="=" onClick = {handleEquals}/>
                </Row>
                
            </Content>
        </Container>
    )
}

export default App;