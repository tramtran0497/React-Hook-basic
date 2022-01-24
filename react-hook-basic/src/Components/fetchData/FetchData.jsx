import React from 'react'

function FetchData({data}) {
    return (
        <div>
            <ul>
                {data.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    )
}

export default FetchData
