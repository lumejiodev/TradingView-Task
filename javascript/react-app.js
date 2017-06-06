import React from 'react';
import UserTable from './components/UserTable';

export default class Application extends React.Component {
    render() {
        return <div>
            <span>People</span>
            <UserTable />
        </div>
    }
}
