import React, { FC, useState, ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { ICardPaginationProps } from "./ICardsPaginationProps";
import classes from './CardsPagination.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setPagination } from "../../store/reducers/ActionCreators";
import { constants } from "../../constants";

const CardsPagination: FC<ICardPaginationProps> = ({ totalPages }) => {
  // const location = useLocation();
  // const query = new URLSearchParams(location.search);
  // const page = parseInt(query.get("page") || "1", 10);
  const [page, setPage] = useState<number>(1);

  const { pagination } = useAppSelector((state) => state.paginationReduser);
  const dispatch = useAppDispatch();

  const handleChange = async (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    dispatch(setPagination({...pagination, page: value-1, pageSize: constants.PAGE_SIZE }));
  };

  return (
    <div className={classes.pagination}>
      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        onChange={handleChange}
        // renderItem={(item) => (
        //   <PaginationItem
        //     component={Link}
        //     to={`${url}${item.page === 1 ? "" : `?page=${item.page}`}`}
        //     {...item}
        //   />
        // )}
      />
    </div>
  );
};

export default CardsPagination;
