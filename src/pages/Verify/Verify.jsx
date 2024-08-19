import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../../redux/user/operations";
import { Navigate } from "react-router-dom";

export const Verify = () => {
  const { verifyToken } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyEmail(verifyToken));
  }, [dispatch, verifyToken]);

  return <Navigate to="/" />;
};
