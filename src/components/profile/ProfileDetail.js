import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PaymentRegisterForm from '../register/PaymentRegisterForm'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        padding: '1rem',
        maxWidth: 800,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
});


class ProfileDetail extends Component {
    state = {
        value: 0,
    }
    handleChangeTab = (e, value) => {
        this.setState({
            value
        })
    }
    handlePaymentInfo = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    UserInfos = () => {
        return (
            <React.Fragment>
                <Typography variant="body1" >asd</Typography>
            </React.Fragment>
        )
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>

                <Tabs
                    value={value}
                    onChange={this.handleChangeTab}
                    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                >
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="User Info"
                    />
                    <Tab
                        disableRipple
                        classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                        label="Payment"
                    />
                </Tabs>
                <div className={classes.tabRoot}>
                    {value === 0 && <this.UserInfos />}
                    {value === 1 && <PaymentRegisterForm callbackFromParent={this.handlePaymentInfo} />}
                </div>

            </div>
        )
    }
}
export default withStyles(styles)(ProfileDetail)