import React, { useId} from 'react'

function Select({
    options,
    label,
    className= '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''></label>}
            <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
                {/* option is array and we have to loop array add optional channing for safty */}
                {options?.map((option) => {
                    <option key={option} value={{option}}>
                        {option}
                    </option>
                })}
            </select>
        </div>
    )
}

// Another way to use forwardRef
export default React.forwardRef(Select)
