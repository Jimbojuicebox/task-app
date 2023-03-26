import { useState } from 'react';
import styles from './header.module.css';
import todoLogo from '../../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header({ onAddTask }) {
    const [title, setTitle] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        onAddTask(title)
        setTitle('')
    }

    function onChangeTitle(e) {
        setTitle(e.target.value)
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} />
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input placeholder="Add a new task" type="text" value={title} onChange={onChangeTitle} />
                <button>Create <AiOutlinePlusCircle size={20} /></button>
            </form>
        </header>
  )
}

