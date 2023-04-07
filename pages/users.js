import { useEffect, useState } from "react"
import Link from 'next/link'
import MainContainer from "../components/MainContainer"

const Users = (users) => {
    const pageName = 'Список пользователей'
    return (
        <MainContainer keywords={pageName} title={pageName}>
            <h1>{pageName}</h1>
            <ul>
                {users.users.map(user =>
                    <li key={user.id}>
                        <Link href={`users/${user.id}`} legacyBehavior><a>{user.name}</a></Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: { users }
    }
}
