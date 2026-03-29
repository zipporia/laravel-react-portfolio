import { useEffect, useState } from "react"
import axiosClient from "../axiosClient"

export default function Users() {

    const [users , setUsers] = useState ([])

    useEffect(() => {
        axiosClient.get('/user').then(({data}) => {
            // console.log(data)
            setUsers(data)
        })
    },[])

    return (
        <>
            <div>
                Users
            </div>
        
        </>
    )
}