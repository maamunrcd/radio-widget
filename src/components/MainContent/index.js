import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { selectStation } from "../../actions/index";
import playerImg from "../../assets/images/station-playlist.png";
import "./index.scss";

const MainContent = ({
  isLoading,
  stationList,
  onSelectStation,
  selectItem,
  error,
}) => {
  return (
    <div className="main">
      <ul className="station-list" data-testid="stationlist">
        {stationList &&
          stationList.length > 0 &&
          stationList.map((station) => (
            <li className="station-list-item" key={station.id}>
              <div
                className="station-list-item-title"
                onClick={() => onSelectStation(station.id)}
              >
                <span className="station-title">{station.title}</span>
                <span className="station-freq">{station.freq}</span>
              </div>
              {selectItem &&
                selectItem.findIndex((item) => item.id === station.id) !==
                  -1 && (
                  <div className="station-figure">
                    <span className="control prev"></span>
                    <img src={playerImg} alt="station player" />
                    <span className="control next"></span>
                  </div>
                )}
            </li>
          ))}
      </ul>
    </div>
  );
};

MainContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  stationList: PropTypes.array.isRequired,
  selectItem: PropTypes.array,
  onSelectStation: PropTypes.func.isRequired,
  error: PropTypes.any,
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  stationList: state.stationList,
  selectItem: state.selectStation,
  error: state.error,
});

export function mapDispatchToProps(dispatch) {
  return {
    onSelectStation: (id) => {
      dispatch(selectStation(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
