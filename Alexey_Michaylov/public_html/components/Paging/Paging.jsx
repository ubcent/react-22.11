import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Paging extends Component {
    render() {
        return (
            <Pagination className="mb-4" listClassName="justify-content-center">
                <PaginationItem>
                    <PaginationLink href="#">← Older</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">Newer →</PaginationLink>
                </PaginationItem>
            </Pagination>
        )
    }
}
