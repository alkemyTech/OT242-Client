import { React, useEffect } from 'react';
import ActivityDetails from '../../../components/activityDetails/ActivityDetails';
import AnimatedPage from '../../../components/AnimatedPage';
import { loadActivities } from "../../../app/slices/activities";
import { useSelector, useDispatch } from "react-redux";


const ActivitiesPage = (props) => {

    const dispatch = useDispatch();

      const { activityList } = useSelector(state => state.activity)

      useEffect(() => {
        dispatch(loadActivities());
        
      
      }, [dispatch]);

    return (
    <AnimatedPage>
        <div>
            {activityList.map(item => {
                return (
                    <div key={item.id}>
                    <ActivityDetails id={item.id} name={item.name} content={item.content} image={item.image}/>
                    </div>
                )
            })}
            
        </div>
    </AnimatedPage>
    )
}

export default ActivitiesPage;