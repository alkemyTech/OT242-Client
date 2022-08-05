import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ActivityDetails from '../../components/activityDetails/ActivityDetails'

function UIActivityDetails() {
  const activities = useSelector(state => state.activity)
  const params = useParams();
  const activity = activities.find((activity) => activity.id == params.id)
  if (activity != undefined) {
    return (
      <ActivityDetails activity={activity} />
    )
  }
  return (
    <div style={{ margin: 100 }}>
        ERROR
      </div>
  )
}

export default UIActivityDetails