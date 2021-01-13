import React from "react";
import styled from "styled-components";

const PageComponent: React.FunctionComponent<{ className: string }> = ({
  className,
  children,
}) => <div className={className}>{children}</div>;

const Page = styled(PageComponent)`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export default Page;
