import { Link } from 'react-router-dom';
import { StyledContainer, StyledH1, StyledLi, StyledUl } from './styles';

const Menu = () => {
	return (
		<>
			<StyledContainer>
				<StyledH1>THE PLANETS</StyledH1>
				<StyledUl>
					<StyledLi>
						<Link to='/'>MERCURY</Link>
					</StyledLi>
					<Link to='/venus' style={{ textDecoration: 'none' }}>
						<StyledLi>VENUS</StyledLi>
					</Link>
					<Link to='/earth' style={{ textDecoration: 'none' }}>
						<StyledLi>EARTH</StyledLi>
					</Link>
					<Link to='/mars' style={{ textDecoration: 'none' }}>
						<StyledLi>MARS</StyledLi>
					</Link>
					<Link to='/jupiter' style={{ textDecoration: 'none' }}>
						<StyledLi>JUPITER</StyledLi>
					</Link>
					<Link to='/saturn' style={{ textDecoration: 'none' }}>
						<StyledLi>SATURN</StyledLi>
					</Link>
					<Link to='/uranus' style={{ textDecoration: 'none' }}>
						<StyledLi>URANUS</StyledLi>
					</Link>
					<Link to='/neptune' style={{ textDecoration: 'none' }}>
						<StyledLi>NEPTUNE</StyledLi>
					</Link>
				</StyledUl>
			</StyledContainer>
		</>
	);
};

export default Menu;
