import React, { Component } from 'react';
import idGenerator from 'react-id-generator';

import CountersContainer from './CountersContainer';
import ManageButtons from '../views/ManageButtons';
import { TabsContainer } from '../../../components/tabs';

class ParentCounterContainer extends Component {

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
        this.setState({
            countersIDs: [idGenerator()]
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
                <TabsContainer location='/counters' />
                <ManageButtons {...props} />
                <CountersContainer countersIDs={this.state.countersIDs} />
            </React.Fragment>
        );
    }
}

export default ParentCounterContainer;