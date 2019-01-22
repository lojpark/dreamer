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
        How old are you?
      </Typography>
      <RadioGroup name="gender" className="Gender">
        <FormControlLabel value="age1" control={<Radio />} label="~ 15" />
        <FormControlLabel value="age2" control={<Radio />} label="16 ~ 25" />
        <FormControlLabel value="age3" control={<Radio />} label="26 ~ 35" />
        <FormControlLabel value="age4" control={<Radio />} label="36 ~" />
      </RadioGroup>
      <Typography variant="h6" gutterBottom>
        What are you interested in?
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="game" />} label="Game" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="trip" />} label="Trip" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="music" />} label="Music" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="art" />} label="Art" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="movie" />} label="Movie" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="literature" />} label="Literature" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="sport" />} label="Sport" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="cook" />} label="Cook" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TailorRegisterForm;