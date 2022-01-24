import React, { useState } from 'react'

function Pagination({onSelectChange, pagination}) {
    const {_page, _limit, _totalRows} = pagination
    const totalPage = Math.ceil(_totalRows / _limit)
    function handleChange(newPage){
       onSelectChange(newPage)
    }
    
    
    return (
        <div>
            <button disabled={_page <= 1} onClick={()=> handleChange(_page - 1)}>Previous</button>
            <button disabled={_page >= totalPage}  onClick={()=> handleChange(_page + 1)}>Next</button>
        </div>
    )
}

export default Pagination
