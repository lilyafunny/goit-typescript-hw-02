import React, { useState } from "react"
import toast from "react-hot-toast";
import s from './SearchBar.module.css'

interface Props {
    onSubmit: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {

    const [value, setValue] = useState<string>('');

    const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value.trim()) {
            toast.error('Please enter a query!');
            return;
        }
        onSubmit(value.trim());
        setValue('');
    }

    return (


        <header className={s.header}>
            <form onSubmit={handlSubmit}>
                <input className={s.formInput} onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={s.btnS} type="submit">Search</button>
            </form>
        </header>


    )

}

export default SearchBar
