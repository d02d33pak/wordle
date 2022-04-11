import { HeaderContainer } from "./style";

const Header = ({ title = 'Wordle' }) => {
    return (
        <header>
            <HeaderContainer>
                <h2>{title}</h2>
            </HeaderContainer>
        </header>
    )
}

export default Header;