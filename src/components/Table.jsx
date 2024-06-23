import React from 'react'

const Table = () => {
  return (
    <div>
       <table className="min-w-full ">
        <thead className=''>
            <tr>
                <th className="border-l-0 border border-stone-950 px-2 text-center w-1/4">
                <h2>
                    (a)</h2>Type of Tax Information (Income, Employment, Payroll, Excise, Estate, Gift, Civil Penalty, Sec. 4980H Payments, etc.)</th>
                <th className="border border-stone-950 px-2 text-center w-1/4">
                <h2>
                    (b)</h2>Tax Form Number (1040, 941, 720, etc.)</th>
                <th className="border border-stone-950 px-2 text-center w-1/4">
                <h2>
                    (c)</h2>Year(s) or Period(s)</th>
                <th className="border-r-0 border border-stone-950 px-2 text-center w-1/4">
                <h2>
                (d)</h2> Specific Tax Matters</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="border-l-0 border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1 placeholder:text-black" placeholder="Income"/></td>
                <td className="border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1 placeholder:text-black" placeholder="1040"/></td>
                <td className="border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1 placeholder:text-black" placeholder="2019 - 2023"/></td>
                <td className="border-r-0 border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1 placeholder:text-black" placeholder="Not applicable"/></td>
            </tr>
            <tr>
                <td className="border-l-0 border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
                <td className="border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
                <td className="border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
                <td className="border-r-0 border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
            </tr>
            <tr>
                <td className="border-l-0 border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
                <td className="border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
                <td className="border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
                <td className="border-r-0 border border-stone-950 p-2"><input type="text" className="w-full outline-none  p-1" /></td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Table
