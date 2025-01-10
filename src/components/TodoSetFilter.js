import React from 'react'

function TodoSetFilter({ filter, addFilter }) {
    return (
        <div>
            <button onClick={() => addFilter('all')} disabled={filter == 'all'}>All</button>
            <button onClick={() => addFilter('completed')} disabled={filter == 'completed'}>Completed</button>
            <button onClick={() => addFilter('uncompleted')}disabled={filter == 'uncompleted'}>Uncompleted</button>
        </div>
    )
}

export default TodoSetFilter