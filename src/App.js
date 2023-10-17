import Input from "./components/Input";
import Button from "./components/Button";

import {useState} from 'react';
import {Container, Content, Row} from "./style";

const App = () => {
    // Capturando os Numeros na tela
    const [currentNumber, setCurrentNumber] = useState ('0');
    // Capturando os numeros para as operações aritiméticas
    const [firstNumber, setFirstNumber] = useState ('0');

    // Função Limpar tela
    const handleOnClear = () => {
        setCurrentNumber('0');
    };

    // Função para limpar a tela e zerar
    // const handleOnZero = () => {
    //     setCurrentNumber ( '0' )
    // } 

    // Função para captura o valor de cada botão
    const handleAddNumber = (num) => {
        setCurrentNumber(prev => `${num}${prev === '0' ? '' : prev}`);
    }
    // Função Soma
    const handleSumNumbers = () => {
        
        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber) );
            handleOnClear();
        }else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
        }
    }

    return ( 
        <Container>
            <Content>
                <Input value= { currentNumber } />
                <Row>
                    <Button label="CE" onClick = {'handleOnClear'}/>
                    <Button label="C" onClick = {handleOnClear}/>
                    <Button label="/" onClick = {() => handleAddNumber ( '/' )}/>
                    <Button label="X" onClick = {() => handleAddNumber ( '*' )}/>
                </Row>
                <Row>
                    <Button label="7" onClick = {() => handleAddNumber ( '7' )}/>
                    <Button label="8" onClick = {() => handleAddNumber ( '8' )}/>
                    <Button label="9" onClick = {() => handleAddNumber ( '9' )}/>
                    <Button label="+" onClick = {handleSumNumbers }/>
                </Row>
                <Row>
                    <Button label="4" onClick = {() => handleAddNumber ( '4' )}/>
                    <Button label="5" onClick = {() => handleAddNumber ( '5' )}/>
                    <Button label="6" onClick = {() => handleAddNumber ( '6' )}/>
                    <Button label="-" onClick = {() => handleAddNumber ( '-' )}/>
                </Row>
                <Row>
                    <Button label="1" onClick = {() => handleAddNumber ( '1' )}/>
                    <Button label="2" onClick = {() => handleAddNumber ( '2' )}/>
                    <Button label="3" onClick = {() => handleAddNumber ( '3' )}/>
                    <Button label="=" onClick = {''}/>
                </Row>
                
            </Content>
        </Container>
    )
}

export default App;