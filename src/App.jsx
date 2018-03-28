import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <RaisedButton label="Default"/>
            </MuiThemeProvider>
        )
    }
}