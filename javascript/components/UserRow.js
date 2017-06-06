import React from 'react';

export default class UserRow extends React.Component {
    render() {
        const user = this.props.user;
        return <div>
            <p>{user.name}</p>
            <p>{user.rating}</p>
            <p>{user.ideas}</p>
            <p>{user.following}</p>
            <p>{user.followers}</p>
            <hr/>
        </div>
    }
}
