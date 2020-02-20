import React,{ Component } from "react";
import { TileAboveTheFoldContent, TileBelowTheFoldContent, ExpandableTile, TextArea, Button } from "carbon-components-react";


class ContactList extends Component {
  render() {
    const yourMessageStyle = {
      color: "red",
      fontSize: 14
    };
    const myMessageStyle = {
      color: "blue",
      fontSize: 14
    };
    const dateStyle = {
      color: "black",
      fontSize: 11
    };

    return (
      <div>
        <TextArea/>
        <br /><br />
        <Button>Send Message</Button>
        {/* this is 1 contact - start */}
        <ExpandableTile
          expanded={false}
          handleClick={() => { }}
          light={false}
          tabIndex={0}
          tileCollapsedIconText="Interact to Expand tile"
          tileExpandedIconText="Interact to Collapse tile"
          tileMaxHeight={0}
          tilePadding={0}
        >
        <TileAboveTheFoldContent>
          <div style={{ height: '20px' }}>userName</div>
        </TileAboveTheFoldContent>
        <TileBelowTheFoldContent>
            <div style={{ height: '150px' }}>
              <span style={yourMessageStyle}> Below the fold content here </span>< br />
              <span style={dateStyle}>Oct 2, 2019 10:31:24</span> < br />< br />
              <span style={myMessageStyle}> Below the fold content here </span><br />
              <span style={dateStyle}>Oct 2, 2019 10:31:24</span> < br />< br />
            </div>
          </TileBelowTheFoldContent>
        </ExpandableTile>
        {/* this is 1 contact - end */}
        {/* this is 1 contact - start */}
        <ExpandableTile
          expanded={false}
          handleClick={() => { }}
          light={false}
          tabIndex={0}
          tileCollapsedIconText="Interact to Expand tile"
          tileExpandedIconText="Interact to Collapse tile"
          tileMaxHeight={0}
          tilePadding={0}
        >
          <TileAboveTheFoldContent>
            <div style={{ height: '20px' }}>userName</div>
          </TileAboveTheFoldContent>
          <TileBelowTheFoldContent>
            <div style={{ height: '150px' }}>
              <span style={yourMessageStyle}> Below the fold content here </span>< br />
              <span style={dateStyle}>Oct 2, 2019 10:31:24</span> < br />< br />
              <span style={myMessageStyle}> Below the fold content here </span><br />
              <span style={dateStyle}>Oct 2, 2019 10:31:24</span> < br />< br />
            </div>
          </TileBelowTheFoldContent>
        </ExpandableTile>
        {/* this is 1 contact - end */}
      </div>
       
      );
  }
}

export default ContactList;
