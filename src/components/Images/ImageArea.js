import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    margin: theme.spacing(20),
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});
const url =
  "https://api.unsplash.com/search/photos?client_id=BJfIu7ylioVKHF-tFoZ08EU7kIgTmkVZ3_u34n5UQA8&page=1&query=";
class ImageArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileData: [],
      index: -1,
      imageSrc: "",
    };
  }

  handleClick = (e) => {
    console.log("click", e.target.src, e.target.name);
    this.props.select(e.target.src);
    this.setState({ imageSrc: e.target.src, index: e.target.name });
  };

  getImages = () => {
    console.log(this.props.keyword);
    axios.get(url + this.props.keyword).then((response) => {
      // console.log(response);
      this.setState({ tileData: response.data.results });
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.keyword !== this.props.keyword) {
      this.getImages();
    }
  }
  componentDidMount() {
    this.getImages();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {this.state.tileData.map((tile, index) => (
            <GridListTile key={tile.urls.regular}>
              <img
                src={tile.urls.regular}
                alt={tile.description}
                onClick={this.handleClick}
                name={index}
              />
              <GridListTileBar
                title={tile.description}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.description}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageArea);
