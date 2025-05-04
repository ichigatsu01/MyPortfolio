import { Backdrop, CircularProgress } from '@mui/material'
// import { useState } from 'react'

export default function Loading({open}: {open:boolean}) {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Backdrop
            open={open}
            >
                <CircularProgress size={'64px'} />
                <p style={{color:'white',}}>Now Loading...</p>
            </Backdrop>
        </div>
    )
}