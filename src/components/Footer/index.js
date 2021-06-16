import React from "react";
import "./index.scss";
import { connect } from "react-redux";

const Footer = ({ selectItem }) => {
  return (
    <div className="footer" data-testid="footer">
      {selectItem && selectItem.length > 0
        ? selectItem.map((station, key) => (
            <div key={key}>
              <span className="label">CURRENTLY PLAYING</span>
              <p className="title">{station.title}</p>
            </div>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectItem: state.selectStation,
});

export default connect(mapStateToProps)(Footer);
