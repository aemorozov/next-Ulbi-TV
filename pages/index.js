import Links from "../components/links"

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <Links href='/' text='Главная' />
                <Links href='/users' text='Пользователи' />
            </div>
            <h1>Главная страница</h1>
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

export default Index