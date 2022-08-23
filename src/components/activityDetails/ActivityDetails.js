import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getReq } from "../../helpers/ReqToApi";
import "./ActivityDetails.css";
import { loadActivities } from "../../app/slices/activities";
import { useSelector, useDispatch } from "react-redux";
import ButtonVM from "../buttons/Button_VM";
import { Link } from "react-router-dom";

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

function ActivityDetails(props) {

  const { id, name, image, content, url } = props

  const content_slice = content.slice(0,100)
/*   const { id } = useParams();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    getActivityDetail();
  }, []); */

/* const { activityList } = useSelector(state => state.activity)

console.log(activityList)
 */
/* 
const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadActivities());
  

}, [dispatch]);
 */
  /* const getActivityDetail = async () => {
    try {
      const res = await getReq(`/admin/activities/${id}`);
      console.log("mi console" + res.data)
      setActivity(res.data);
    } catch (err) {
      return(<h1 className="activity-container">ERROR</h1>) 
    } */
  
  return (
    
    <Link to={url} className="link_ad">
      <div className="activity-container">
      <div className="actcard_img" style={{
          backgroundImage: `url('https://s3.sa-east-1.amazonaws.com/ot242-server/${image}')`,
        }} ></div>
      <div>
        <h4>{name}</h4>
      </div> 
      
    </div></Link> 
  );
}
export default ActivityDetails;
