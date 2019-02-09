import React from 'react'
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import LikeIcon from '@material-ui/icons/ThumbUp';
import MoneyIcon from '@material-ui/icons/AttachMoney';

const styles = theme => (
    {
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
            cursor: 'pointer',
        },
        cardContent: {
            flexGrow: 1,
            cursor: 'pointer',
        },
        likeIcon: {
            marginBottom: theme.spacing.unit * 0.8,
            marginLeft: theme.spacing.unit * 2,
            color: '#3487FF',
        },
        coinIcon: {
            marginBottom: theme.spacing.unit * 0.8,
            marginLeft: theme.spacing.unit * 2,
            color: '#FF3322',
        },
        likeVote: {
            marginBottom: theme.spacing.unit,
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            color: '#3487FF',
        },
        coinVote: {
            marginBottom: theme.spacing.unit,
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            color: '#FF3322',
        },
    }
)

class AlbumItem extends React.Component {
    handleSubmit = (e, post) => {
        e.preventDefault();
        
        this.props.callbackFromParent(post);
    };

    render() {
        const { classes, card, post } = this.props;
        
        return (
            <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={post.thumbnailImage ? post.thumbnailImage : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"} // eslint-disable-line max-len
                        title="Image title"
                        onClick={(e) => this.handleSubmit(e, post)}
                    />
                    <CardContent className={classes.cardContent} onClick={(e) => this.handleSubmit(e, post)}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                        </Typography>
                        <Typography>
                            {post.thumbnailContent}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <LikeIcon className={classes.likeIcon} style={{ fontSize: 15 }}/>
                        <div className={classes.likeVote} style={{ fontSize: 15 }}>
                            {post.vote}
                        </div>
                        <MoneyIcon className={classes.coinIcon} style={{ fontSize: 15 }}/>
                        <div className={classes.coinVote} style={{ fontSize: 15 }}>
                            {post.coin}
                        </div>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(styles)(AlbumItem)
