import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  border-radius: 8px;
  position: relative;
  h4 {
    display: block;
    position: absolute;
    top: -20px;

    font-family: "Libre Franklin";
    font-size: 13px;
    color: #cc0000;

    margin-left: 8px;

    width: 100%;
    height: 1em;
  }

  .loader {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 8px;
  }
`;
