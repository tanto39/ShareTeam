import React, { useMemo } from 'react';
import { projects } from '../services/local';

export const useProject = (projectId: string) => {
  
  const project = useMemo(() => {
    return projects.filter( project => project.id === projectId )[0];
  }, [projectId])

  return project;
}