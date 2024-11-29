import { div, p } from 'framer-motion/client'
import React, { useState } from 'react'

const CheckBox = () => {

    const [checkbox, setCheckBox] = useState<any>({
        delhi: false,
        chandigarh: false,
        himachal: false,
        uttrakhand: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
        console.log(checked)
        setCheckBox((prev: any) => ({ ...prev, [value]: checked }))
    }

    const handleSelectAll = () => {
        const selectAll = Object.keys(checkbox).reduce((prev, key) => {
            prev[key] = true;
            return prev
        }, {} as Record<string, boolean>)
        setCheckBox(selectAll)
    }

    const checkAllChecked = Object.values(checkbox).every((prev) => prev)
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='bg-yellow-500 w-[70%] h-[400px] flex '>
                <div className='flex justify-center items-center flex-col w-full gap-5'>
                    <div className='flex '>
                        <label htmlFor="" className='font-semibold text-lg flex gap-2'>
                            Delhi
                            <input type="checkbox" name="delhi" id="delhi" value='delhi' checked={checkbox.delhi} onChange={handleChange} />
                        </label>
                        <label htmlFor="" className='font-semibold text-lg flex gap-2'>
                            Chandigarh
                            <input type="checkbox" name="chandigarh" id="chandigarh" value='chandigarh' checked={checkbox.chandigarh} onChange={handleChange} />
                        </label>
                        <label htmlFor="" className='font-semibold text-lg flex gap-2'>
                            Himachal
                            <input type="checkbox" name="himachal" id="" value='himachal' checked={checkbox.himachal} onChange={handleChange} />
                        </label>
                        <label htmlFor="" className='font-semibold text-lg flex gap-2'>
                            Uttrakhand
                            <input type="checkbox" name="uttrakhand" id="" value='uttrakhand' checked={checkbox.uttrakhand} onChange={handleChange} />
                        </label>
                        <button className='border px-3 ml-2 rounded-lg hover:bg-orange-500 disabled:opacity-[0.5] disabled:cursor-no-drop' onClick={handleSelectAll} disabled={checkAllChecked}>Select All</button>
                    </div>
                    <div className='flex gap-5'>
                        {
                            checkAllChecked ? (Object.keys(checkbox).map((item, index) => (
                                <div key={index + 1}>
                                    <p className='text-lg font-semibold border rounded-md px-2'>{index + 1} {item}</p>
                                </div>
                            ))
                            ) : (
                                null
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckBox