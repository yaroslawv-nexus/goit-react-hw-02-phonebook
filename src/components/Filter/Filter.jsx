import { InputSearchStyle, LabelSearchStyle } from './Filter.styled';

export const Filter = ({ filterChange, filterText }) => {
  return (
    <label>
      <LabelSearchStyle>Find contacts by name</LabelSearchStyle>
      <InputSearchStyle
        type="text"
        name="filter"
        onChange={filterChange}
        value={filterText}
      />
    </label>
  );
};
