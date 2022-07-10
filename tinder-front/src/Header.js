import "./Header.css"
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from "@mui/material";
import fire from "./assets/fire.png"

function Header() {
	return(
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="header__icon" />
			</IconButton>
			<img className="header__logo" src={fire} alt="tinder logo" />
			<IconButton>
				<ForumIcon fontSize="large" className="header__icon"/>
			</IconButton>
		</div>
	);
}

export default Header;