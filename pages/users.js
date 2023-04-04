import Link from "next/link"

const Users = () => {
    return (
        <div>
            <div>
                <Link href='/'>
                    Главная
                </Link>
                <Link href='/users'>
                    Пользователи
                </Link>
            </div>
            <h1>Список пользователей</h1>
        </div>
    )
}

export default Users