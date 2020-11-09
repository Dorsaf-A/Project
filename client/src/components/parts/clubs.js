import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getClubs } from '../../js/actions/clubActions';
import ClubCard from './modals/ClubCard'

function Clubs() {
    const dispatch = useDispatch();
  const clubs = useSelector((state) => state.clubReducer.clubs);
  useEffect(() => {
    dispatch(getClubs());
  }, []);

    return (
        <div>
            <h2>Clubs</h2>
            <ClubCard/>
        </div>
    )
}

export default Clubs
