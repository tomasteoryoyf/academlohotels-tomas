import { Spinner } from 'reactstrap';
import 'bootstrap/dist/bootstrap.min.css';
import './styles/Loader.css';

const Loader = () => {
	return (
		<div className="loader">
			<Spinner color="danger" />
		</div>
	);
};

export default Loader;
