import React, { useState, useEffect } from 'react';
import './App.css'; // CSS 파일을 import 합니다.

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                console.log(data); // 콘솔에 데이터 출력
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="App">
            <h1>User Data</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phoneNumber</th>
                    <th>created-At</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{new Date(user.createdAt).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;