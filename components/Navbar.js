import Links from "./Links"

const Navbar = () => {
    return (
        <div className="navbar">
            <Links href='/' text='Главная' />
            <Links href='/users' text='Пользователи' />
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </div>
    )
}

export default Navbar