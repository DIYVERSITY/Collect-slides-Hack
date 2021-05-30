import React, { Component } from 'react';
import from '@material-ui/core/'
class SlidesInfo extends Component {

    render() {
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
