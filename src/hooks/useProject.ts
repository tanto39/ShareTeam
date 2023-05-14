import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { projects } from '../services/local';
import { ICardProject } from '../models/ICard';

export const useProject = (
  projectId: string, 
  setProject:Dispatch<SetStateAction<ICardProject>>
) => {
  useEffect(() => {
    let project = projects.filter( project => project.id === projectId )[0];

    if(!project) {
      project = {id:'', name:''};
    }
    setProject(project);
  }, [projectId, setProject]);
}