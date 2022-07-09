import "./Header.css"
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from "@mui/material";
import fire from "./assets/fire.png"

function Header() {
	return(
		<div className="header">
			<IconButton>
				<PersonIcon />
			</IconButton>
			<img className="header__logo" src={fire} alt="tinder logo" />
			<IconButton>
				<ForumIcon />
			</IconButton>
		</div>
	);
}

export default Header;