import React, { useContext } from "react";
import userContext from "../@contexts/user-context";
import ResponsiveAppBar from "../@Components/ResponsiveAppBar";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../@Components/ProtectedRoute";
import Redirect from "../@Components/Redirect";
import ListAdmins from "./ListAdmins";
import ListTeachers from "./ListTeachers";
import ListStudents from "./ListStudents";
import AddAdmin from "./AddAdmin";
import AddTeacher from "./AddTeacher";
import AddStudent from "./AddStudent";
import UpdateAdmine from "./UpdateAdmine";
import UpdateTeacher from "./UpdateTeacher";
import UpdateStudent from "./UpdateStudent";
import NotFound from "./NotFound";
import Statistics from "./Statistics";

function Home({ logOut }) {
  const user = useContext(userContext);

  return (
    <div>
      <ResponsiveAppBar logOut={logOut} />
      <Routes>
        <Route path="/" element={<Redirect user={user} />} />

        <Route
          path="/admins"
          element={
            <ProtectedRoute isAllowed={user && user.type === 0}>
              <ListAdmins />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add"
          element={
            <ProtectedRoute isAllowed={user && user.type === 0}>
              <AddAdmin />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin/update/:id"
          element={
            <ProtectedRoute isAllowed={user && user.type === 0}>
              <UpdateAdmine />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/teachers"
          element={
            <ProtectedRoute isAllowed={user && user.type <= 1}>
              <ListTeachers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/add"
          element={
            <ProtectedRoute isAllowed={user && user.type <= 1}>
              <AddTeacher />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/teacher/update/:id"
          element={
            <ProtectedRoute isAllowed={user && user.type <= 1}>
              <UpdateTeacher />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/students"
          element={
            <ProtectedRoute isAllowed={user && user.type <= 1}>
              <ListStudents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/add"
          element={
            <ProtectedRoute isAllowed={user && user.type <= 1}>
              <AddStudent />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/student/update/:id"
          element={
            <ProtectedRoute isAllowed={user && user.type <= 1}>
              <UpdateStudent />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/statistics"
          element={
            <ProtectedRoute isAllowed={user && user.type <= 1}>
              <Statistics />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Home;
