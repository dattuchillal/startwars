import styled from '@emotion/styled/macro';
import { Box, Typography, Skeleton } from '@mui/material';

export const StyledSkeletonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledSkeleton = styled(Skeleton)`
  background-color: ${({ theme }) => theme.palette.divider};
`;

export const StyledMainWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  min-height: 400px;
`;

export const StyledDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledStarWarsWrapper = styled(Box)`
  width: 100%;
  padding: 16px;
`;

export const StyledStarWarsItem = styled(Box)`
  border: ${({ theme }) => `1px solid ${theme.palette.primary.contrastText}`};
  color: ${({ theme }) => theme.palette.primary.main};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const StyledStarWarsSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 8px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
