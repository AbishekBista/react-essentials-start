export const InputComponent = ({ richText, ...props }) => {
  if (richText) {
    return <textarea {...props}></textarea>;
  } else {
    return <input type="text" {...props} />;
  }
};
