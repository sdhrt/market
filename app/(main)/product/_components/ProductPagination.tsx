import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";

function ProductPagination({
  offset,
  count,
}: {
  offset: number;
  count: number;
}) {
  return (
    <Pagination>
      <PaginationContent>
        {offset >= 8 && (
          <>
            <PaginationItem>
              <PaginationPrevious href={`product/?offset=${offset - 8}`} />
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={`product/?offset=0`} isActive>
            {offset / 8 + 1}
          </PaginationLink>
        </PaginationItem>
        {offset + 8 < count && (
          <>
            <PaginationItem>
              <PaginationLink href={`product/?offset=8`}>
                {offset / 8 + 2}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {offset + 16 < count && (
          <>
            <PaginationItem>
              <PaginationLink href={`product/?offset=8`}>
                {offset / 8 + 3}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {offset + 8 < count && (
          <>
            <PaginationItem>
              <PaginationNext href={`product/?offset=${offset + 8}`} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}

export default ProductPagination;
