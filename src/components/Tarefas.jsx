import React from 'react'
import { Info, Users } from 'lucide-react';
import { useState, useEffect } from "react"

const Tarefas = () => {
    const [tarefas, setTarefas] =useState(() =>{
        const salvarTarefa = localStorage.getItem("item-tarefa");
        return salvarTarefa ? JSON.parse(salvarTarefa): [];
    });

    const [campo, setCampo] = useState("");

    useEffect(()=>{
        localStorage.setItem("item-tarefa", JSON.stringify(tarefas));
    }, [tarefas])

    const AdicionarTarefa=(e)=>{
        //previne que a pagina se recarregue
        e.preventDefault();
        //valida o campo se for vazio
        if(!campo.trim()) return;

        const novaTarefa={
            id:Date.now(),
            text:campo,
        };
        setTarefas([...tarefas,novaTarefa])
        setCampo('');
    }
    //Função Remover tarefa
    const RemoverTarefa=(id)=>{
        const apagarTarefa = tarefas.filter((tarefa)=>tarefa.id !==id);
        setTarefas(apagarTarefa);
    }


  return (
    <div className='max-w-md mx-auto mt-10 bg-amber-300 rounded-2xl shadow-lg border border-gray-400 p-2'>
      <h1 className='text-2xl font-bold text-gray-800 mb-4 text-center'>Minha Lista de Tarefas</h1>
      <Info/>
      <Users />
        <form onSubmit={AdicionarTarefa} className='flex gap-2 mb-2'>
            <input type="text" 
            value={campo}
            onChange={(e)=>{setCampo(e.target.value)}}
            placeholder="Digite uma Tarefa"
            className='flex-1 px-4  py-2 border border-r-gray-500 rounded-3xl bg-amber-100 focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-800  focus:border-transparent'
            />
            <button
            className='bg-indigo-700 hover:bg-indigo-500 text-white font medium px-5 py-2 rounded-2xl transition-colors cursor-pointer ' type="submit">Adicionar</button>
        </form>
        <ul className='space-y-3'>
            {tarefas.map((tarefa)=>(
                <li key={tarefa.id}
                className='flex items-center justify-between p-3 bg-gray-200 rounded-4xl shadow-sm hover:bg-amber-200 transition-colors'>
                    <span className='text-black break-all mr-2'>{tarefa.text}</span>
                    <button onClick={()=>RemoverTarefa(tarefa.id)}
                  className='bg-red-700 hover:bg-red-100 hover:text-red-900 text-white font medium px-5 py-2 rounded-2xl transition-colors cursor-pointer ' >Excluir</button>
                </li>
            ))}
        </ul>
        {tarefas.length === 0 && <p className='text-center text-gray-800 italic mt-4'>Nenhuma Tarefa</p>}
    </div>
  )
}

export default Tarefas