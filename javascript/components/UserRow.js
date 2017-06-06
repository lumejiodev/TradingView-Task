import React from 'react';

export default class UserRow extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            marked: props.user.marked
        };

        this.toggleFollow = this.toggleFollow.bind( this );
    }

    toggleFollow() {
        this.setState( prevState => {
            return {
                marked: !prevState.marked
            }
        });
    }

    render() {
        const user = this.props.user;
        return <li className="user-row">
            <div className="user-row__column user-row__column--person">
                <span>{user.name}</span>
                <span className="user-row__number-data">{user.rating}</span>
                <span onClick={this.toggleFollow}>{ this.state.marked ? 'Unfollow' : 'Follow' }</span>
            </div>
            <div className="user-row__column">
                <span className="user-row__number-data">{user.ideas}</span>
            </div>
            <div className="user-row__column">
                <span className="user-row__number-data">{user.following}</span>
            </div>
            <div className="user-row__column">
                <span className="user-row__number-data">{user.followers}</span>
            </div>
        </li>
    }
}
