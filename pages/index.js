import MainContainer from "../components/MainContainer"

const Index = () => {
    const pageName = 'Главная'
    return (
        <MainContainer
            keywords={pageName}
            title={pageName}>
            <h1>{pageName}</h1>
        </MainContainer>

    )
}

export default Index