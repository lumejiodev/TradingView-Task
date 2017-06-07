import React from 'react';
import UserRow from './UserRow';
import sampleData from '../constants/SampleData';

export default class UserTable extends React.Component {
    constructor( props ) {
        super( props );

        this.USERS_TOTAL = 24;
        this.SAMPLE_DATA = sampleData;

        this.USERS_PER_TIME = 10;

        this.state = {
            visibleAmount: this.USERS_PER_TIME,
            noUsersLeft: false,
        };

        this.handleShowMore = this.handleShowMore.bind( this );
    }

    handleShowMore() {
        this.setState( prevState => {
            let newState = {
                visibleAmount: prevState.visibleAmount + this.USERS_PER_TIME
            };
            if (newState.visibleAmount >= this.USERS_TOTAL) {
                newState.visibleAmount = this.USERS_TOTAL;
                newState.noUsersLeft = true;
            }
            return newState;
        });
    }

    render() {
        let userRows = [];

        for (let i = 0; i < this.state.visibleAmount; i++) {
            userRows.push(
                <UserRow key={i} user={this.SAMPLE_DATA[ i % 5 ]} />
            );
        }

        return <div className="user-table">
            <div className="user-table__head">
                <div className="user-table__head-column user-table__head-column--photo" />
                <div className="user-table__head-column user-table__head-column--person" />
                <div className="user-table__head-column user-table__head-column--data">Ideas</div>
                <div className="user-table__head-column user-table__head-column--data">Following</div>
                <div className="user-table__head-column user-table__head-column--data">Followers</div>
            </div>
            <ul className="user-table__list">
                {userRows}
            </ul>
            {!this.state.noUsersLeft && (
                <div className="user-table__expand" onClick={this.handleShowMore}>Show more</div>
            )}
        </div>
    }
}
