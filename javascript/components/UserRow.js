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
        return <div>
            <p>{user.name}</p>
            <p>{user.rating}</p>
            <p>{user.ideas}</p>
            <p>{user.following}</p>
            <p>{user.followers}</p>
            <span onClick={this.toggleFollow}>{ this.state.marked ? 'Unfollow' : 'Follow' }</span>
            <hr/>
        </div>
    }
}
