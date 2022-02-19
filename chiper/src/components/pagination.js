import React from "react";

const Pagination = ({ current, total, limite, selectPage, pageChange }) => {

    const pages = Math.ceil(Number(total) / limite)
    const btnPrev = <div onClick={()=>pageChange('PagePrev')} type="button" className="btn-paginator mob-2pag">Preview</div>
    const btnPrevUnactive = <div type="button" className="btn-paginator btn-unactive mob-2pag">Preview</div>

    const btnNext = <div onClick={()=>pageChange('PageNext')} type="button" className="btn-paginator mob-3pag">Next</div>
    const btnNextUnactive = <div type="button" className="btn-paginator btn-unactive mob-3pag">Next</div>

    const onMenuItemPageClicked = (key) => {
        switch (key) {
            case "firstPage":
                pageChange('PageInit')
                break;
            case "lastPage":
                pageChange('PageLast')
                break;
        }
    };

    const onPageSelect = (key) => {
        selectPage(key);
    };

    return (
        <div className="paginatorMessages">

            <div className="btn-paginator mob-1pag" onClick={()=>pageChange('PageInit')}>First</div>
            {
                current === 1 ?
                    <>
                        {btnPrevUnactive}
                    </>
                    :
                    <>
                        {btnPrev}
                    </>
            }

            <div className="inter-paginator-message">

                {
                    pages === 1 ?
                        <div className="count-paginator-message">
                            <p className="first-count-position">{current}</p>
                        </div>
                        :
                        <div className="count-paginator-message">


                            {
                                current+1 >= pages ?
                                    <p onClick={()=>onMenuItemPageClicked('firstPage')}>1</p>
                                    :
                                    null
                            }
                            {
                                current+1 >= pages ?
                                    <p className="points-count">...</p>
                                    :
                                    null
                            }
                            {
                                current+2 >= pages ?
                                    <p onClick={()=> onPageSelect(current-1)}>{current-1}</p>
                                    :
                                    null
                            }
                            <p className="first-count-position">{current}</p>
                            {
                                current+1 >= pages ?
                                    null
                                    :
                                    <p onClick={()=> onPageSelect(current+1)}>{current+1}</p>
                            }
                            {
                                current+2 >= pages ?
                                    null
                                    :
                                    <p onClick={()=> onPageSelect(current+2)}>{current+2}</p>
                            }

                            {
                                current+3 >= pages ?
                                    null
                                    :
                                    <p className="points-count">...</p>
                            }

                            {
                                current === pages ?
                                    null
                                    :
                                    <p onClick={()=>onMenuItemPageClicked('lastPage')}>{pages}</p>
                            }
                        </div>

                }

            </div>

            {
                current === pages ?
                    <>
                        {btnNextUnactive}
                    </>
                    :
                    <>
                        {btnNext}
                    </>
            }
            <div className="btn-paginator mob-4pag" onClick={()=>pageChange('PageLast')}>Last</div>
        </div>
    )

}

export default Pagination;
