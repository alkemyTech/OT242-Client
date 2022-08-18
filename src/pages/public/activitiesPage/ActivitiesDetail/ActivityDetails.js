import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ActivityDetails from '../../../../components/activityDetails/ActivityDetails'

function ActivitiesDetails() {
  //const activities = useSelector(state => state.activity)
  //const params = useParams();
  //const activity = activities.find((activity) => activity.id === params.id)
  
/*   const getActivityDetail = async () => {
    try {
      const res = await getReq(`/admin/activities/${id}`);
      console.log("mi console" + res.data)
      setActivity(res.data);
    } catch (err) {
      return(<h1 className="activity-container">ERROR</h1>) 
    }
   */
  

    return (
      <>
      <ActivityDetails />
      
      </>
  )
}

export default ActivitiesDetails