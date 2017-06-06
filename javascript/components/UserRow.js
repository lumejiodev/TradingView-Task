import React from 'react';
import noPersonImage from '../constants/NoPersonImage';

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
                <img src={user.image || noPersonImage} alt={user.name} />
                <span>{user.name}</span>
                <div className="user-row__rating">
                    <span className="user-row__number-data">{user.rating}</span>
                </div>
                <span
                    onClick={this.toggleFollow}
                    className={ 'user-row__follow' + (this.state.marked ? ' user-row__follow--applied' : '') }
                >{ this.state.marked ? 'Unfollow' : 'Follow' }</span>
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
