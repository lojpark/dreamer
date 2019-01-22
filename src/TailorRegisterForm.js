import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

function TailorRegisterForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        What is your gender?
      </Typography>
      <RadioGroup name="gender" className="Gender">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <Typography variant="h6" gutterBottom>
        What are you interested in?
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="game" value="yes" />}
            label="Game"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="trip" value="yes" />}
            label="Trip"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="music" value="yes" />}
            label="Music"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="art" value="yes" />}
            label="Art"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="movie" value="yes" />}
            label="Movie"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="book" value="yes" />}
            label="Book"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="sport" value="yes" />}
            label="Sport"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TailorRegisterForm;