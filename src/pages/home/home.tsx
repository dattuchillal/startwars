import React from 'react';

import { Typography } from '@mui/material';

import {
  StyledDescription,
  StyledStarWarsWrapper,
  StyledMainWrapper,
  StyledStarWarsItem,
  StyledStarWarsSection,
  StyledSkeleton,
  StyledSkeletonWrapper,
} from './home.styled';
import { useHome } from '../../api';

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const Home: React.FC = () => {
  const { data, isLoading } = useHome();

  return (
    <StyledMainWrapper>
      <StyledDescription variant="h1">Star Wars</StyledDescription>
      <StyledStarWarsWrapper>
        {isLoading ? (
          <StyledSkeletonWrapper>
            {Array.from({ length: 10 }).map((_, index) => (
              <StyledSkeleton key={index} />
            ))}
          </StyledSkeletonWrapper>
        ) : (
          <>
            {data?.results
              .sort((currentItem, nextItem) => collator.compare(currentItem.crew, nextItem.crew))
              .map((item, index) => (
                <StyledStarWarsItem key={index}>
                  <StyledStarWarsSection>
                    <Typography>{item.name}</Typography>
                    <Typography>{item.model}</Typography>
                  </StyledStarWarsSection>
                  <StyledStarWarsSection>
                    <Typography>Number of films</Typography>
                    <Typography>{item.films.length}</Typography>
                  </StyledStarWarsSection>
                </StyledStarWarsItem>
              ))}
          </>
        )}
      </StyledStarWarsWrapper>
    </StyledMainWrapper>
  );
};
