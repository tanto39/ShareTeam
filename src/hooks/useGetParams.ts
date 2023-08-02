import React, { useMemo }from 'react';
import { IGetParams } from '../models/IGetParams';
import { useAppSelector } from './redux';
import { IFilter } from '../models/IFilter';
import { ICardSkill } from '../models/ICard';


export const useGetParams = () => {
  
  const { filter } = useAppSelector((state) => state.filterReduser);
  
  const getParams = useMemo(() => {
     const getParams: IGetParams = {} as IGetParams;

     for (let key in filter) {
       if (filter[key as keyof IFilter]) {
        switch(key) {
          case 'skills':
            let skills: ICardSkill[] = filter[key as keyof IFilter] as ICardSkill[];
            skills.forEach((skill) => {
              if (getParams['skill']) {
                getParams['skill'] = `${getParams['skill']}&skill=${skill.skill}`;
              } else {
                getParams['skill'] = skill.skill;
              }
            });
            break;
          default:
            getParams[key] = filter[key as keyof IFilter] as string;
        }
       }
     };

     return getParams;
  }, [filter]);

  return getParams;
};