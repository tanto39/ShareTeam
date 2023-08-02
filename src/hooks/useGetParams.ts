import React, { useMemo }from 'react';
import { useAppSelector } from './redux';
import { IFilter } from '../models/IFilter';
import { ICardSkill } from '../models/ICard';


export const useGetParams = () => {
  
  const { filter } = useAppSelector((state) => state.filterReduser);
  
  const getParams = useMemo(() => {
     const getParams = new URLSearchParams();

     for (let key in filter) {
       if (filter[key as keyof IFilter]) {
        switch(key) {
          case 'skills':
            let skills: ICardSkill[] = filter[key as keyof IFilter] as ICardSkill[];
            skills.forEach((skill) => {
              getParams.append('skill', skill.skill);
            });
            break;
          default:
            getParams.append(key, filter[key as keyof IFilter] as string);
        }
       }
     };

     return getParams.toString();
  }, [filter]);

  return getParams;
};