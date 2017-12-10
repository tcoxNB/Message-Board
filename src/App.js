import React, {Component} from 'react';
import firebase from 'firebase';
import guid from 'guid';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';

class App extends Component {

    componentWillMount() {
        this.guid = guid.create();
        firebase.initializeApp({
            apiKey: "AIzaSyDGoTGcFtX1w8-JTLHjZAaCd5XvpmtFf78",
            authDomain: "messagepool-99d85.firebaseapp.com",
            databaseURL: "https://messagepool-99d85.firebaseio.com",
            projectId: "messagepool-99d85",
            storageBucket: "",
            messagingSenderId: "604608748499"
        });
    }

    render() {
        return (
            <div className="container">
                <Header title="Firebase Message App!!!"/>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageList db={firebase} guid={this.guid.value}/>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-3"></div>
                    <div className="column is-6">
                        <MessageBox db={firebase} guid={this.guid.value}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
