import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});

class SlidesInfo extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Intro"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Intro"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                      id="outlined-multiline-static"
                      label="Intro"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      variant="outlined"
                    />
                </div>
            </div>
        );
    }

}

export default SlidesInfo;
