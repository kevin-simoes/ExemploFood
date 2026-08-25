import { useState,useEffect } from "react"

const Tarefas = () => {
    //HOOK - useState para armazenar a tarefa
    const [tarefas, setTarefas]= useState(() =>{
    //LOCALSTORAGE
    const salvarTarefa = localStorage.getItem("item-tarefa")
    return salvarTarefa ? JSON.parse(salvarTarefa):[];

    });
    //useState para o campo da tarefa
    const [campo, setCampo]=useState("");

    //HOOK useEffect - realiza o efeito colateral, no exemplo ao cadastrar a tarefa aparece na tela

    useEffect(()=> {
        localStorage.setItem("item-tarefa", JSON.stringify(tarefas));
    }, [tarefas])

    //Função Adicionar Tarefa
    const AdicionarTarefa=()=>{
        setTarefas()
    }

  return (
    <>
      
    </>
  )
}

export default Tarefas
