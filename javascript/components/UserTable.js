import React from 'react';
import UserRow from './UserRow';
import sampleData from '../constants/SampleData';

export default class UserTable extends React.Component {
    constructor( props ) {
        super( props );

        this.SAMPLE_DATA = sampleData;

        this.state = {
            visibleAmount: 10
        };

        this.handleShowMore = this.handleShowMore.bind( this );
    }

    handleShowMore() {
        this.setState( prevState => {
            return {
                visibleAmount: prevState.visibleAmount + 10
            }
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
                <div className="user-table__head-column user-table__head-column--person" />
                <div className="user-table__head-column">Ideas</div>
                <div className="user-table__head-column">Following</div>
                <div className="user-table__head-column">Followers</div>
            </div>
            <ul className="user-table__list">
                {userRows}
            </ul>
            <div className="user-table__expand" onClick={this.handleShowMore}>Show more</div>
        </div>
    }
}
