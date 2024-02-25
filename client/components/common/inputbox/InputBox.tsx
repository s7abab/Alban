import { FC } from "react";

type Props = {
  type: string;
  placeholder?: string;
  value?: string;
};
const InputBox: FC<Props> = ({ type, placeholder, value }) => {
  return (
    <>
      <input type={type} />
    </>
  );
};
export default InputBox;
