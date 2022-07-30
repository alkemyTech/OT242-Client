import React from "react";

function ActivityDetails(activity) {
    console.log(activity);
    return (
        <div style={{ margin: 100 }} key = {activity.id}>
            <h1>{activity.activity.name}</h1>
            <p>{activity.activity.content}</p>
            <p>{activity.activity.deletedAt}</p>
        </div>
    )
}

export default ActivityDetails
