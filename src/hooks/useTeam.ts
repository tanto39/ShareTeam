import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { teams } from '../services/local';
import { ITeam } from '../models/ICard';

export const useTeam = (
  teamId: string, 
  setTeam:Dispatch<SetStateAction<ITeam>>
) => {
  useEffect(() => {
    let team = teams.filter( team => team.id === teamId )[0];

    if(!team) {
      team = {id:'', name:''};
    }
    setTeam(team);
  }, [teamId, setTeam]);
}