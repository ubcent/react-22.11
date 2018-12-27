import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default function Paging(props) {
    return (
        <Pagination className="mb-4" listClassName="justify-content-center">
            <PaginationItem disabled={props.prev}>
                <PaginationLink tag="button" onClick={props.onTurnPage} name="prev">← Older</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={props.next}>
                <PaginationLink tag="button" onClick={props.onTurnPage} name="next">Newer →</PaginationLink>
            </PaginationItem>
        </Pagination>
    )
}
