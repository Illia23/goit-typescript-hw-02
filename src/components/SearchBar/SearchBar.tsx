import React, { FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import search from './SearchBar.module.css';

interface SearchFormProps {
  onSearch: (topic: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = (form.elements.namedItem('topic') as HTMLInputElement).value;

    if (topic.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    console.log("topic:", topic);
    onSearch(topic);
    form.reset();
  };

  return (
    <header className={search.header}>
      <form className={search.form} onSubmit={handleSubmit}>
        <input
          className={search.input}
          type="text"
          name="topic"
          placeholder="Search photos..."
        />
        <button className={search.formBtn} type="submit">
          Search
        </button>
        <ToastContainer />
      </form>
    </header>
  );
};

export default SearchForm;
