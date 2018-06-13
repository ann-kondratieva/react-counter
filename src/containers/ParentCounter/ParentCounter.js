import React, { Component } from 'react';

import { CountersContainer } from '../CountersContainer';
import { ManageButtons } from '../../views/ManageButtons';

import idGenerator from 'react-id-generator';

class ParentCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countersIDs: [idGenerator()]
        };
        this.onAddClick = this.onAddClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onResetClick = this.onResetClick.bind(this);

    }

    onAddClick() {
        let currentIDs = this.state.countersIDs.slice();
        currentIDs.push(idGenerator());
        this.setState({
            countersIDs: currentIDs
        });
    }

    onDeleteClick() {
        let currentIDs = this.state.countersIDs.slice();
        if (currentIDs.length !== 1) {
            currentIDs.pop();
            this.setState({
                countersIDs: currentIDs
            });
        }
    }

    onResetClick() {
        let currentIDs = this.state.countersIDs.slice();
        currentIDs = currentIDs.slice(0, 1);
        this.setState({
            countersIDs: currentIDs
        });
    }

    render() {
        const props = {
            onAddClick: this.onAddClick,
            onDeleteClick: this.onDeleteClick,
            onResetClick: this.onResetClick
        };
        return (
            <React.Fragment>
                <ManageButtons {...props} />
                <CountersContainer countersIDs={this.state.countersIDs} />
            </React.Fragment>
        );
    }
}

export { ParentCounter };