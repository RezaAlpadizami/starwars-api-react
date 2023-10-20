import React, { useState } from "react";
import { Button } from "antd";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import "./pagination.styles.scss";

const PaginationButton = ({ page, setPage, data }) => {
  const [isActive] = useState(page === 1);
  return (
    <div className="pagination">
      {page === 1 ? (
        <div />
      ) : (
        <Button
          className="pagination__button"
          onClick={() => setPage(page - 1)}
        >
          <MdArrowBackIosNew />
        </Button>
      )}

      {page < 3 ? (
        <>
          <Button
            className={`pagination__button${page === 1 ? "active" : ""}`}
            onClick={() => setPage(1)}
          >
            1
          </Button>
          <Button
            className={`pagination__button ${page === 2 ? "active" : ""}`}
            onClick={() => setPage(2)}
          >
            2
          </Button>
          <Button
            className={`pagination__button ${page === 3 ? "active" : ""}`}
            onClick={() => setPage(3)}
          >
            3
          </Button>
        </>
      ) : (
        <>
          <Button
            className="pagination__button"
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </Button>
          <Button className={`pagination__button ${isActive ? "active" : ""}`}>
            {page}
          </Button>
          {data?.next && (
            <Button
              className="pagination__button"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </Button>
          )}
        </>
      )}

      {!data?.next ? (
        <div />
      ) : (
        <Button
          className="pagination__button"
          onClick={() => setPage(page + 1)}
        >
          <MdArrowForwardIos />
        </Button>
      )}
    </div>
  );
};
export default PaginationButton;
