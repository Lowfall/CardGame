import { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
    const [user, getUser] = useState();

    useEffect(() => {
        getData();
    }, []);

    const users= user === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <p>{user.Map(u => {
            <h1 key={u.username}></h1>
        })}</p>

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {users}
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('api/weatherforecast/get');
        const data = await response.json();
        setForecasts(data);
    }

    async function getData() {
        const response = await fetch('api/user/get');
        const data = await response.json();
        getUser(data);
    }
}

export default App;