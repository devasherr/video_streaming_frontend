import styled from "styled-components";

const SkeletonContainer = styled.div`
  width: ${(props) => (props.type === "sm" ? "100%" : "300px")};
  margin-bottom: ${(props) => (props.type === "sm" ? "20px" : "30px")};
  cursor: pointer;
  display: ${(props) => (props.type === "sm" ? "flex" : "block")};
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.bgLighter};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.dim};
`;

const SkeletonImage = styled.div`
  width: ${(props) => (props.type === "sm" ? "40%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "170px")};
  background-color: #ccc;
  border-radius: ${(props) =>
    props.type === "sm" ? "12px 0px 0px 12px" : "12px 12px 0 0"};
`;

const SkeletonDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => (props.type === "sm" ? "0 10px" : "10px")};
  flex: 1;
`;

const SkeletonLine = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  height: ${(props) => props.height || "14px"};
  width: ${(props) => props.width || "100%"};
`;

const SkeletonCard = ({ type }) => (
  <SkeletonContainer type={type}>
    <SkeletonImage type={type} />
    <SkeletonDetails type={type}>
      <SkeletonLine width="80%" />
      <SkeletonLine width="60%" />
      <SkeletonLine width="40%" height="12px" />
    </SkeletonDetails>
  </SkeletonContainer>
);

export default SkeletonCard;
