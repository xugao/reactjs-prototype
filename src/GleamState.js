import { observable } from 'mobx';

const people = {
  option: 0,
  className: "bw-gPpl",
  text: "People"
};
const documents = {
  option: 1,
  className: "bw-gDoc",
  text: "Documents"
};
const bookmarks = {
  option: 2,
  className: "bw-gBkm",
  text: "Bookmarks"
};

const GleamState = observable({
  labelText: "Work results",
  dropdownIsOpen: false,
  items: [people, documents, bookmarks],
  selectedOption: null
});

GleamState.setSelectedOption = function (option){
  GleamState.selectedOption = option;
}

GleamState.toggleDropdown = (open) => {
  GleamState.dropdownIsOpen = open;
}

GleamState.setLabelText = (text) => {
  GleamState.labelText = text;
}

export default GleamState;
