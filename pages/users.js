import { useEffect, useState } from "react"
import Link from 'next/link'

const Users = (users) => {
    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.users.map(user =>
                    <li key={user.id}>
                        <Link href={`users/${user.id}`} legacyBehavior><a>{user.name}</a></Link>
                    </li>
                )}
            </ul>
        </div>
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
