/* import React, {useState} from "react";

function App(){

  const [numero, setNumero] = useState(0);


  return(
    <div>
      <h1>React Hooks</h1>
      <h2>{numero}</h2>
      <button onClick={() => setNumero(numero+1)}>Aumentar</button>
    </div>
  )
}
export default App;
*/




//useSate e useEffect
import React, {useEffect, useState, useMemo, useCallback} from "react";

function App(){

  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState([''])

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  const [nome, setNome] = useState(['Alcemir'])

  const addTarefa = useCallback(()=>{
    setTarefas([...tarefas, input])
    setInput('');
  }, [input, tarefas]);

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);



  return(
    <div>
      <h1>REACT ROOKS</h1>
      <ul>
        {tarefas.map(tarefas => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
      <strong>Você tem {totalTarefas} Tarefas</strong><br/>

      <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
      <button type="button" onClick={addTarefa}>Adicionar</button>
      <p>{nome}</p>
    </div>
  )
}

export default App;



/*
//CLASS COMPONENT
import React, {Component} from "react";
import './estilo.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.']
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }
  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="frase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}


class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}
export default App;*/