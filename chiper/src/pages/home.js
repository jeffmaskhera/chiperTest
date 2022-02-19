import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getBikes, getTotalBikes, getSelectBike} from "../modules/actions/bikeActions";
import TableContentBikes from "../components/tableContentBikes";
import Pagination from "../components/pagination";
import FilterHeadTable from "../components/filterHeadTable";
import { useHistory } from 'react-router-dom';
import Loading from "../components/Loading";
import img from '../tools/images'

const Home = ({}) => {
    const dispatch = useDispatch();
    const [pageCurrent, setPageCurrent] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [dateInit, setDateInit] = useState('');
    const [dateFinish, setDateFinish] = useState('');
    const [viewDetail, setViewDetail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const refScroll = useRef();

    useEffect(() => {
        dispatch(getBikes(pageCurrent, keyword, dateInit, dateFinish))
    }, [pageCurrent, keyword, dateInit, dateFinish]);

    useEffect(() => {
        dispatch(getTotalBikes())
    }, []);


    const listBikes = useSelector((state) => state.product?.bikes)
    const totalBikes = useSelector((state) => state.product?.numberBikes)
    const bikeInAction = useSelector((state) => state.product?.currentBike)

    useEffect(() => {
        if(Object.keys(bikeInAction).length !== 0 ) {
            history.push(`/detail/${viewDetail}`)
        }
    }, [bikeInAction]);

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    const myRef = useRef(null)

    const scrollTopSection=()=>{
        let container = document.getElementById("scroll-element");
        container.scrollTop = 0;
    }

    const pageChangeSelect =(pageInSelect)=> {
        setPageCurrent(pageInSelect);
        scrollTopSection();
    }

    const pageChange=(value)=>{
        switch (value) {
            case "PagePrev":
                setPageCurrent(pageCurrent - 1);
                break;
            case "PageNext":
                setPageCurrent(pageCurrent + 1);
                break;
            case "PageInit":
                setPageCurrent(1);
                break;
            case "PageLast":
                let result = totalBikes / 10
                let totalResult = Math.ceil(result);
                setPageCurrent(totalResult);
                break;
            default:
                return ""
        }
        scrollTopSection();
    }




    const handleFind =(e)=> {
        setKeyword(e.target.value)
    }

    const detailChange =(value)=> {
        setViewDetail(value)
        dispatch(getSelectBike(value))
        setIsLoading(true)
    }


    return (
        <div className="homePage">

            {isLoading && (<Loading/>)}

            <div className="box-home-info">
                <div className="content-top">
                    <img src={img.Logo} />
                    <div>
                        <h1>Police Department of Berlin</h1>
                        <h2>Stolen bykes</h2>
                    </div>
                </div>


                {
                    !!listBikes && listBikes.length > 0 ?
                        <>
                            <FilterHeadTable
                                handleFind={handleFind}
                                setDateInit={setDateInit}
                                setDateFinish={setDateFinish}
                            />
                            <p className="info-total">Total {totalBikes}</p>
                            <div className="container-table-home" ref={myRef} id="scroll-element">
                                {listBikes.map((bike, i) => (
                                    <TableContentBikes bike={bike} key={bike.id} detailChange={detailChange}/>
                                ))}
                            </div>
                            <Pagination
                                current={pageCurrent}
                                total={totalBikes}
                                limite={10}
                                pageChange={pageChange}
                                selectPage={pageChangeSelect}
                            />
                        </>
                        :
                        <div className="errorsView">
                            <h2>No results, try again later</h2>
                        </div>
                }
            </div>

        </div>
    );
};

export default Home;

