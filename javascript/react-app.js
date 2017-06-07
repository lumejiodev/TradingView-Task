import React from 'react';
import UserTable from './components/UserTable';

export default class Application extends React.Component {
    render() {
        return <div className="application">
            <div className="application__header">People</div>
            <UserTable />
        </div>
    }
}
