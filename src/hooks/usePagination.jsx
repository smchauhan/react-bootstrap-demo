import { range } from 'lodash';

const usePagination = (data, page, limit) => {
    let dataArray = [];
    let totalPages = Math.ceil(data.length / limit)
    let siblings = 1;
    const getData = () => {
        for (let i = (page - 1) * limit; i < (page * limit); i++) {
            dataArray.push(data[i]);
        }
        return dataArray;
    }
    const getShowingInfo = () => {
        return (
            <div>
                Showing {(page - 1) * limit + 1} to {page * limit} of {data.length} records
            </div>
        )
    }
    const getPaginationArray = () => {
        // totalPages , page , limit, siblings
        let leftRightPageCount = 5;
        let leftSiblingIndex = page - siblings;
        let rightSiblingIndex = page + siblings;

        // console.log("Total Pages " + totalPages)
        // Situation 1 - Small amout of records
        let totalPagesInArray = 5;
        if (totalPagesInArray > totalPages) {
            return range(1, totalPages + 1)
        }

        // Situation 2,3,4 
        let showLeftDots = leftSiblingIndex > 2;
        let showRightDots = rightSiblingIndex < totalPages;

        // Show both dots or middle range...
        if (showLeftDots && showRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex + 1);
            return [1, "...", ...middleRange, "...", totalPages]
        }

        // Show left dots or right range...
        if (showLeftDots) {
            let rightRange = range(totalPages - leftRightPageCount + 1, totalPages + 1)
            return [1, "...", ...rightRange]
        }

        // Show right dots or left range...
        if (showRightDots) {
            let leftRange = range(1, leftRightPageCount + 1);
            return [...leftRange, "...", totalPages]
        }
    }
    return {
        totalPages,
        getData,
        getPaginationArray,
        getShowingInfo
    }
}

export default usePagination
