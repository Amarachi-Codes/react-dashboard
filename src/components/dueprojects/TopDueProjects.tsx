import "./styles.css";


const TopDueProjects = () => {
    return (
        <div className="Container">
            <h5>Top Due Projects</h5>
            <p>23</p>
            <p>Total Projects</p>
            <div className="list">
                <ul>
                    <li>On hold</li>
                </ul>
                <p>12</p>
            </div>
            <div className="list">
                <ul>
                    <li>In Process</li>
                </ul>
                <p>3</p>
            </div>
            <div className="list">
                <ul>
                    <li>Complete</li>
                </ul>
                <p>6</p>
            </div>
            <div className="list">
                <ul>
                    <li>Cancelled</li>
                </ul>
                <p>2</p>
            </div>
        </div>
    )
}

export default TopDueProjects
