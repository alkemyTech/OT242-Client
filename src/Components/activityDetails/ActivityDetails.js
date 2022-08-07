import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getReq } from "../../helpers/ReqToApi";
import "./ActivityDetails.css";

// function ActivityDetails(activity) {
//     console.log(activity);
//     return (
//         <div style={{ margin: 100 }} key = {activity.id}>
//             <h1>{activity.activity.name}</h1>
//             <p>{activity.activity.content}</p>
//             <p>{activity.activity.deletedAt}</p>
//         </div>
//     )
// }

function ActivityDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    getActivityDetail();
  }, []);

  const getActivityDetail = async () => {
    try {
      const res = await getReq(`/admin/activities/${id}`);
      console.log(res.data);
      setActivity(res.data);
    } catch (err) {}
  };
  return (
    <div className="activity-container">
      <img src={activity.image}></img>

      <p>
        <h1>{activity.name}</h1>
        {activity.content} <br></br>
      </p>
      <div className="btn">
        <Button variant="danger" href="/actividades">
          Volver a actividades
        </Button>
      </div>
    </div>
  );
}
export default ActivityDetails;
