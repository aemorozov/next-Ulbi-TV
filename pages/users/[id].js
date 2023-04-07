import MainContainer from '../../components/MainContainer'
import styles from '../../styles/user.module.scss'

const User = ({ user }) => {
    return (
        <MainContainer
            keywords={`${user.name}`}
            title={`${user.name}`}>
            <div className={styles.user}>
                <h1>Пользователь c id {user.id}</h1>
                <p>Имя пользователя {user.name}</p>
            </div>
        </MainContainer>
    )
}

export default User

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: { user }
    }
}