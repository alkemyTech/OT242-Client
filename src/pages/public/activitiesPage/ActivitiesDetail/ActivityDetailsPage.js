import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedPage from "../../../../components/AnimatedPage";
import { getReq } from "../../../../helpers/ReqToApi";
import Swal from "sweetalert2";
import Button from "../../../../components/buttons/Button";
import "./ActivityDetailsPage.css";

function ActivitiesDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activities, setActivities] = useState({});

  useEffect(() => {
    getActivitiesDetail();
  }, []);

  const getActivitiesDetail = async () => {
    try {
      const res = await getReq(`/admin/activities/${id}`);
      setActivities(res.data);
    } catch (err) {
      Swal.fire("Error 404", "Esta actividad no existe", "error");
      navigate("/activities");
    }
  };

  return (
    <AnimatedPage>
      <div className="act_main_container">
        <div className="act_container">
          <div className="act_text">
            <h2>{activities.name}</h2>
            <p>{activities.content}</p>
            <Button
              onClick={() => navigate("/activities")}
              className="button-primary"
              text="Volver a listado de actividades"
            />
          </div>
          <img
            src={
              "https://s3.sa-east-1.amazonaws.com/ot242-server/" +
              activities.image
            }
            className="act_image"
            alt={activities.name}
          ></img>
        </div>

        <br />
        <br />
      </div>
    </AnimatedPage>
  );
}

export default ActivitiesDetailsPage;
