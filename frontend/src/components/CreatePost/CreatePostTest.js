import React, { useState } from "react";
import styled from "styled-components";

import CreateFocused from "./CreateFocused";
import CreateUnfocused from "./CreateUnfocused";

const Root = styled.div`
  width: 100%
  height: 100%;
`;

const CreatePostTest = () => {
  const [isFocused, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!isFocused);
  };

  return (
    <Root >
      {isFocused ? <CreateFocused buttonClick={handleFocus} /> : <CreateUnfocused buttonClick={handleFocus}  />}
    </Root>
  );
};   

export default CreatePostTest;
