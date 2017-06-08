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
            <div className="user-row__column user-row__column--photo">
                <img
                    src={user.image || noPersonImage}
                    alt={user.name}
                    className={'user-row__photo' + (user.image ? '' : ' user-row__photo--no-photo') }
                />
            </div>
            <div className="user-row__column user-row__column--person">
                <span className="user-row__name">{user.name}</span>
                <span
                    onClick={this.toggleFollow}
                    className={ 'user-row__follow' + (this.state.marked ? ' user-row__follow--applied' : '') }
                />
                <div className="user-row__rating">
                    <span className="user-row__number-data">{user.rating}</span>
                </div>
            </div>
            <div className="user-row__column user-row__column--data">
                <span className="user-row__number-data">{user.ideas}</span>
            </div>
            <div className="user-row__column user-row__column--data">
                <span className="user-row__number-data">{user.following}</span>
            </div>
            <div className="user-row__column user-row__column--data">
                <span className="user-row__number-data">{user.followers}</span>
            </div>
        </li>
    }
}
