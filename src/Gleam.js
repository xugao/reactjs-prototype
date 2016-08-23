import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import DevTools from 'mobx-react-devtools';
import './Gleam.css';

@observer
class Gleam extends Component {
  imageSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAIVBMVEUAAAD/uQKAugHyUCICpO4CpO+DuAH/QSV+ugH3Th7xUSJULz8RAAAAAXRSTlMAQObYZgAAADVJREFUCNdjMAYCAyYlIAAxrQrYqMS0nDlzZgFbR0dHEwN24AIEDoyCQIDMdA0NDaGMiTAMABo5IkGJMNeMAAAAAElFTkSuQmCC";
  store = this.props.store;

  @action handleClick = () => {
    this.store.toggleDropdown(!this.store.dropdownIsOpen);
  };

  @action optionOnSelect = (option) => {
    switch(option){
      case 0:
        this.store.setLabelText("People");
        break;
      case 1:
        this.store.setLabelText("Documents");
        break;
      case 2:
        this.store.setLabelText("Bookmarks");
        break;
      default:
        throw new Error("unexpected option");
    }

    this.store.toggleDropdown(false);
    this.store.setSelectedOption(option);
  };

  render = () => {
    return (
      <div id="bw-glmOpt" className={this.store.dropdownIsOpen ? "bw-gOpn" : ""}>
        <DevTools />
        <div id="bw-gLabl" onClick={this.handleClick}>
          <img id="bw-glmIcon" alt="company logo" src={this.imageSrc}/>
          <div id="bw-glmTxt">{this.store.labelText}</div>
          <div className="bw-gIcon bw-opn"></div>
        </div>
        <ul>
          {
            this.store.items.map((item) => {
              return (
                <li className={item.option === this.store.selectedOption ? "bw-selected" : ""}
                    onClick={() => this.optionOnSelect(item.option)}>
                  <div className={"bw-gIcon " + item.className}></div>
                  <div>{item.text}</div>
                </li>
              );
            })
          }
        </ul>
      </div>
    )
  };
}

export default Gleam;
