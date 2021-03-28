import styled from 'styled-components/native';

export const LoaderContainer = styled.View`
  margin-top: ${({ theme }) => theme.metrics.px(48)}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderIndicator = styled.ActivityIndicator`
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
`;
