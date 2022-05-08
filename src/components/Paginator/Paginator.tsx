import React from 'react';

import type { IPagination } from 'types/requests';
import { usePagination } from "hooks";
import styles from "./Paginator.module.scss";
import classNames from 'classnames';

interface IPaginator {
    count: number,
    limit: number,
    page: number,
    pageRange?: number,
    position?: "left" | "right" | "center",
    setPagination: (data: IPagination) => void
}

const Paginator: React.FC<IPaginator> = React.memo(({count, limit, page, pageRange, position = "center", setPagination }) => {
    const [paginationPages] = usePagination(count, limit, page, pageRange);
    
    const paginateHandler = (page: number | string) => {
      if(typeof page === "number") {
        setPagination({
            limit,
            page: page
        })
      }
    }

    const prevPageHanlder = () => {
      if(page > 1) {
        setPagination({
            limit,
            page: page - 1
        })
      }
    }

    const nextPageHandler = () => {
      if(page < Math.ceil(count / limit)) {
        setPagination({
            limit,
            page: page + 1
        })
      }
    }

    React.useEffect(() => {
      if(page) {
        window.scrollTo(0,0);
      }
    }, [page])

    return (
      <div
        className={classNames(styles.paginator, {
            [styles.paginator__center]: position === "center",
            [styles.paginator__start]: position === "left",
            [styles.paginator__rigth]: position === 'right'
        })}>
        <button onClick={prevPageHanlder} className={styles.paginator__controls__btn}>
          <span className={styles.paginator__controls__btn_item}>«</span>
        </button>
        <div className={styles.paginator__wrapper}>
          {paginationPages &&
            paginationPages.length ?
            paginationPages.map((item, i) => (
              <button
                onClick={() => paginateHandler(item)}
                className={
                    classNames(styles.paginator__wrapper__button, {
                        [styles.paginator__wrapper__button__active]: item === page
                    }) 
                }
                key={item + `${i}`}>
                {item}
              </button>
            ))
            :
            <div></div>
          }
        </div>
        <button onClick={nextPageHandler} className={styles.paginator__controls__btn}>
          <span className={styles.paginator__controls__btn_item}>»</span>
        </button>
      </div>
    );
})

export default Paginator;