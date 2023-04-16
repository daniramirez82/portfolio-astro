const TextAreaInput = ({ label, placeholder, name, rows, value, onInput }) => {
  return (
    <div class="group relative block p-2 bg-white my-input">
      <textarea
        rows={rows}
        id={name}
        name={name}
        value={value}
        onInput={onInput}
        class="mt-1 pt-4 pl-2 block w-full rounded border-2 border-stone-900/10 peer
     group-hover:border-stone-900/50
     focus:border-2
      focus:border-yellow-600 
      focus-visible:outline-yellow-600
      focus-visible:rounded
     "
        placeholder={placeholder}
      />
      <label
        for={name}
        class="text-stone-900/40 absolute bg-inherit -top-0 left-6 px-2
     peer-hover:text-stone-900/70 peer-focus:text-stone-900/70"
      >
        {label}
      </label>
    </div>
  );
};

export default TextAreaInput;
