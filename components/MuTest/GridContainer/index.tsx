import React from 'react'

interface _props{
    children?: any,
    minWidth?: number ,
    maxFr?: number,
    gap?:number
}
const index = ({
    children=[
        <div key='1'>primeiro</div> ,
        <div key='2'>segundo</div>
    ],
    minWidth = 200,
    maxFr = 1,
    gap = 0.5,
} : _props ) => {
  return (
    <div className='grid-container' >

        {children.map((child:any)=> child)}

        <style jsx>
        {`
            .grid-container{
                display:grid;
                grid-template-columns:
                 repeat(auto-fit, minmax(${minWidth}px, ${maxFr}fr));
                
                gap: ${gap}rem
            }
        `}
        </style>
    </div>
  )
}

export default index