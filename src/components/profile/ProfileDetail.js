import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PaymentRegisterForm from '../register/PaymentRegisterForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateUserInfo, updatePaymentMethod, buyCoin, resetUserResult } from '../../store/actions/userActions'

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
        paddingTop: '1rem',
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
    textFieldWidth: {
        width: 200,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});


class ProfileDetail extends Component {
    state = {
        value: 0,
        firstName: "",
        lastName: "",
        careers: [],
        coin: 0, 
        card: {
            cardName: "",
            cardNumber: "",
            cvv: "",
            expDate: "",
        }
    }
    handleChangeTab = (e, value) => {
        this.setState({
            value
        })
    }
    handlePaymentInfo = (e) => {

        this.setState({
            ...this.state,
            card: {
                ...this.state.card,
                [e.target.id]: e.target.value,
            }
        }, () => {
            console.log(this.state);
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    UserInfos = () => {
        const { classes } = this.props;
        return (
            <React.Fragment>

                <TextField
                    label="First name"
                    className={classes.textFieldWidth}
                    id="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    style={{ margin: 10 }}
                />

                <TextField
                    label="Last name"
                    className={classes.textFieldWidth}
                    id="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    style={{ margin: 10 }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ marginLeft: 10 }}
                    onClick={() => this.props.updateUserInfo(this.state)}
                >
                    Update
                </Button>
            </React.Fragment>
        )
    }
    PaymentInfos = () => {
        const { classes } = this.props;
        const { card } = this.props.user;

        //check if payment is finished
        let isComplete = true;
        Object.keys(card).forEach(key => {
            if (card[key] === "") isComplete = false;
        });

        //check if user has coin
        let coin = this.state.coin;
        if (coin === undefined) coin = 0;
        if (isComplete) { //paynmet form completed
            return (
                <React.Fragment>
                    <PaymentRegisterForm callbackFromParent={this.handlePaymentInfo} card={this.state.card} />
                    <Typography variant="body1" >{"number of coins: " + coin}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => this.props.updatePaymentMethod(this.state.card)}
                    >
                        Update
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        style={{ marginLeft: 10 }}
                        onClick={this.props.buyCoin}
                    >
                        Buy Coin
                    </Button>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <Typography variant="body1" color="secondary" gutterBottom>Payment method is not completed. Must be completed before charging coins</Typography>
                    <PaymentRegisterForm callbackFromParent={this.handlePaymentInfo} card={this.state.card} />
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={() => this.props.updatePaymentMethod(this.state.card)}
                        >
                            Complete
                    </Button>
                    </div>
                </React.Fragment>
            )
        }
    }
    componentDidMount = () => {

        this.setState({
            ...this.props.user
        });

    }
    componentWillReceiveProps = ({ userResult }) => {
        if (userResult) {
            alert(userResult);
            this.props.resetUserResult(); //reset so alert does not show up twice
        }
        this.setState({
            ...this.props.user
        });
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        console.log(this.state);
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
                    {value === 1 && <this.PaymentInfos />}
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userResult: state.user.userResult,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserInfo: (user) => dispatch(updateUserInfo(user)),
        updatePaymentMethod: (user) => dispatch(updatePaymentMethod(user)),
        buyCoin: () => dispatch(buyCoin()),
        resetUserResult: () => dispatch(resetUserResult()),
    }
}
export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileDetail)