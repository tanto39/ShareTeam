import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Pagination, PaginationItem } from "@mui/material";
import { ICardPaginationProps } from "./ICardsPaginationProps";
import classes from './CardsPagination.module.css';

const CardsPagination: FC<ICardPaginationProps> = ({ url }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);

  return (
    <div className={classes.pagination}>
      <Pagination
        page={page}
        count={10}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${url}${item.page === 1 ? "" : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </div>
  );
};

export default CardsPagination;
