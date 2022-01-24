import React, { useState } from 'react';

function SearchFunctionality({onSubmit}) {
    const [textSerch, setTextSearch] = useState()
    function handleChangeSearch(e){
        e.preventDefault()
        if(!onSubmit) return
        setTextSearch(e.target.value)
        onSubmit(textSerch)

    }
  return (
    <div>
        <form>
            <input type={"text"} onChange={handleChangeSearch} value={textSerch} placeholder='Type here...'/>
        </form>

    </div>
  )}

export default SearchFunctionality;
