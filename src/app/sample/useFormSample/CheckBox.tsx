type CheckBoxProps = {
  onChange: () => void;
  value: boolean;
};

const CheckBox = (props: CheckBoxProps) => {
  const { onChange, value } = props;
  console.log(value);
  return (
    <div>
      <input type="checkbox" onChange={onChange}></input>
    </div>
  );
};

export default CheckBox;
