import React, { useState, useEffect } from 'react';
import { Box, Typography, Tab, Tabs, CircularProgress, Alert } from '@mui/material';
import ContentGrid from './components/ContentGrid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMyContent, fetchOrgContent, selectMyContent, selectOrgContent, selectContentLibraryStatus } from './contentLibrarySlice';

const ContentLibraryPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const myContent = useAppSelector(selectMyContent);
  const orgContent = useAppSelector(selectOrgContent);
  const status = useAppSelector(selectContentLibraryStatus);
  const [tabIndex, setTabIndex]= useState(0);

  useEffect(() => {
    if (tabIndex === 0) {
      dispatch(fetchMyContent());
    } else {
      dispatch(fetchOrgContent());
    }
  }, [tabIndex, dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Content Library</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabIndex} onChange={handleChange}>
          <Tab label="My Library" />
          <Tab label="Organization Library" />
        </Tabs>
      </Box>

      {status === 'loading' && <CircularProgress />}
      {status === 'failed' && <Alert severity="error">Failed to load content.</Alert>}
      {status === 'succeeded' && (
        <>
          {tabIndex === 0 && <ContentGrid content={myContent} />}
          {tabIndex === 1 && <ContentGrid content={orgContent} />}
        </>
      )}
    </Box>
  );
};

export default ContentLibraryPage;