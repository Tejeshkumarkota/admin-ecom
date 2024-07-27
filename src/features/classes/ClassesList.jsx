import React, { useEffect, useState } from "react";
import MainLayout from "../../shared/_components/MainLayout";
import { Link } from "react-router-dom";
import { RouteConstants } from "../../shared/constants/RouteConstants";
import { Endpoints } from "../../shared/constants/Endpoints";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function ClassesList() {
  let pageTitle = "Classes List";
  const [listData, setListData] = useState();
  const [loading, setLoading] = useState(true);

  const getListData = () => {
    axios
      .get(Endpoints.CATEGORIES)
      .then((res) => {
        setListData(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong!");
        setLoading(false);
      });
  };

  useEffect(() => {
    getListData();
  }, []);

  const deleteCategory = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmation) {
      axios
        .delete(Endpoints.CATEGORIES + "/" + id)
        .then(() => {
          getListData();
          toast.success("Deleted Successfully!");
        })
        .catch((err) => {
          toast.error("Something went wrong!");
        });
    }
  };

  return (
    <>
      <MainLayout>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>{pageTitle}</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to={RouteConstants.CLASSES_LIST}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Classes List</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            {/* Default box */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Title</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                    title="Remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <div className="card-body p-0">
                <table className="table table-striped projects">
                  <thead>
                    <tr>
                      <th style={{ width: "1%" }}>#</th>
                      <th style={{ width: "20%" }}>Product Category Name</th>
                      <th style={{ width: "20%" }}>Product Category Image</th>
                      <th style={{ width: "20%" }}>
                        Product Category Image URL
                      </th>
                      <th style={{ width: "20%" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td className="text-center" colSpan="100%">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      <>
                        {listData &&
                          listData.map((s, idx) => (
                            <tr key={s.id}>
                              <td>{idx+1}</td>
                              <td>
                                {s.productCategoryName?s.productCategoryName:"N/A"}
                              </td>
                              <td>{s.productCategoryImage?s.productCategoryImage: "N/A"}</td>
                              <td>{s.productCategoryImageUrl?s.productCategoryImageUrl:"N/A"}</td>
                              <td className="project-actions text-right">
                                <Link
                                  className="btn btn-primary btn-sm"
                                  to={RouteConstants.CLASSES_LIST}
                                >
                                  <i className="fas fa-folder"></i>
                                  View
                                </Link>
                                <Link
                                  className="btn btn-info btn-sm mx-1"
                                  to={RouteConstants.CLASS_EDIT+s.id}
                                >
                                  <i className="fas fa-pencil-alt"></i>
                                  Edit
                                </Link>
                                <button onClick={()=>deleteCategory(s.id)} className="btn btn-danger btn-sm">
                                  <i className="fas fa-trash"></i>
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {/* /.card */}
          </section>
          {/* /.content */}
        </div>
      </MainLayout>
      <ToastContainer theme="colored" />
    </>
  );
}
