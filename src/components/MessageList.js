import React, {Component} from 'react';
import Message from './Message';
import {FireBaseTable} from '../Constants';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

    }

    componentWillMount(){
        const app = this.props.db.database().ref(FireBaseTable);
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });
    }

    getData(values) {

        if (values) {

            //Create a new array by cloning the values it returns and assigning the keys.
            const messages = Object.keys(values).map(key => Object.assign({}, values[key], {key}));
            this.setState({messages});
        }

    }

    render() {
        const messageNodes = this.state.messages.map(message => (
            <div className="card" key={message.key}>
                <div className="card-content">
                    <Message message={message.message} mine={this.props.guid === message.guid}/>
                </div>
            </div>
        ));
        return (
            <div>
                {messageNodes}
            </div>
        );
    }
}

export default MessageList;