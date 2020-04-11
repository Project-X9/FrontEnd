import React from 'react';
/**
 * This is aloading component that it will be rendered till the fetch is done
 */
export const Loading = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};