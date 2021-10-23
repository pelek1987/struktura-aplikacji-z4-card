import {useState} from "react";
import Card from "components/Card";
import styles from './App.module.scss';
import { data } from 'data/data';


function App() {

    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(prev => !prev);
    }


    return (
        <div className={styles.App}>
            <Card data={data} handleClick={handleClick} showMore={showMore} />
        </div>
    );
}

export default App;
