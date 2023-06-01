import React, {FC} from 'react'
import { ITeamListProps } from './ITeamListProps';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TeamList:FC<ITeamListProps> = ({teams}) => {
  return (
    <TableContainer component={Paper} sx={{width: "50%"}}>
        <Table aria-label="Команды">
          <TableHead>
            <TableRow>
              <TableCell>Номер</TableCell>
              <TableCell>Название</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teams.map((team) => (
              <TableRow
                key={team.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {" "}
                  {team.id}{" "}
                </TableCell>
                <TableCell align="left">{team.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TeamList;